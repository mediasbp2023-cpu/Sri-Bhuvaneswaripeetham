"use client";

import { useMemo, useState } from 'react';
import { BackNav } from '@/components/BackNav';

type Slot = {
  id: string;
  label: string;
};

const MORNING_SLOTS: Slot[] = [
  { id: '06:00', label: '06:00 AM' },
  { id: '07:00', label: '07:00 AM' },
  { id: '08:00', label: '08:00 AM' },
  { id: '09:00', label: '09:00 AM' },
];

const EVENING_SLOTS: Slot[] = [
  { id: '18:30', label: '06:30 PM' },
  { id: '19:00', label: '07:00 PM' },
  { id: '19:30', label: '07:30 PM' },
];

export default function ArjitaSevasPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [session, setSession] = useState<'morning' | 'evening' | ''>('');
  const [slot, setSlot] = useState<Slot | null>(null);
  const [tickets, setTickets] = useState(1);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const availableSlots = useMemo(() => {
    if (session === 'morning') return MORNING_SLOTS;
    if (session === 'evening') return EVENING_SLOTS;
    return [];
  }, [session]);

  const canSubmit = useMemo(() => {
    return (
      name.trim().length > 0 &&
      phone.trim().length > 0 &&
      date.trim().length > 0 &&
      session !== '' &&
      slot !== null &&
      tickets > 0
    );
  }, [name, phone, date, session, slot, tickets]);

  const handleSubmit = () => {
    if (!canSubmit) return;
    const payload = {
      type: 'Arjita Seva',
      name,
      phone,
      email,
      date,
      session,
      slot: slot?.id,
      tickets,
      notes,
      time: new Date().toISOString(),
    };
    try {
      const key = 'bp_seva_bookings';
      const logs = JSON.parse(localStorage.getItem(key) || '[]');
      logs.push(payload);
      localStorage.setItem(key, JSON.stringify(logs));
    } catch {}
    setSubmitted(true);
  };

  return (
    <main className="bg-gradient-to-br from-brand-cream via-white to-brand-gold/10 min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <BackNav />

        {!submitted && (
          <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-brand-gold/20">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-brand-maroon mb-2">Arjita Sevas / Pooja Booking</h1>
              <p className="text-sm text-black/70 mb-6">Select date, time slot, and number of tickets</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-brand-maroon">Select Date</label>
                  <input
                    type="date"
                    className="border rounded-lg px-4 py-3"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-brand-maroon">Session</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSession('morning');
                        setSlot(null);
                      }}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                        session === 'morning'
                          ? 'bg-brand-maroon text-brand-gold border-brand-maroon'
                          : 'bg-brand-cream text-brand-maroon border-brand-gold/30 hover:bg-brand-gold/10'
                      }`}
                    >
                      Morning
                    </button>
                    <button
                      onClick={() => {
                        setSession('evening');
                        setSlot(null);
                      }}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                        session === 'evening'
                          ? 'bg-brand-maroon text-brand-gold border-brand-maroon'
                          : 'bg-brand-cream text-brand-maroon border-brand-gold/30 hover:bg-brand-gold/10'
                      }`}
                    >
                      Evening
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-semibold text-brand-maroon">Time Slot</label>
                  <div className="flex flex-wrap gap-3">
                    {availableSlots.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSlot(s)}
                        className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                          slot?.id === s.id
                            ? 'bg-brand-maroon text-brand-gold border-brand-maroon'
                            : 'bg-brand-cream text-brand-maroon border-brand-gold/30 hover:bg-brand-gold/10'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <label className="text-sm font-semibold text-brand-maroon">Tickets</label>
                  <input
                    type="number"
                    min={1}
                    className="border rounded-lg px-4 py-3 w-32"
                    value={tickets}
                    onChange={(e) => setTickets(Math.max(1, parseInt(e.target.value || '1', 10)))}
                  />
                </div>

                <textarea
                  className="border rounded-lg px-4 py-3 md:col-span-2"
                  placeholder="Notes (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    canSubmit
                      ? 'bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Book Seva
                </button>
                <a
                  href="/donate"
                  className="px-6 py-3 rounded-lg font-semibold border bg-white text-brand-maroon border-brand-gold/40 hover:bg-brand-gold/10"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        )}

        {submitted && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-brand-gold/20 text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-3xl font-bold text-brand-maroon mb-4">Booking Confirmed</h2>
            <p className="text-lg text-black mb-6">Your Arjita Seva booking is recorded.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Name</p>
                <p className="text-black">{name}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Date</p>
                <p className="text-black">{date}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Session</p>
                <p className="text-black">{session}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Time Slot</p>
                <p className="text-black">{slot?.label}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                <p className="font-semibold text-brand-maroon">Tickets</p>
                <p className="text-black">{tickets}</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20 md:col-span-2">
                <p className="font-semibold text-brand-maroon">Contact</p>
                <p className="text-black">{phone} {email ? `• ${email}` : ''}</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Seva Booking\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nSession: ${session}\nSlot: ${slot?.label}\nTickets: ${tickets}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700"
              >
                Share on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}