"use client";

import { useEffect, useMemo, useState } from "react";
import { HeroBanner } from "@/components";

export type Category = {
  id: string;
  label: string;
  amounts: number[];
};

export const categories: Category[] = [
  { id: "temple-renovation", label: "Temple Renovation", amounts: [501, 1101, 5101] },
  { id: "maha-paada-yatra", label: "Maha Paada Yatra", amounts: [251, 1001, 2501] },
  { id: "arjita-seva", label: "Aarjita Seva / Pooja", amounts: [101, 501, 1001] },
];

const UPI_VPA = "sbpeetham@okaxis";
const PAYEE_NAME = "Sri Bhuvaneswari Peetham";

export function DonateForm({ defaultCategoryId }: { defaultCategoryId?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    defaultCategoryId ? categories.find((c) => c.id === defaultCategoryId) ?? null : null
  );
  const [name, setName] = useState("");
  const [gothram, setGothram] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [pan, setPan] = useState("");
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const [paid, setPaid] = useState(false);
  const [note, setNote] = useState("");
  const [paymentRef, setPaymentRef] = useState("");

  const [errors, setErrors] = useState<{ [k: string]: string | null }>({});

  const effectiveAmount = useMemo(() => {
    const ca = parseFloat(customAmount);
    if (!isNaN(ca) && ca > 0) return Math.round(ca * 100) / 100;
    return amount || null;
  }, [customAmount, amount]);

  const upiNote = useMemo(() => {
    const base = `${selectedCategory ? selectedCategory.label : "Donation"} | ${name || "Devotee"} | ${phone || ""}`.trim();
    if (note.trim().length) return `${base} | ${note.trim()}`;
    return base;
  }, [selectedCategory, name, phone, note]);

  const upiLink = useMemo(() => {
    if (!effectiveAmount) return "";
    const params = new URLSearchParams({
      pa: UPI_VPA,
      pn: PAYEE_NAME,
      am: String(effectiveAmount),
      tn: upiNote,
      cu: "INR",
    });
    return `upi://pay?${params.toString()}`;
  }, [effectiveAmount, upiNote]);

  const qrSrc = useMemo(() => {
    if (!upiLink) return "";
    const enc = encodeURIComponent(upiLink);
    return `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=M|0&chl=${enc}`;
  }, [upiLink]);

  // Validation helpers
  const isAarjita = selectedCategory?.id === "arjita-seva";
  const validName = name.trim().length >= 2;
  const validPhone = /^(?:\+?91)?[6-9]\d{9}$/.test(phone.trim());
  const validEmail = !email.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const validAddress = !isAarjita || address.trim().length >= 5;
  const validPAN = !pan.trim() || /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan.trim());
  const canProceed = Boolean(
    selectedCategory && validName && validPhone && validEmail && validAddress && validPAN && effectiveAmount
  );
  const paymentRefValid = !isAarjita || paymentRef.trim().length >= 4;
  const canConfirm = Boolean(canProceed && paymentRefValid);

  const validateDonor = () => {
    const e: { [k: string]: string | null } = {};
    e.name = validName ? null : "Name must be at least 2 characters.";
    e.mobile = validPhone ? null : "Mobile must be 10 digits (or 91xxxxxxxxxx).";
    e.email = validEmail ? null : "Enter a valid email address.";
    if (isAarjita) {
      e.address = validAddress ? null : "Address must be at least 5 characters.";
      e.pan = validPAN ? null : "PAN must be ABCDE1234F format.";
    }
    setErrors(e);
    return Object.values(e).every((v) => v === null);
  };

  const handlePay = () => {
    try {
      if (!upiLink) return;
      window.location.href = upiLink;
    } catch {}
  };

  const handleConfirmPaid = async () => {
    if (!canConfirm) {
      validateDonor();
      return;
    }
    try {
      const payload = {
        category: selectedCategory?.label,
        name,
        phone,
        email,
        gothram: isAarjita ? gothram : undefined,
        address: isAarjita ? address : undefined,
        preferredDay: isAarjita ? preferredDay : undefined,
        pan: isAarjita ? pan : undefined,
        amount: effectiveAmount,
        note: upiNote,
        reference: isAarjita ? paymentRef.trim() : undefined,
        time: new Date().toISOString(),
      };
      const logs = JSON.parse(localStorage.getItem("bp_donations") || "[]");
      logs.push(payload);
      localStorage.setItem("bp_donations", JSON.stringify(logs));
      await fetch("/api/donations/collect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch {}
    setPaid(true);
  };

  // Auto-show QR when amount is chosen
  useEffect(() => {
    if (effectiveAmount && !showQR) setShowQR(true);
  }, [effectiveAmount, showQR]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Donate"
        description="Support Sri Bhuvaneswari Peetham"
        height="medium"
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {!paid && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
              <h2 className="text-2xl font-bold text-brand-maroon mb-4">Choose Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setAmount(null);
                      setCustomAmount("");
                    }}
                    className={`px-4 py-3 rounded-lg font-semibold border transition-colors ${
                      selectedCategory?.id === cat.id
                        ? "bg-brand-maroon text-brand-gold border-brand-maroon"
                        : "bg-brand-cream text-brand-maroon border-brand-gold/30 hover:bg-brand-gold/10"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-brand-maroon mb-4">Your Details</h2>
              {isAarjita && (
                <div className="mb-4 p-3 bg-brand-gold/10 border border-brand-gold/30 rounded-lg text-sm text-black/80">
                  <p className="font-semibold text-brand-maroon mb-1">Form requirements</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Name: at least 2 characters.</li>
                    <li>Mobile: 10 digits (supports 91xxxxxxxxxx).</li>
                    <li>Address: at least 5 characters.</li>
                    <li>Email: valid format if provided.</li>
                    <li>PAN: ABCDE1234F format if provided.</li>
                  </ul>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  className="border rounded-lg px-4 py-3"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validateDonor}
                />
                {errors.name && <p className="md:col-span-2 text-red-600 text-sm">{errors.name}</p>}
                {isAarjita && (
                  <input
                    className="border rounded-lg px-4 py-3"
                    placeholder="Gothram"
                    value={gothram}
                    onChange={(e) => setGothram(e.target.value)}
                  />
                )}
                <input
                  className="border rounded-lg px-4 py-3"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={validateDonor}
                />
                {errors.mobile && <p className="md:col-span-2 text-red-600 text-sm">{errors.mobile}</p>}
                {isAarjita && (
                  <input
                    className="border rounded-lg px-4 py-3 md:col-span-2"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onBlur={validateDonor}
                  />
                )}
                <input
                  className="border rounded-lg px-4 py-3 md:col-span-2"
                  placeholder="Email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateDonor}
                />
                {errors.email && <p className="md:col-span-2 text-red-600 text-sm">{errors.email}</p>}
                {isAarjita && (
                  <>
                    <input
                      className="border rounded-lg px-4 py-3 md:col-span-2"
                      placeholder="Preferred Day of Pooja"
                      value={preferredDay}
                      onChange={(e) => setPreferredDay(e.target.value)}
                    />
                    <input
                      className="border rounded-lg px-4 py-3 md:col-span-2"
                      placeholder="PAN (for 80G)"
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      onBlur={validateDonor}
                    />
                    {errors.pan && <p className="md:col-span-2 text-red-600 text-sm">{errors.pan}</p>}
                  </>
                )}
                <input
                  className="border rounded-lg px-4 py-3 md:col-span-2"
                  placeholder="Additional note (optional)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <h2 className="text-2xl font-bold text-brand-maroon mb-4">Amount</h2>
              <div className="flex flex-wrap gap-3 mb-4">
                {(selectedCategory?.amounts || [251, 501, 1001]).map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                      amount === amt
                        ? "bg-brand-maroon text-brand-gold border-brand-maroon"
                        : "bg-brand-cream text-brand-maroon border-brand-gold/30 hover:bg-brand-gold/10"
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
                <input
                  className="border rounded-full px-4 py-2 text-sm"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
                <p className="text-black/60 text-xs">Minimum donation: ₹50</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  disabled={!canProceed}
                  onClick={handlePay}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    canProceed
                      ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Pay via UPI
                </button>
                <button
                  disabled={!upiLink}
                  onClick={() => setShowQR((v) => !v)}
                  className={`px-6 py-3 rounded-lg font-semibold border transition-colors ${
                    upiLink
                      ? "bg-white text-brand-maroon border-brand-gold/40 hover:bg-brand-gold/10"
                      : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                  }`}
                >
                  {showQR ? "Hide QR" : "Show QR"}
                </button>
                <button
                  disabled={!upiLink}
                  onClick={() => navigator.clipboard.writeText(upiLink)}
                  className={`px-6 py-3 rounded-lg font-semibold border transition-colors ${
                    upiLink
                      ? "bg-white text-brand-maroon border-brand-gold/40 hover:bg-brand-gold/10"
                      : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                  }`}
                >
                  Copy UPI Link
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
              <h3 className="text-xl font-semibold text-brand-maroon mb-4">Payment Details</h3>
              <div className="text-sm text-black/80 space-y-2 mb-4">
                <p><strong>Account:</strong> {PAYEE_NAME}</p>
                <p><strong>UPI ID:</strong> {UPI_VPA}</p>
                <p><strong>Category:</strong> {selectedCategory ? selectedCategory.label : "Not selected"}</p>
                <p><strong>Amount:</strong> {effectiveAmount ? `₹${effectiveAmount}` : "Not set"}</p>
                <p><strong>Note:</strong> {upiNote}</p>
              </div>
              {showQR && qrSrc && (
                <div className="flex flex-col items-center">
                  <img src={qrSrc} alt="UPI QR" className="w-64 h-64" />
                  <p className="mt-3 text-xs text-black/60">Scan with UPI app to pay</p>
                </div>
              )}

              {isAarjita && (
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-brand-maroon mb-2">Payment Reference</label>
                  <input
                    className="w-full border rounded-lg px-4 py-3"
                    placeholder="Enter transaction reference (UPI/Bank)"
                    value={paymentRef}
                    onChange={(e) => setPaymentRef(e.target.value)}
                  />
                  {!paymentRefValid && (
                    <p className="text-red-600 text-sm mt-1">Reference must be at least 4 characters.</p>
                  )}
                  {paymentRefValid && (
                    <p className="text-black/60 text-xs mt-1">E.g., UPI txn ID or bank ref no.</p>
                  )}
                </div>
              )}

              <div className="mt-6 border-t pt-6">
                <p className="text-sm text-black/70 mb-3">After completing the payment, confirm to receive blessing.</p>
                <button
                  disabled={!canConfirm}
                  onClick={handleConfirmPaid}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                    canConfirm
                      ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  I have completed payment
                </button>
              </div>
            </div>
          </div>
        )}

        {paid && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20 text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">Blessings</h2>
            <p className="text-lg text-black mb-6">Sri Bhuvaneswari blesses you with prosperity, peace, and divine grace.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Name</p>
                <p className="text-black">{name}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Category</p>
                <p className="text-black">{selectedCategory?.label}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Amount</p>
                <p className="text-black">₹{effectiveAmount}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">UPI ID</p>
                <p className="text-black">{UPI_VPA}</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Donation: ${selectedCategory?.label}\nName: ${name}\nPhone: ${phone}\nAmount: ₹${effectiveAmount}\nNote: ${upiNote}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700"
              >
                Share details on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DonatePage() {
  return <DonateForm />;
}