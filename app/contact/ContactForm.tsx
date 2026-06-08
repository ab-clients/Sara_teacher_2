"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>({ name: "", email: "", interest: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  function update(field: keyof FormState, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!validEmail(values.email.trim())) e.email = "Please enter a valid email.";
    if (!values.interest) e.interest = "Please choose an option.";
    if (values.message.trim().length < 4) e.message = "Please add a short message.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    setApiError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, reason: values.interest }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setApiError(data?.error || "Failed to send message.");
      } else {
        setSuccess(true);
      }
    } catch {
      setApiError("Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div style={{ textAlign: "center", padding: "30px 10px" }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid var(--accent)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", margin: "0 auto 22px" }}>✓</div>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: "30px", fontWeight: 500, margin: "0 0 10px" }}>Message sent</h3>
        <p style={{ color: "var(--fg-soft)", fontSize: "15.5px", maxWidth: "34ch", margin: "0 auto" }}>
          Thank you — your enquiry is on its way. I&rsquo;ll be in touch shortly to find a time that works.
        </p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .cf-field { margin-bottom: 20px; }
        .cf-field label { display: block; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--fg-faint); margin-bottom: 9px; }
        .cf-field input, .cf-field select, .cf-field textarea {
          width: 100%; background: var(--bg); border: 1px solid var(--line); border-radius: 2px; color: var(--fg);
          font-family: var(--sans); font-size: 15.5px; padding: 14px 16px;
          transition: border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }
        .cf-field textarea { resize: vertical; min-height: 120px; line-height: 1.6; }
        .cf-field select { appearance: none; cursor: pointer; }
        .cf-field input:focus, .cf-field select:focus, .cf-field textarea:focus {
          outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow);
        }
        .cf-field input::placeholder, .cf-field textarea::placeholder { color: var(--fg-faint); }
        .cf-field.has-err input, .cf-field.has-err select, .cf-field.has-err textarea { border-color: #e0795f; }
        .cf-err-msg { font-size: 12.5px; color: #e0795f; margin-top: 7px; }
        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 520px) { .cf-row { grid-template-columns: 1fr; } }
      `}</style>

      <form onSubmit={handleSubmit} noValidate>
        {apiError && (
          <div style={{ fontSize: "13px", color: "#e0795f", marginBottom: "16px", padding: "12px 16px", border: "1px solid rgba(224,121,95,0.3)", borderRadius: "2px" }}>
            {apiError}
          </div>
        )}

        <div className="cf-row">
          <div className={`cf-field${errors.name ? " has-err" : ""}`}>
            <label htmlFor="cf-name">Your name</label>
            <input id="cf-name" type="text" placeholder="Jane Doe" autoComplete="name" value={values.name} onChange={(e) => update("name", e.target.value)} />
            {errors.name && <p className="cf-err-msg">{errors.name}</p>}
          </div>
          <div className={`cf-field${errors.email ? " has-err" : ""}`}>
            <label htmlFor="cf-email">Email</label>
            <input id="cf-email" type="email" placeholder="jane@email.com" autoComplete="email" value={values.email} onChange={(e) => update("email", e.target.value)} />
            {errors.email && <p className="cf-err-msg">{errors.email}</p>}
          </div>
        </div>

        <div className={`cf-field${errors.interest ? " has-err" : ""}`}>
          <label htmlFor="cf-interest">I&rsquo;m interested in</label>
          <select id="cf-interest" value={values.interest} onChange={(e) => update("interest", e.target.value)}>
            <option value="">Select a service…</option>
            <option>1:1 Tutoring</option>
            <option>Small Group Classes</option>
            <option>IGCSE Exam Preparation</option>
            <option>Curriculum Design</option>
            <option>Online Workshop</option>
            <option>Something else</option>
          </select>
          {errors.interest && <p className="cf-err-msg">{errors.interest}</p>}
        </div>

        <div className={`cf-field${errors.message ? " has-err" : ""}`}>
          <label htmlFor="cf-message">Message</label>
          <textarea id="cf-message" placeholder="Tell me about the learner, level and goals…" value={values.message} onChange={(e) => update("message", e.target.value)} />
          {errors.message && <p className="cf-err-msg">{errors.message}</p>}
        </div>

        <button type="submit" className="btn btn--solid" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
          {loading ? "Sending…" : <>Send message <span className="arr">→</span></>}
        </button>
        <p style={{ fontSize: "12.5px", color: "var(--fg-faint)", marginTop: "16px", textAlign: "center" }}>
          By sending, you agree to be contacted about your enquiry.
        </p>
      </form>
    </>
  );
}
