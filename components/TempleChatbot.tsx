"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What are the temple timings?",
    a: "Morning: 5:30 AM - 12:00 PM, Evening: 6:30 PM - 8:30 PM. Special puja at 7:00 PM."
  },
  {
    q: "How can I reach the temple?",
    a: "Bhuvaneshwari Peetham is located in Nidubrolu, Andhra Pradesh. See the Contact page for directions."
  },
  {
    q: "Is there a dress code for darshan?",
    a: "Traditional attire is recommended. Please avoid shorts and sleeveless tops."
  },
  {
    q: "How do I donate to the temple?",
    a: "Visit the Donate page for account details and donation options."
  },
  {
    q: "Can I volunteer at the temple?",
    a: "Yes! Please contact the ashram or fill out the feedback form to express your interest."
  }
];

const darshanDates = [
  { date: "2025-11-08", event: "Special Lakshmi Puja" },
  { date: "2025-11-15", event: "Monthly Abhishekam" },
  { date: "2025-11-22", event: "Community Satsang" }
];

function getAnswer(query: string): string {
  query = query.toLowerCase();
  if (query.includes("timing") || query.includes("open") || query.includes("close")) {
    return faqs[0].a;
  }
  if (query.includes("reach") || query.includes("location") || query.includes("where")) {
    return faqs[1].a;
  }
  if (query.includes("dress")) {
    return faqs[2].a;
  }
  if (query.includes("donate") || query.includes("donation")) {
    return faqs[3].a;
  }
  if (query.includes("volunteer")) {
    return faqs[4].a;
  }
  if (query.includes("darshan") || query.includes("date") || query.includes("event")) {
    return (
      "Upcoming darshan dates:" +
      darshanDates.map(d => `\n${d.date}: ${d.event}`).join("")
    );
  }
  return "I'm here to help with temple info! Ask about timings, darshan dates, donations, or volunteering.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Namaste! How can I help you with temple info or darshan dates?" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setTimeout(() => {
      const answer = getAnswer(input);
      setMessages(msgs => [...msgs, { from: "bot", text: answer }]);
    }, 400);
    setInput("");
  }

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-orange-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl hover:bg-orange-700 transition"
        onClick={() => setOpen(o => !o)}
        aria-label="Temple Chatbot"
      >
        💬
      </button>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl border p-4 flex flex-col">
          <div className="font-bold text-orange-600 mb-2">Chatbot</div>
          <div className="flex-1 overflow-y-auto mb-2" style={{ maxHeight: 260 }}>
            {messages.map((m, i) => (
              <div key={i} className={`mb-2 text-sm ${m.from === "bot" ? "text-black" : "text-orange-600 text-right"}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask about timings, darshan..."
            />
            <button className="btn-primary px-3 py-1 text-sm" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
