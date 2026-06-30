import { NextResponse } from "next/server";

const required = ["fullName", "companyName", "email", "service", "budget", "message"];

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, string> | null;
  if (!body) return NextResponse.json({ error: "Invalid request body." }, { status: 400 });

  if (body.website) {
    return NextResponse.json({ message: "Request received." });
  }

  for (const key of required) {
    if (!body[key] || String(body[key]).trim().length < 2) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }
  }

  if (String(body.message).trim().length < 20) {
    return NextResponse.json({ error: "Please include a little more detail in your message." }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(body.email)) {
    return NextResponse.json({ error: "Please enter a valid business email." }, { status: 400 });
  }

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "asman.usa88@gmail.com";

  if (formspreeEndpoint) {
    const result = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    if (!result.ok) return NextResponse.json({ error: "Form delivery failed. Please email asman.usa88@gmail.com." }, { status: 502 });
    return NextResponse.json({ message: "Request received. Our team will review your request and respond with the next steps." });
  }

  if (resendKey) {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Asman AI <onboarding@resend.dev>",
        to: [toEmail],
        subject: `New Asman AI request from ${body.companyName}`,
        text: Object.entries(body).map(([key, value]) => `${key}: ${value}`).join("\n"),
      }),
    });
    if (!result.ok) return NextResponse.json({ error: "Email delivery failed. Please email asman.usa88@gmail.com." }, { status: 502 });
    return NextResponse.json({ message: "Request received. Our team will review your request and respond with the next steps." });
  }

  return NextResponse.json({ error: "We could not submit the request right now. Please email asman.usa88@gmail.com and our team will respond with the next steps." }, { status: 503 });
}
