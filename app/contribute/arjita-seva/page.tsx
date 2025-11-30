"use client";

import { useMemo, useState } from "react";
import { HeroBanner } from "@/components";

type Donor = {
  name: string;
  gothram: string;
  mobile: string;
  address: string;
  email?: string;
  preferredDay?: string;
  pan?: string;
};

export default function ArjitaSevaContributePage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donor, setDonor] = useState<Donor>({
    name: "",
    gothram: "",
    mobile: "",
    address: "",
    email: "",
    preferredDay: "",
    pan: "",
  });
  const [paymentRef, setPaymentRef] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const effectiveAmount = useMemo(() => {
    const ca = parseFloat(customAmount);
    if (!isNaN(ca) && ca > 0) return Math.round(ca * 100) / 100;
    return selectedAmount || null;
  }, [customAmount, selectedAmount]);

  const canProceedAmount = Boolean(effectiveAmount && (effectiveAmount as number) >= 50);
  const isValidPhone = (v: string) => {
    const onlyDigits = v.replace(/\D/g, "");
    return /^\d{10}$/.test(onlyDigits) || /^91\d{10}$/.test(onlyDigits);
  };
  const isValidEmail = (v: string) => /.+@.+\..+/.test(v);
  const isValidPAN = (v: string) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(v);

  const validateDonor = () => {
    const e: Record<string, string> = {};
    if (!donor.name.trim() || donor.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!isValidPhone(donor.mobile)) e.mobile = "Enter a valid 10‑digit mobile number.";
    if (!donor.address.trim() || donor.address.trim().length < 5) e.address = "Enter a valid address.";
    if (donor.email && !isValidEmail(donor.email)) e.email = "Enter a valid email address.";
    if (donor.pan && !isValidPAN(donor.pan.toUpperCase())) e.pan = "PAN should be like ABCDE1234F.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const canProceedDonor = Boolean(
    donor.name.trim().length >= 2 && isValidPhone(donor.mobile) && donor.address.trim().length >= 5 && (!donor.email || isValidEmail(donor.email)) && (!donor.pan || isValidPAN(donor.pan.toUpperCase()))
  );

  // Aarjita Seva presets
  const poojaPresets = [
    { label: "Sri Chakra Archana", amount: 2000 },
    { label: "Rudrabhishekam", amount: 1000 },
    { label: "Nitya Pooja", amount: null }, // any amount
    { label: "YatiBhiksha", amount: 5000 },
    { label: "Chandi Homam", amount: 10000 },
  ];

  const handleProceedAmount = () => {
    if (!canProceedAmount) return;
    setStep(2);
  };

  const handleProceedDonor = () => {
    if (!validateDonor()) return;
    setStep(3);
  };

  const handleSubmitPayment = async () => {
    if (!paymentRef.trim()) {
      setErrors((prev) => ({ ...prev, paymentRef: "Please enter payment reference." }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, paymentRef: "" }));
    }
    if (!effectiveAmount || !canProceedDonor) return;
    setSubmitting(true);
    try {
      const payload = {
        category: "Aarjita Seva / Pooja",
        name: donor.name,
        gothram: donor.gothram,
        phone: donor.mobile,
        email: donor.email,
        address: donor.address,
        preferredDay: donor.preferredDay,
        pan: donor.pan,
        amount: effectiveAmount,
        paymentReference: paymentRef,
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

      await fetch("/api/donations/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "arjita-seva",
          name: donor.name,
          phone: donor.mobile,
          email: donor.email,
          amount: effectiveAmount,
          paymentReference: paymentRef,
        }),
      }).catch(() => {});

      setSubmitted(true);
      setStep(4);
    } finally {
      setSubmitting(false);
    }
  };

  // UPI QR support
  const UPI_VPA = "sbpeetham@okaxis";
  const PAYEE_NAME = "Sri Bhuvaneswari Peetham";
  const upiNote = useMemo(() => {
    const base = `Aarjita Seva / Pooja | ${donor.name || "Devotee"} | ${donor.mobile || ""}`.trim();
    return base;
  }, [donor]);
  const upiLink = useMemo(() => {
    if (!effectiveAmount) return "";
    const params = new URLSearchParams({ pa: UPI_VPA, pn: PAYEE_NAME, am: String(effectiveAmount), tn: upiNote, cu: "INR" });
    return `upi://pay?${params.toString()}`;
  }, [effectiveAmount, upiNote]);
  const qrSrc = useMemo(() => {
    if (!upiLink) return "";
    const enc = encodeURIComponent(upiLink);
    return `https://chart.googleapis.com/chart?cht=qr&chs=280x280&chld=M|0&chl=${enc}`;
  }, [upiLink]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner title="Donate to Sri Bhuvaneswari Peetham" description="Aarjita Seva / Pooja" height="small" />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        {/* Category tabs */}
        <div className="flex gap-3">
          <a href="/contribute/temple-renovation" className="px-4 py-2 rounded-lg bg-brand-cream text-brand-maroon border border-brand-gold/30 hover:bg-brand-gold/10">Temple Renovation</a>
          <a href="/contribute/maha-paada-yatra" className="px-4 py-2 rounded-lg bg-brand-cream text-brand-maroon border border-brand-gold/30 hover:bg-brand-gold/10">Maha Paada Yatra</a>
          <span className="px-4 py-2 rounded-lg bg-brand-maroon text-brand-gold font-semibold">Aarjita Seva / Pooja</span>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
            <h2 className="text-2xl font-bold text-brand-maroon mb-4">Aarjita Seva Donation</h2>
            <div className="space-y-6">
              {poojaPresets.map((p, idx) => (
                <label key={idx} className="flex items-center gap-4 text-lg">
                  <input
                    type="radio"
                    name="pooja_amt"
                    checked={selectedAmount === (p.amount ?? null)}
                    onChange={() => {
                      if (p.amount) {
                        setSelectedAmount(p.amount);
                        setCustomAmount("");
                      } else {
                        // Any amount
                        setSelectedAmount(null);
                      }
                    }}
                  />
                  <span>
                    {p.label} – {p.amount ? `₹${p.amount.toLocaleString()}` : "Any amount"}
                  </span>
                </label>
              ))}

              <div>
                <p className="font-semibold text-brand-maroon mb-2">Any Amount</p>
                <input
                  className="w-full border rounded-lg px-4 py-3"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
                <p className="text-black/60 text-xs mt-2">Minimum donation: ₹50</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleProceedAmount}
                  disabled={!canProceedAmount}
                  className={`px-6 py-3 rounded-lg font-semibold ${
                    canProceedAmount
                      ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
            <h2 className="text-2xl font-bold text-brand-maroon mb-4">Donor Details</h2>
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
            <div className="space-y-4">
              <div>
                <input className="w-full border rounded-lg px-4 py-3" placeholder="Full Name" value={donor.name} onChange={(e) => setDonor({ ...donor, name: e.target.value })} onBlur={validateDonor} />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                {!errors.name && <p className="text-black/60 text-xs mt-1">At least 2 characters.</p>}
              </div>
              <input className="w-full border rounded-lg px-4 py-3" placeholder="Gothram" value={donor.gothram} onChange={(e) => setDonor({ ...donor, gothram: e.target.value })} />
              <div>
                <input className="w-full border rounded-lg px-4 py-3" placeholder="Mobile" value={donor.mobile} onChange={(e) => setDonor({ ...donor, mobile: e.target.value })} onBlur={validateDonor} />
                {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
                {!errors.mobile && <p className="text-black/60 text-xs mt-1">10 digits or 91 + 10 digits.</p>}
              </div>
              <div>
                <input className="w-full border rounded-lg px-4 py-3" placeholder="Address" value={donor.address} onChange={(e) => setDonor({ ...donor, address: e.target.value })} onBlur={validateDonor} />
                {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                {!errors.address && <p className="text-black/60 text-xs mt-1">At least 5 characters.</p>}
              </div>
              <div>
                <input className="w-full border rounded-lg px-4 py-3" placeholder="Email (optional)" value={donor.email} onChange={(e) => setDonor({ ...donor, email: e.target.value })} onBlur={validateDonor} />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                {!errors.email && <p className="text-black/60 text-xs mt-1">Valid email format if provided.</p>}
              </div>
              <input className="w-full border rounded-lg px-4 py-3" placeholder="Preferred Day of Pooja" value={donor.preferredDay} onChange={(e) => setDonor({ ...donor, preferredDay: e.target.value })} />
              <div>
                <input className="w-full border rounded-lg px-4 py-3" placeholder="PAN (for 80G)" value={donor.pan} onChange={(e) => setDonor({ ...donor, pan: e.target.value })} onBlur={validateDonor} />
                {errors.pan && <p className="text-red-600 text-sm mt-1">{errors.pan}</p>}
                {!errors.pan && <p className="text-black/60 text-xs mt-1">Format: ABCDE1234F (optional).</p>}
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleProceedDonor}
                className={"px-6 py-3 rounded-lg font-semibold bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"}
              >
                Proceed
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
            <h2 className="text-2xl font-bold text-brand-maroon mb-4">Complete Your Donation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-black/80 space-y-2 mb-6">
                  <p><strong>Bank:</strong> Sri Chidananda Ashram</p>
                  <p>Indian Bank, Gannavaram Branch</p>
                  <p><strong>A/c:</strong> 411448093</p>
                  <p><strong>IFSC:</strong> IDIB000G075</p>
                  <p className="pt-2"><strong>Amount:</strong> ₹{effectiveAmount}</p>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-brand-maroon mb-2">Payment Reference</label>
                  <p className="text-black/60 text-xs mb-2">Required: UTR/Transaction ID or Bank Reference number from your payment.</p>
                  <input className="w-full border rounded-lg px-4 py-3" placeholder="Enter payment reference" value={paymentRef} onChange={(e) => setPaymentRef(e.target.value)} />
                  {errors.paymentRef && <p className="text-red-600 text-sm mt-2">{errors.paymentRef}</p>}
                </div>
                <div className="pt-6">
                  <button
                    onClick={handleSubmitPayment}
                    disabled={submitting || !effectiveAmount}
                    className={`px-6 py-3 rounded-lg font-semibold ${
                      effectiveAmount
                        ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                {qrSrc ? (
                  <div className="text-center md:text-right">
                    <img src={qrSrc} alt="UPI QR" className="w-60 h-60 ml-auto" />
                    <p className="mt-3 text-xs text-black/60">Scan to pay via UPI</p>
                    <p className="mt-1 text-xs text-black/60">UPI ID: {UPI_VPA}</p>
                    <p className="mt-1 text-xs text-black/60">After paying, enter the payment reference on the left.</p>
                    <div className="flex gap-2 justify-center md:justify-end mt-3">
                      <button
                        onClick={() => (window.location.href = upiLink)}
                        className="px-3 py-2 rounded-lg font-semibold bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
                      >
                        Open UPI App
                      </button>
                      <button
                        onClick={() => navigator.clipboard.writeText(upiLink)}
                        className="px-3 py-2 rounded-lg font-semibold border border-brand-gold/40"
                      >
                        Copy UPI Link
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-black/60 text-sm">Set an amount to show QR</div>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20 text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">Blessings</h2>
            <p className="text-lg text-black mb-6">Sri Bhuvaneswari blesses you with prosperity, peace, and divine grace.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Name</p>
                <p className="text-black">{donor.name}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Amount</p>
                <p className="text-black">₹{effectiveAmount}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Mobile</p>
                <p className="text-black">{donor.mobile}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Email</p>
                <p className="text-black">{donor.email || "—"}</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Aarjita Seva Donation\nName: ${donor.name}\nMobile: ${donor.mobile}\nAmount: ₹${effectiveAmount}\nReference: ${paymentRef}`
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