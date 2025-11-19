import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const url = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!url) {
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