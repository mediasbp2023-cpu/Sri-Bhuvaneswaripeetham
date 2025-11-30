"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { HeroBanner } from "@/components";
import { motion } from "framer-motion";

type Donor = {
  name: string;
  gothram: string;
  mobile: string;
  address: string;
  email?: string;
  preferredDay?: string;
  pan?: string;
};

export default function TempleRenovationContributePage() {
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
    if (!donor.name.trim() || donor.name.trim().length < 2) e.name = "దయచేసి మీ పూర్తి పేరు నమోదు చేయండి.";
    if (!isValidPhone(donor.mobile)) e.mobile = "సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.";
    if (!donor.address.trim() || donor.address.trim().length < 5) e.address = "సరైన చిరునామా నమోదు చేయండి.";
    if (donor.email && !isValidEmail(donor.email)) e.email = "సరైన ఇమెయిల్ చిరునామా నమోదు చేయండి.";
    if (donor.pan && !isValidPAN(donor.pan.toUpperCase())) e.pan = "PAN ఫార్మాట్: ABCDE1234F.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const canProceedDonor = Boolean(
    donor.name.trim().length >= 2 && isValidPhone(donor.mobile) && donor.address.trim().length >= 5 && (!donor.email || isValidEmail(donor.email)) && (!donor.pan || isValidPAN(donor.pan.toUpperCase()))
  );
  const amounts = [500000, 250000, 125000];

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
      setErrors((prev) => ({ ...prev, paymentRef: "దయచేసి చెల్లింపు రిఫరెన్స్ నమోదు చేయండి." }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, paymentRef: "" }));
    }
    if (!effectiveAmount || !canProceedDonor) return;
    setSubmitting(true);
    try {
      const payload = {
        category: "Temple Renovation",
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

      // Forward donation details to collection endpoint
      await fetch("/api/donations/collect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      // Trigger notification (email/SMS) if backend configured
      await fetch("/api/donations/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "temple-renovation",
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
    const base = `Temple Renovation | ${donor.name || "Devotee"} | ${donor.mobile || ""}`.trim();
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
      <HeroBanner
        title="విరాళాలు"
        description="ఆలయ పునరుద్ధరణకు మద్దతు ఇవ్వండి"
        height="medium"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Introduction Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 border border-brand-gold/20"
        >
          <div className="mb-6">
            <Image
              src="/images/temple-renovation-donate.png"
              alt="Temple Renovation Donation"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              unoptimized
              priority
            />
          </div>

          <div className="prose max-w-none text-black text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
            <p>
              మహామాయ ఐన శ్రీ భువనేశ్వరి మాత విశ్వమంతటికి మహారాజ్ఞ్ని, హ్రీంకార బీజరూపిణి. పరమ శాంతి స్వరూపిణి. శ్రీ భువనేశ్వరి విద్య దశ మహావిద్యలలో నాల్గవది. అట్టి మాత ఆలయము ఆగమ శాస్త్రానుగుణంగా స్థపతుల స్థాపత్యంతో కృష్ణశిలతో నిర్మిస్తున్నాము.
            </p>
            <p>
              దేవాలయ పవిత్రత, శాశ్వతత్వములను దృష్టిలో ఉంచుకొని ఈ విధముగా నిర్మించతలపెట్టినాము. <strong>ఒక్కదేవాలయ నిర్మాణము కొరకే రూ. 3.00 కోట్లు ఖర్చు అంచనా వేయబడింది.</strong>
            </p>
            <p>
              అమ్మవారి మూలవిరాట్టు శక్తి పంచాయతనంతో ప్రతిష్ఠితమవుతుంది. విశేషంగా ఇక్కడ ప్రతిష్టించబడిన 17 ఆవరణలు, 367 శివలింగాలతో కూడిన మహిమాన్విత ఋతురసాగ్ని రుద్రమండలమును కూడా కృష్ణశిలతో పునఃనిర్మించి తిరిగి 367గురు దంపతులచేత 367 బాణ లింగాలు పునఃప్రతిష్టింప చేయబడును. అలాగే నిరంతరం అన్నదానం చేయుటకు, శాశ్వతమైన అన్నపూర్ణ పథకం నిర్వహించుటకు అన్నపూర్ణ నిలయం, వంటగది, వంట సామాగ్రి సమకూర్చుకొనవలెను.
            </p>
            <p className="text-xl font-semibold text-brand-maroon">
              సనాతన ధర్మనికి ఎన్నో సవాళ్లు ఎదురవుతున్న ప్రస్తుత పరిస్థితులలో దేవాలయాలను, పీఠాలను కాపాడుకోవలసిన బాధ్యత మనందరిపైన ఉన్నది. అందుకోసం మనవంతు సమర్పణను ధన, వస్తు రూపంగా అందించాలి. అందరూ తరలి వచ్చి ఈ మహత్ కార్యంలో సహకరించవలసినదిగా ప్రార్ధన.
            </p>
          </div>
        </motion.div>

        {/* Category tabs for context */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-4 py-2 rounded-lg bg-brand-maroon text-brand-gold font-semibold">ఆలయ పునరుద్ధరణ</span>
          <a href="/contribute/maha-paada-yatra" className="px-4 py-2 rounded-lg bg-brand-cream text-brand-maroon border border-brand-gold/30 hover:bg-brand-gold/10">మహా పాదయాత్ర</a>
          <a href="/contribute/arjita-seva" className="px-4 py-2 rounded-lg bg-brand-cream text-brand-maroon border border-brand-gold/30 hover:bg-brand-gold/10">అర్జిత సేవ / పూజ</a>
        </div>

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-brand-gold/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-6">విరాళం మొత్తం ఎంచుకోండి</h2>
            <div className="space-y-6">
              <label className="flex items-center gap-4 text-lg cursor-pointer p-4 rounded-lg border-2 border-brand-gold/30 hover:bg-brand-cream transition-colors">
                <input type="radio" name="amt" checked={selectedAmount === amounts[0]} onChange={() => setSelectedAmount(amounts[0])} className="w-5 h-5" />
                <span className="flex-1">ఒక గది – ₹5,00,000</span>
              </label>
              <label className="flex items-center gap-4 text-lg cursor-pointer p-4 rounded-lg border-2 border-brand-gold/30 hover:bg-brand-cream transition-colors">
                <input type="radio" name="amt" checked={selectedAmount === amounts[1]} onChange={() => setSelectedAmount(amounts[1])} className="w-5 h-5" />
                <span className="flex-1">100 చ.అడుగులు – ₹2,50,000</span>
              </label>
              <label className="flex items-center gap-4 text-lg cursor-pointer p-4 rounded-lg border-2 border-brand-gold/30 hover:bg-brand-cream transition-colors">
                <input type="radio" name="amt" checked={selectedAmount === amounts[2]} onChange={() => setSelectedAmount(amounts[2])} className="w-5 h-5" />
                <span className="flex-1">50 చ.అడుగులు – ₹1,25,000</span>
              </label>

              <div className="pt-4 border-t border-brand-gold/20">
                <p className="font-semibold text-brand-maroon mb-3 text-lg">ఇతర మొత్తం</p>
                <input
                  className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                  placeholder="మొత్తం నమోదు చేయండి"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
                <p className="text-black/60 text-sm mt-2">కనీస విరాళం: ₹50</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleProceedAmount}
                  disabled={!canProceedAmount}
                  className={`w-full px-6 py-4 rounded-lg font-semibold text-lg ${
                    canProceedAmount
                      ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90 transition-colors"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  తర్వాత
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-brand-gold/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-6">దాత వివరాలు</h2>
            <div className="mb-6 p-4 bg-brand-gold/10 border border-brand-gold/30 rounded-lg text-sm text-black/80">
              <p className="font-semibold text-brand-maroon mb-2">ఫారమ్ అవసరాలు</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>పేరు: కనీసం 2 అక్షరాలు</li>
                <li>మొబైల్: 10 అంకెలు (91xxxxxxxxxx మద్దతు)</li>
                <li>చిరునామా: కనీసం 5 అక్షరాలు</li>
                <li>ఇమెయిల్: సరైన ఫార్మాట్ (ఐచ్ఛికం)</li>
                <li>PAN: ABCDE1234F ఫార్మాట్ (ఐచ్ఛికం)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-brand-maroon mb-2">పూర్తి పేరు *</label>
                <input className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-maroon" placeholder="పూర్తి పేరు" value={donor.name} onChange={(e) => setDonor({ ...donor, name: e.target.value })} onBlur={validateDonor} />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                {!errors.name && <p className="text-black/60 text-xs mt-1">కనీసం 2 అక్షరాలు.</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-maroon mb-2">గోత్రం</label>
                <input className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-maroon" placeholder="గోత్రం" value={donor.gothram} onChange={(e) => setDonor({ ...donor, gothram: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-maroon mb-2">మొబైల్ *</label>
                <input className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-maroon" placeholder="మొబైల్ నంబర్" value={donor.mobile} onChange={(e) => setDonor({ ...donor, mobile: e.target.value })} onBlur={validateDonor} />
                {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
                {!errors.mobile && <p className="text-black/60 text-xs mt-1">10 అంకెలు లేదా 91 + 10 అంకెలు.</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-maroon mb-2">చిరునామా *</label>
                <input className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-maroon" placeholder="చిరునామా" value={donor.address} onChange={(e) => setDonor({ ...donor, address: e.target.value })} onBlur={validateDonor} />
                {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                {!errors.address && <p className="text-black/60 text-xs mt-1">కనీసం 5 అక్షరాలు.</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-maroon mb-2">ఇమెయిల్ (ఐచ్ఛికం)</label>
                <input className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-maroon" placeholder="ఇమెయిల్" value={donor.email} onChange={(e) => setDonor({ ...donor, email: e.target.value })} onBlur={validateDonor} />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                {!errors.email && <p className="text-black/60 text-xs mt-1">సరైన ఇమెయిల్ ఫార్మాట్ (ఐచ్ఛికం).</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-maroon mb-2">పూజకు ఇష్టమైన రోజు</label>
                <input className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-maroon" placeholder="పూజకు ఇష్టమైన రోజు" value={donor.preferredDay} onChange={(e) => setDonor({ ...donor, preferredDay: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-maroon mb-2">PAN (80G కొరకు)</label>
                <input className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-maroon" placeholder="PAN" value={donor.pan} onChange={(e) => setDonor({ ...donor, pan: e.target.value })} onBlur={validateDonor} />
                {errors.pan && <p className="text-red-600 text-sm mt-1">{errors.pan}</p>}
                {!errors.pan && <p className="text-black/60 text-xs mt-1">ఫార్మాట్: ABCDE1234F (ఐచ్ఛికం).</p>}
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={handleProceedDonor}
                className="w-full px-6 py-4 rounded-lg font-semibold bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90 transition-colors text-lg"
              >
                కొనసాగించు
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-brand-gold/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon mb-6">మీ విరాళాన్ని పూర్తి చేయండి</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-black/80 space-y-2 mb-6 p-4 bg-brand-cream rounded-lg border border-brand-gold/20">
                  <p><strong>బ్యాంక్:</strong> శ్రీ చిదానంద ఆశ్రమం</p>
                  <p>ఇండియన్ బ్యాంక్, గన్నవరం శాఖ</p>
                  <p><strong>ఖాతా:</strong> 411448093</p>
                  <p><strong>IFSC:</strong> IDIB000G075</p>
                  <p className="pt-2 text-xl"><strong>మొత్తం:</strong> ₹{effectiveAmount?.toLocaleString('en-IN')}</p>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-brand-maroon mb-2">చెల్లింపు రిఫరెన్స్ *</label>
                  <p className="text-black/60 text-xs mb-2">అవసరం: UTR/లావాదేవీ ID లేదా మీ చెల్లింపు నుండి బ్యాంక్ రిఫరెన్స్ నంబర్.</p>
                  <input className="w-full border-2 border-brand-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-maroon" placeholder="చెల్లింపు రిఫరెన్స్ నమోదు చేయండి" value={paymentRef} onChange={(e) => setPaymentRef(e.target.value)} />
                  {errors.paymentRef && <p className="text-red-600 text-sm mt-2">{errors.paymentRef}</p>}
                </div>
                <div className="pt-6">
                  <button
                    onClick={handleSubmitPayment}
                    disabled={submitting || !effectiveAmount}
                    className={`w-full px-6 py-4 rounded-lg font-semibold text-lg ${
                      effectiveAmount
                        ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90 transition-colors"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {submitting ? "సమర్పిస్తోంది..." : "సమర్పించు"}
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                {qrSrc ? (
                  <div className="text-center md:text-right">
                    <img src={qrSrc} alt="UPI QR" className="w-60 h-60 ml-auto border-4 border-brand-gold/30 rounded-lg" />
                    <p className="mt-3 text-sm text-black/80 font-semibold">UPI ద్వారా చెల్లించడానికి స్కాన్ చేయండి</p>
                    <p className="mt-1 text-xs text-black/60">UPI ID: {UPI_VPA}</p>
                    <p className="mt-1 text-xs text-black/60">చెల్లించిన తర్వాత, ఎడమ వైపు చెల్లింపు రిఫరెన్స్ నమోదు చేయండి.</p>
                    <div className="flex gap-2 justify-center md:justify-end mt-3">
                      <button
                        onClick={() => (window.location.href = upiLink)}
                        className="px-4 py-2 rounded-lg font-semibold bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90 transition-colors text-sm"
                      >
                        UPI యాప్ తెరువు
                      </button>
                      <button
                        onClick={() => navigator.clipboard.writeText(upiLink)}
                        className="px-4 py-2 rounded-lg font-semibold border-2 border-brand-maroon text-brand-maroon hover:bg-brand-cream transition-colors text-sm"
                      >
                        UPI లింక్ కాపీ చేయి
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-black/60 text-sm">QR చూపించడానికి మొత్తం సెట్ చేయండి</div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20 text-center"
          >
            <div className="text-6xl mb-4">🙏</div>
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">ఆశీర్వాదాలు</h2>
            <p className="text-lg text-black mb-6">శ్రీ భువనేశ్వరి మాత మీకు సంపద, శాంతి మరియు దైవిక కృపతో ఆశీర్వదిస్తారు.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-6">
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">పేరు</p>
                <p className="text-black">{donor.name}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">మొత్తం</p>
                <p className="text-black">₹{effectiveAmount?.toLocaleString('en-IN')}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">మొబైల్</p>
                <p className="text-black">{donor.mobile}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">ఇమెయిల్</p>
                <p className="text-black">{donor.email || "—"}</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `ఆలయ పునరుద్ధరణ విరాళం\nపేరు: ${donor.name}\nమొబైల్: ${donor.mobile}\nమొత్తం: ₹${effectiveAmount}\nరిఫరెన్స్: ${paymentRef}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                WhatsApp లో వివరాలను భాగస్వామ్యం చేయండి
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
