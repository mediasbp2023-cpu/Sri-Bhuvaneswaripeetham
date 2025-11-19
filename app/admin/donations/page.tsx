'use client';

import { Suspense, useMemo, useState } from 'react';
import { HeroBanner } from '@/components';
import { useSearchParams } from 'next/navigation';

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || '';

interface DonationLog {
  time: string;
  category?: string;
  name?: string;
  phone?: string;
  email?: string;
  amount?: number;
  note?: string;
}

function AdminDonationsContent() {
  const searchParams = useSearchParams();
  const [authed, setAuthed] = useState<boolean>(false);
  const [pass, setPass] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [q, setQ] = useState<string>('');

  const autoAuthed = useMemo(() => {
    const key = searchParams.get('key') || '';
    if (ADMIN_KEY) return key === ADMIN_KEY;
    return Boolean(key);
  }, [searchParams]);

  const isAuthed = authed || autoAuthed;

  const logs: DonationLog[] = useMemo(() => {
    if (!isAuthed) return [];
    try {
      const arr = JSON.parse(localStorage.getItem('bp_donations') || '[]');
      return Array.isArray(arr) ? (arr as DonationLog[]).slice().reverse() : [];
    } catch {
      return [];
    }
  }, [isAuthed]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    logs.forEach((l) => l?.category && set.add(l.category));
    return Array.from(set);
  }, [logs]);

  const filtered = useMemo(() => {
    return logs.filter((l) => {
      const catOk = category ? l?.category === category : true;
      const qq = q.trim().toLowerCase();
      const qOk = qq
        ? `${l?.name || ''} ${l?.phone || ''} ${l?.email || ''} ${l?.note || ''}`
            .toLowerCase()
            .includes(qq)
        : true;
      return catOk && qOk;
    });
  }, [logs, category, q]);

  const exportCSV = () => {
    const header = ['time', 'category', 'name', 'phone', 'email', 'amount', 'note'];
    const rows = filtered.map((l) => [l.time, l.category, l.name, l.phone, l.email, l.amount, l.note]);
    const csv = [header.join(','), ...rows.map((r) => r.map((v) => `${String(v || '').replaceAll('"', '""')}`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'donations.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const verify = () => {
    if (ADMIN_KEY) {
      if (pass === ADMIN_KEY) setAuthed(true);
    } else {
      if (pass.trim().length) setAuthed(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner title="Admin" description="Donations" height="medium" />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {!isAuthed && (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
            <h2 className="text-2xl font-bold text-brand-maroon mb-4">Enter Passcode</h2>
            <input
              className="border rounded-lg px-4 py-3 w-full mb-4"
              type="password"
              placeholder="Passcode"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              onClick={verify}
              className="w-full px-6 py-3 rounded-lg font-semibold bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
            >
              Continue
            </button>
          </div>
        )}

        {isAuthed && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3 items-center">
              <select
                className="border rounded-lg px-3 py-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <input
                className="border rounded-lg px-3 py-2 flex-1 min-w-[200px]"
                placeholder="Search name, phone, email, note"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button
                onClick={exportCSV}
                className="px-4 py-2 rounded-lg font-semibold bg-brand-maroon text-brand-gold hover:bg-brand-maroon/90"
              >
                Export CSV
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-gold/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((l, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-brand-cream border border-brand-gold/20">
                    <div className="text-sm text-black/60">{new Date(l.time).toLocaleString()}</div>
                    <div className="font-semibold text-brand-maroon">{l.category}</div>
                    <div className="text-black">{l.name}</div>
                    <div className="text-black">{l.phone}</div>
                    <div className="text-black">{l.email}</div>
                    <div className="text-black">₹{l.amount}</div>
                    <div className="text-black/80 break-words">{l.note}</div>
                    <div className="mt-3 flex gap-2">
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          `Donation: ${l.category}\nName: ${l.name}\nPhone: ${l.phone}\nAmount: ₹${l.amount}\nNote: ${l.note}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-md bg-green-600 text-white text-sm"
                      >
                        WhatsApp
                      </a>
                      <button
                        onClick={() => navigator.clipboard.writeText(JSON.stringify(l))}
                        className="px-3 py-1 rounded-md bg-brand-maroon text-brand-gold text-sm"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminDonationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}> 
      <AdminDonationsContent />
    </Suspense>
  );
}