import { NextRequest, NextResponse } from 'next/server';

// This endpoint forwards notification requests to an external service.
// Configure env GOOGLE_APPS_SCRIPT_NOTIFY_URL to enable email/SMS delivery.
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const url = process.env.GOOGLE_APPS_SCRIPT_NOTIFY_URL;
    if (!url) {
      // No notifier configured, but return ok so UI proceeds.
      return NextResponse.json({ ok: true, forwarded: false });
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const ok = res.ok;
    return NextResponse.json({ ok, forwarded: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}