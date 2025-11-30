"use client";

import { useState } from "react";
import Button from "../components/Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

export default function ContactForm() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    reason: "General Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function update(field: keyof FormState, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // basic client validation
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please fill name, email and message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Failed to send message.");
      } else {
        setSuccess("Message sent — I will get back to you soon.");
        setValues({
          name: "",
          email: "",
          phone: "",
          reason: "General Inquiry",
          message: "",
        });
      }
    } catch (err) {
      // network
      setError("Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      {error && <div className="text-sm text-red-500">{error}</div>}
      {success && <div className="text-sm text-green-600">{success}</div>}

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Name</span>
          <input
            className="mt-1 p-2 border border-(--paper-border) rounded bg-transparent"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            required
            name="name"
            aria-label="Name"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Email</span>
          <input
            className="mt-1 p-2 border border-(--paper-border) rounded bg-transparent"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            required
            type="email"
            name="email"
            aria-label="Email"
          />
        </label>
      </div>

      <div>
        <label className="flex flex-col">
          <span className="text-sm font-medium">Phone (optional)</span>
          <input
            className="mt-1 p-2 border border-(--paper-border) rounded bg-transparent"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            name="phone"
            aria-label="Phone"
          />
        </label>
      </div>

      <div>
        <label className="flex flex-col">
          <span className="text-sm font-medium">Reason</span>
          <select
            className="mt-1 p-2 border border-(--paper-border) rounded bg-transparent"
            value={values.reason}
            onChange={(e) => update("reason", e.target.value)}
            name="reason"
            aria-label="Reason"
          >
            <option>General Inquiry</option>
            <option>Book a Lesson</option>
            <option>Curriculum / Resources</option>
            <option>Partnership</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <div>
        <label className="flex flex-col">
          <span className="text-sm font-medium">Message</span>
          <textarea
            className="mt-1 p-2 border border-(--paper-border) rounded bg-transparent min-h-[120px]"
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            required
            name="message"
            aria-label="Message"
          />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" variant="primary">
          {loading ? "Sending…" : "Send Message"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() =>
            setValues({
              name: "",
              email: "",
              phone: "",
              reason: "General Inquiry",
              message: "",
            })
          }
        >
          Clear
        </Button>
      </div>
    </form>
  );
}
