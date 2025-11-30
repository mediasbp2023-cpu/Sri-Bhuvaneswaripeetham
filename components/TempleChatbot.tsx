"use client";
import { useState } from "react";

type Message = { from: "bot" | "user"; text: string; source?: string };
type Scope = "all" | "info" | "darshan" | "donations" | "volunteer";

const faqs = [
  { q: "What are the temple timings?", a: "Morning: 5:30 AM - 12:00 PM, Evening: 6:30 PM - 8:30 PM. Special puja at 7:00 PM." },
  { q: "How can I reach the temple?", a: "Bhuvaneshwari Peetham is located in Nidubrolu, Andhra Pradesh. See the Contact page for directions." },
  { q: "Is there a dress code for darshan?", a: "Traditional attire is recommended. Please avoid shorts and sleeveless tops." },
  { q: "How do I donate to the temple?", a: "Visit the Donate page for account details and donation options." },
  { q: "Can I volunteer at the temple?", a: "Yes! Please contact the ashram or fill out the feedback form to express your interest." }
];

const darshanDates = [
  { date: "2025-11-08", event: "Special Lakshmi Puja" },
  { date: "2025-11-15", event: "Monthly Abhishekam" },
  { date: "2025-11-22", event: "Community Satsang" }
];

const intents = [
  { id: "timings", scope: "info" as Scope, patterns: ["timing", "hours", "open", "close", "schedule"], answer: faqs[0].a, source: "FAQs • Temple timings" },
  { id: "location", scope: "info" as Scope, patterns: ["reach", "location", "where", "address", "contact"], answer: faqs[1].a, source: "FAQs • Directions" },
  { id: "dress", scope: "info" as Scope, patterns: ["dress", "attire", "clothes", "code"], answer: faqs[2].a, source: "FAQs • Dress code" },
  { id: "donate", scope: "donations" as Scope, patterns: ["donate", "donation", "account", "bank"], answer: faqs[3].a, source: "FAQs • Donations" },
  { id: "volunteer", scope: "volunteer" as Scope, patterns: ["volunteer", "help", "service"], answer: faqs[4].a, source: "FAQs • Volunteer" },
];

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getAnswer(query: string, scope: Scope, strict: boolean): { text: string; source?: string } | null {
  const q = normalize(query);

  // Darshan scope handled separately
  if ((scope === "all" || scope === "darshan") && ["darshan", "date", "event", "schedule"].some(k => q.includes(k))) {
    const text = "Upcoming darshan dates:" + darshanDates.map(d => `\n${d.date}: ${d.event}`).join("");
    return { text, source: "Schedule • Darshan dates" };
  }

  // Intent matching within selected scope
  const candidateIntents = intents.filter(i => scope === "all" || i.scope === scope);
  const match = candidateIntents.find(i => i.patterns.some(p => q.includes(p)));

  if (match) return { text: match.answer, source: match.source };

  // Strict mode: do not guess
  if (strict) return null;

  // Non-strict fallback: generic guidance
  return { text: "I can help with temple info, darshan dates, donations, or volunteering.", source: "Helper" };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Namaste! Ask about timings, darshan dates, donations, or volunteering.", source: "Helper" }
  ]);
  const [input, setInput] = useState("");
  // Normal mode: no scopes toggle, no strict gating
  const scope: Scope = "all";
  const strict = false;

  function sendMessage() {
    if (!input.trim()) return;
    const userText = input;
    setMessages(prev => [...prev, { from: "user", text: userText }]);
    setTimeout(() => {
      const res = getAnswer(userText, scope, strict);
      if (res) {
        setMessages(prev => [...prev, { from: "bot", text: res.text, source: res.source }]);
      } else {
        setMessages(prev => [...prev, { from: "bot", text: "I don’t have that information yet. Try: timings, location, dress code, darshan dates, donations, volunteering.", source: "Strict mode" }]);
      }
    }, 350);
    setInput("");
  }

  const suggestions = [
    { label: "Temple timings", text: "What are the temple timings?" },
    { label: "Darshan dates", text: "What are upcoming darshan dates?" },
    { label: "Donate", text: "How do I donate to the temple?" },
    { label: "Volunteer", text: "Can I volunteer at the temple?" },
  ];

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-brand-maroon text-brand-gold rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl hover:bg-brand-maroon/90 transition"
        onClick={() => setOpen(o => !o)}
        aria-label="Temple Chatbot"
      >
        💬
      </button>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl border border-brand-gold/20 p-4 flex flex-col">
          <div className="font-bold text-brand-maroon mb-3">Chatbot</div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-2" style={{ maxHeight: 260 }}>
            {messages.map((m, i) => (
              <div key={i} className={`mb-2 text-sm ${m.from === "bot" ? "text-brand-maroon" : "text-brand-maroon text-right"}`}>
                <div>{m.text}</div>
                {m.source && <div className="text-[11px] text-brand-maroon/70">Source: {m.source}</div>}
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-2 mb-2">
            {suggestions.map(s => (
              <button key={s.label} className="px-2 py-1 rounded border border-brand-gold/30 text-xs text-brand-maroon hover:bg-brand-gold/10" onClick={() => setInput(s.text)}>
                {s.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              className="flex-1 border border-brand-gold/30 rounded px-2 py-1 text-sm"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask about timings, darshan, donate..."
            />
            <button className="px-3 py-1 text-sm rounded bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
