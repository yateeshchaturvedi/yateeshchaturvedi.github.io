"use client";

import { useState } from "react";

export default function ContactForm({ endpoint }) {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!endpoint || !endpoint.startsWith("https://formspree.io/f/")) {
      setStatus("Invalid contact endpoint. Please check data/portfolio.js.");
      return;
    }

    try {
      setIsSending(true);
      setStatus("");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name || "visitor"}`,
        }),
      });

      if (res.ok) {
        setStatus("Message sent successfully.");
        form.reset();
      } else {
        const payload = await res.json().catch(() => ({}));
        const apiError = payload?.errors?.[0]?.message || payload?.error;
        setStatus(apiError ? `Send failed: ${apiError}` : "Unable to send right now. Please email directly.");
      }
    } catch {
      setStatus("Unable to send right now. Please email directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={4} required />
      <button className="btn btn-primary" type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Submit"}
      </button>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}
