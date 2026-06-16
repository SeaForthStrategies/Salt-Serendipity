import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const name = typeof body?.name === "string" ? body.name.trim() : "";

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const webhookUrl = process.env.EMAIL_LIST_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "The email list is not connected yet." },
      { status: 503 },
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.EMAIL_LIST_WEBHOOK_TOKEN
        ? { Authorization: `Bearer ${process.env.EMAIL_LIST_WEBHOOK_TOKEN}` }
        : {}),
    },
    body: JSON.stringify({
      email,
      name,
      source: "salt-and-serendipity-website",
      subscribedAt: new Date().toISOString(),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "We could not add you right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
