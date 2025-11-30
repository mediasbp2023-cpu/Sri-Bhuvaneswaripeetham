"use client";

import { useMemo, useState } from "react";
import { HeroBanner } from "@/components";

type Category = {
  id: string;
  label: string;
  amounts: number[];
};

const categories: Category[] = [
  { id: "temple-renovation", label: "Temple Renovation", amounts: [501, 1101, 5101] },
  { id: "maha-paada-yatra", label: "Maha Paada Yatra", amounts: [251, 1001, 2501] },
  { id: "arjita-seva", label: "Aarjita Seva / Pooja", amounts: [101, 501, 1001] },
];

const UPI_VPA = "sbpeetham@okaxis";
const PAYEE_NAME = "Sri Bhuvaneswari Peetham";

export default function DonatePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const [paid, setPaid] = useState(false);
  const [note, setNote] = useState("");

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

  const canProceed = Boolean(selectedCategory && name.trim() && phone.trim() && effectiveAmount);

  const handlePay = () => {
    try {
      if (!upiLink) return;
      window.location.href = upiLink;
    } catch {}
  };

  const handleConfirmPaid = async () => {
    try {
      const payload = {
        category: selectedCategory?.label,
        name,
        phone,
        email,
        amount: effectiveAmount,
        note: upiNote,
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  className="border rounded-lg px-4 py-3"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="border rounded-lg px-4 py-3"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className="border rounded-lg px-4 py-3 md:col-span-2"
                  placeholder="Email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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

              <div className="mt-6 border-t pt-6">
                <p className="text-sm text-black/70 mb-3">After completing the payment, confirm to receive blessing.</p>
                <button
                  disabled={!canProceed}
                  onClick={handleConfirmPaid}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                    canProceed
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