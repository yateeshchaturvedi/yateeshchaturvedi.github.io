"use client";

import { useState } from "react";

export default function ContactForm({ endpoint }) {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("Message sent successfully.");
        event.currentTarget.reset();
      } else {
        setStatus("Unable to send right now. Please email directly.");
      }
    } catch {
      setStatus("Unable to send right now. Please email directly.");
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
      <button className="btn btn-primary" type="submit">Submit</button>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}