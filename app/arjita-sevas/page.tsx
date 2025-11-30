"use client";

import { useState } from "react";
import { HeroBanner } from "@/components";

export default function ArjitaSevasPage() {
  const [section, setSection] = useState<1 | 2 | 3 | 4>(1);
  const [amount, setAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [gothram, setGothram] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [poojaday, setPoojaday] = useState("");
  const [pan, setPan] = useState("");
  const [paymentRef, setPaymentRef] = useState("");

  const showSection2 = () => {
    setSection(2);
  };

  const goToPayment = () => {
    if (!fullName.trim() || !mobile.trim()) return;
    setSection(3);
  };

  const finishDonation = async () => {
    if (!paymentRef.trim()) return;
    
    const payload = {
      category: "Aarjita Seva / Pooja",
      name: fullName,
      gothram,
      phone: mobile,
      address,
      email,
      poojaday,
      pan,
      amount: customAmount || amount,
      paymentRef,
      time: new Date().toISOString(),
    };

    try {
      const logs = JSON.parse(localStorage.getItem("bp_donations") || "[]");
      logs.push(payload);
      localStorage.setItem("bp_donations", JSON.stringify(logs));
      await fetch("/api/donations/collect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch {}

    setSection(4);
  };

  const getEffectiveAmount = () => {
    if (customAmount) return customAmount;
    return amount;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Aarjita Sevas"
        description="Book your seva and pooja"
        height="medium"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Seva Information Section */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-brand-gold/20 mb-8">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-brand-maroon mb-6 text-center">శ్రీ భువనేశ్వరి పీఠము</h1>
            
            <div className="prose max-w-none text-black mb-6">
              <p className="text-lg leading-relaxed mb-4">
                శ్రీ శృంగేరి శ్రీ విరూపాక్ష శ్రీ పీఠాధ్యక్ష శ్రీ జగద్గురు శ్రీశ్రీశ్రీ కల్యాణానంద భారతి మహాస్వామి పరంపరా సముల్లసిత శ్రీభువనేశ్వరి పీఠంలో ప్రతినిత్యం ఉదయం - శ్రీచక్ర పూజ లలితా సహస్రనామములతో కుంకుమార్చన; సాయంత్రం - శ్రీదేవి ఖడ్గమాలతో కుంకుమార్చన; ప్రతి శుక్రవారం మరియు పౌర్ణమి - శ్రీచక్ర నవావరణార్చన; ప్రతి సోమవారము మరియు మాస శివరాత్రి - శ్రీ రుద్రమండలమునకు మహాన్యాస పూర్వక రుద్రాభిషేకము జరుగుతున్నవి. భక్తులందరికి స్వాగతం.
              </p>
              
              <h2 className="text-2xl font-bold text-brand-maroon mt-8 mb-4">పై పూజా కార్యక్రమములలో మీ యొక్క గోత్రనామములతో పూజ జరిపించుకొనుటకై</h2>
              
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>శుక్రవారము లేదా పౌర్ణమినాడు - శ్రీ చక్ర నవావరణార్చనకు;</li>
                <li>సోమవారము లేదా మాస శివరాత్రినాడు మహాన్యాస పూర్వక రుద్రాభిషేకమునకు;</li>
                <li>ప్రతినిత్యం జరుగు అమ్మవారి పూజకు కుంకుమార్చనకు;</li>
              </ul>
              
              <p className="text-lg leading-relaxed mb-4">
                శ్రీ చండీ హోమము, శ్రీ లక్ష్మీ గణపతి హోమము, ఆయుష్ హోమము, నవగ్రహ హోమము, నాగ పూజ, పంచముఖ ఆంజనేయ పూజ/అభిషేకము, తదితర పూజలు, హోమములకు నిర్దేశించిన పూజా రుసుము చెల్లించి మీ గోత్ర నామాలు నమోదు చేయించుకోగలరు. హోమ ద్రవ్యములు కర్త ఏర్పాటు చేయవలెను. కార్యక్రమములో మీరు సకుటుంబముగా పాల్గొనటం అభిలషణీయము.
              </p>
              
              <p className="text-lg leading-relaxed">
                వివరముల కొరకు అర్చకులు - మల్లేశ్వర శర్మగారిని సంప్రదించగలరు - ఫోన్ : <a href="tel:+919000213949" className="text-brand-maroon hover:underline">+91 90002 13949</a> - <a href="mailto:sbp.info2023@gmail.com" className="text-brand-maroon hover:underline">sbp.info2023@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6 text-center">
            🙏 Aarjita Seva / Pooja 🙏
          </h2>

          {/* Section 1: Pooja Selection */}
          {section === 1 && (
            <div className="space-y-6">
              <div className="mt-8 bg-brand-cream/50 rounded-lg p-6 border border-brand-gold/20">
                <h3 className="text-xl font-semibold text-brand-maroon mb-4">
                  Aarjita Seva / Pooja
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="amt"
                      value="2000"
                      checked={amount === "2000"}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setCustomAmount("");
                      }}
                      className="w-5 h-5"
                    />
                    <span className="text-black">Sri Chakra Archana – ₹2,000</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="amt"
                      value="1000"
                      checked={amount === "1000"}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setCustomAmount("");
                      }}
                      className="w-5 h-5"
                    />
                    <span className="text-black">Rudrabhishekam – ₹1,000</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="amt"
                      value="custom"
                      checked={amount === "custom"}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setCustomAmount("");
                      }}
                      className="w-5 h-5"
                    />
                    <span className="text-black">Nitya Pooja – Any Amount</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="amt"
                      value="5000"
                      checked={amount === "5000"}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setCustomAmount("");
                      }}
                      className="w-5 h-5"
                    />
                    <span className="text-black">YatiBhiksha – ₹5,000</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="amt"
                      value="10000"
                      checked={amount === "10000"}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setCustomAmount("");
                      }}
                      className="w-5 h-5"
                    />
                    <span className="text-black">Chandi Homam – ₹10,000</span>
                  </label>
                  <input
                    id="customAmount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg mt-2"
                  />
                </div>

                <button
                  onClick={showSection2}
                  disabled={!getEffectiveAmount()}
                  className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    getEffectiveAmount()
                      ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Section 2: Donor Details */}
          {section === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-brand-maroon mb-4">Donor Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-black font-semibold mb-2">Full Name *</label>
                  <input
                    id="fullname"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">Gothram</label>
                  <input
                    id="gothram"
                    type="text"
                    value={gothram}
                    onChange={(e) => setGothram(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">Mobile *</label>
                  <input
                    id="mobile"
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">Email (optional)</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-black font-semibold mb-2">Address</label>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">Preferred Day of Pooja</label>
                  <input
                    id="poojaday"
                    type="text"
                    value={poojaday}
                    onChange={(e) => setPoojaday(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-black font-semibold mb-2">PAN (for 80G)</label>
                  <input
                    id="pan"
                    type="text"
                    value={pan}
                    onChange={(e) => setPan(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <button
                onClick={goToPayment}
                disabled={!fullName.trim() || !mobile.trim()}
                className={`mt-6 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  fullName.trim() && mobile.trim()
                    ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                Proceed
              </button>
            </div>
          )}

          {/* Section 3: Payment */}
          {section === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-brand-maroon mb-4">
                Complete Your Donation
              </h3>
              <div className="flex flex-col items-center space-y-6">
                <div className="qrcode">
                  <img
                    src="/images/donate/qr-upi.svg"
                    alt="QR Code"
                    className="w-64 h-64"
                  />
                </div>
                <div id="bankinfo" className="text-center text-black/80">
                  <div>
                    <p><strong>Bank:</strong> Sri Chidananda Ashram</p>
                    <p>Indian Bank, Gannavaram Branch</p>
                    <p><strong>A/c:</strong> 411448093</p>
                    <p><strong>IFSC:</strong> IDIB000G075</p>
                  </div>
                </div>
                <div className="w-full max-w-md">
                  <label className="block text-black font-semibold mb-2">Payment Reference *</label>
                  <input
                    id="paymentref"
                    type="text"
                    value={paymentRef}
                    onChange={(e) => setPaymentRef(e.target.value)}
                    placeholder="Enter UPI transaction ID or bank reference"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                <button
                  onClick={finishDonation}
                  disabled={!paymentRef.trim()}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    paymentRef.trim()
                      ? "bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Thank You */}
          {section === 4 && (
            <div className="text-center space-y-6 py-8">
              <h2 className="text-4xl font-bold text-brand-maroon">🙏 Thank You 🙏</h2>
              <p className="text-xl text-black/80">
                Your seva/donation is received with gratitude.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
