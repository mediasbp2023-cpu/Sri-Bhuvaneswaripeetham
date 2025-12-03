"use client";

import { useState } from "react";
import { HeroBanner } from "@/components";

type Category = "temple" | "yatra" | "seva";

export default function DonatePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
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

  const selectCategory = (type: Category) => {
    setSelectedCategory(type);
    setSection(1);
    setAmount("");
    setCustomAmount("");
  };

  const showSection2 = () => {
    if (!selectedCategory) return;
    setSection(2);
  };

  const goToPayment = () => {
    if (!fullName.trim() || !mobile.trim()) return;
    setSection(3);
  };

  const finishDonation = async () => {
    if (!paymentRef.trim()) return;
    
    const payload = {
      category: selectedCategory === "temple" ? "Temple Renovation" : 
                 selectedCategory === "yatra" ? "Maha Paada Yatra" : 
                 "Aarjita Seva / Pooja",
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
        title="Donate"
        description="Support Sri Bhuvaneswari Peetham"
        height="medium"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20">
          <h2 className="text-3xl font-bold text-brand-maroon mb-6 text-center">
            🙏 Donate to Sri Bhuvaneswari Peetham 🙏
          </h2>
          <p className="text-center text-black/70 mb-8">
            Please choose the category you wish to donate to:
          </p>

          {/* Category Selection */}
          {section === 1 && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => selectCategory("temple")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedCategory === "temple"
                      ? "bg-brand-maroon text-brand-gold"
                      : "bg-brand-cream text-brand-maroon border border-brand-gold/30 hover:bg-brand-gold/10"
                  }`}
                >
                  Temple Renovation
                </button>
                <button
                  onClick={() => selectCategory("yatra")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedCategory === "yatra"
                      ? "bg-brand-maroon text-brand-gold"
                      : "bg-brand-cream text-brand-maroon border border-brand-gold/30 hover:bg-brand-gold/10"
                  }`}
                >
                  Maha Paada Yatra
                </button>
                <button
                  onClick={() => selectCategory("seva")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    selectedCategory === "seva"
                      ? "bg-brand-maroon text-brand-gold"
                      : "bg-brand-cream text-brand-maroon border border-brand-gold/30 hover:bg-brand-gold/10"
                  }`}
                >
                  Aarjita Seva / Pooja
                </button>
              </div>

              {/* Section 1: Amount Selection */}
              {selectedCategory && (
                <div className="mt-8 bg-brand-cream/50 rounded-lg p-6 border border-brand-gold/20">
                  {selectedCategory === "temple" && (
                    <>
                      <h3 className="text-xl font-semibold text-brand-maroon mb-4">
                        Temple Renovation Donation
                      </h3>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="amt"
                            value="500000"
                            checked={amount === "500000"}
                            onChange={(e) => {
                              setAmount(e.target.value);
                              setCustomAmount("");
                            }}
                            className="w-5 h-5"
                          />
                          <span className="text-black">One Room – ₹5,00,000</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="amt"
                            value="250000"
                            checked={amount === "250000"}
                            onChange={(e) => {
                              setAmount(e.target.value);
                              setCustomAmount("");
                            }}
                            className="w-5 h-5"
                          />
                          <span className="text-black">100 SqFt – ₹2,50,000</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="amt"
                            value="125000"
                            checked={amount === "125000"}
                            onChange={(e) => {
                              setAmount(e.target.value);
                              setCustomAmount("");
                            }}
                            className="w-5 h-5"
                          />
                          <span className="text-black">50 SqFt – ₹1,25,000</span>
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
                          <span className="text-black">Any Amount</span>
                        </label>
                        {amount === "custom" && (
                          <input
                            id="customAmount"
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg mt-2"
                          />
                        )}
                      </div>
                    </>
                  )}

                  {selectedCategory === "yatra" && (
                    <>
                      <h3 className="text-xl font-semibold text-brand-maroon mb-4">
                        Maha Paada Yatra Donation
                      </h3>
                      <div className="space-y-3">
                        <label className="block text-black mb-2">Any Amount</label>
                        <input
                          id="customAmount"
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                    </>
                  )}

                  {selectedCategory === "seva" && (
                    <>
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
                        {amount === "custom" && (
                          <input
                            id="customAmount"
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg mt-2"
                          />
                        )}
                      </div>
                    </>
                  )}

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
              )}
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
                <div className="qrcode text-center">
                  {(selectedCategory === "temple" || selectedCategory === "seva") ? (
                    <img
                      src="/images/donate/image.png"
                      alt="UPI QR"
                      className="w-64 h-64 rounded-lg border"
                    />
                  ) : (
                    <img
                      src="/images/donate/image.png"
                      alt="QR Code"
                      className="w-64 h-64 rounded-lg border"
                    />
                  )}
                  <div className="mt-3 text-sm text-black/80">
                    <div><strong>Name:</strong> SRI CHIDANANDA ASHRAM</div>
                    <div><strong>Pay Directly to:</strong> srichida@indianbk</div>
                  </div>
                </div>
                <div id="bankinfo" className="text-center text-black/80">
                  {(selectedCategory === "temple" || selectedCategory === "seva") ? (
                    <div>
                      <p><strong>Bank:</strong> Sri Chidananda Ashram</p>
                      <p>Indian Bank, Gannavaram Branch</p>
                      <p><strong>A/c:</strong> 411448093</p>
                      <p><strong>IFSC:</strong> IDIB000G075</p>
                    </div>
                  ) : (
                    <div>
                      <p><strong>Bank:</strong> Sri Bhuvaneswari Peetham</p>
                      <p>ICICI Bank, Gannavaram Branch</p>
                      <p><strong>A/c:</strong> 412301000387</p>
                      <p><strong>IFSC:</strong> ICIC0004123</p>
                    </div>
                  )}
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
              <p className="text-xl text-black/80">Your seva/donation is received with gratitude.</p>
              <p className="text-lg text-brand-maroon">Sri Bhuvaneswari Mata bless you and your family.</p>
              <p className="text-lg text-brand-maroon">శ్రీ భువనేశ్వరి మాత ఆశీస్సులు మీకు, మీ కుటుంబానికి ఉండాలి.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
