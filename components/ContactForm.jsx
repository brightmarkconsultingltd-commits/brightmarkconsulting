"use client";
import { useState } from "react";
import { site } from "@/lib/site";

// Set NEXT_PUBLIC_FORM_ENDPOINT in Vercel (for example a Formspree form URL).
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export default function ContactForm() {
  const [state, setState] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!ENDPOINT) {
      // Fallback: open the visitor's email app with the message filled in.
      const body = `Name: ${data.get("name")}\nOrganization: ${data.get("organization") || "-"}\nService interest: ${data.get("service") || "-"}\n\n${data.get("message")}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Enquiry from website")}&body=${encodeURIComponent(body)}`;
      return;
    }
    setState("sending");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) { setState("sent"); form.reset(); } else setState("error");
    } catch { setState("error"); }
  }

  if (state === "sent")
    return <div className="notice ok">Thank you. Your message has been sent and we will be in touch shortly.</div>;

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Start a conversation</h2>
      <label>Name *<input name="name" required /></label>
      <label>Email *<input name="email" type="email" required /></label>
      <label>Organization<input name="organization" /></label>
      <label>Service interest
        <select name="service" defaultValue="">
          <option value="">Select a service (optional)</option>
          {site.services.map(([n]) => <option key={n}>{n}</option>)}
          <option>Something else</option>
        </select>
      </label>
      <label>Message *<textarea name="message" rows="5" required /></label>
      <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
      {state === "error" && <p className="notice err">Something went wrong. Please email us at {site.email} or message us on WhatsApp.</p>}
    </form>
  );
}
