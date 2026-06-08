import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — Sara Abdelmeguid",
  description: "Get in touch with Sara Abdelmeguid to schedule an English lesson, workshop or curriculum project. Remote worldwide.",
};

const nextSteps = [
  { n: "01", title: "We talk",  body: "A short conversation about the learner's goals, level and timeline." },
  { n: "02", title: "A plan",   body: "I propose a tailored approach — lessons, materials and milestones." },
  { n: "03", title: "We begin", body: "Lessons start, progress is tracked, and the plan adapts as you grow." },
];

export default function ContactPage() {
  return (
    <>
      <style>{`
        .ct__grid { display: grid; grid-template-columns: 5fr 3fr; gap: clamp(36px, 5vw, 80px); align-items: start; }
        .ct-methods a, .ct-methods .ct-row {
          display: flex; align-items: baseline; justify-content: space-between; gap: 16px;
          padding: 18px 0; border-bottom: 1px solid var(--line); transition: color 0.3s var(--ease);
        }
        .ct-methods a:hover { color: var(--accent); }
        .form-card { background: var(--bg-2); border: 1px solid var(--line); border-radius: 3px; padding: clamp(26px, 3vw, 44px); }
        .nextsteps { border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(3, 1fr); }
        .nextsteps .ns { padding: clamp(26px, 3vw, 40px) 24px clamp(26px, 3vw, 40px) 24px; border-right: 1px solid var(--line); }
        .nextsteps .ns:first-child { padding-left: 0; }
        .nextsteps .ns:last-child { border-right: 0; }
        @media (max-width: 900px) {
          .ct__grid { grid-template-columns: 1fr !important; }
          .nextsteps { grid-template-columns: 1fr !important; }
          .nextsteps .ns { border-right: 0 !important; }
        }
      `}</style>

      <header style={{ paddingTop: "clamp(40px, 6vw, 84px)" }}>
        <div className="wrap ct__grid">
          <div>
            <span className="kicker" data-reveal>Contact</span>
            <h1 className="display" data-reveal data-delay="1" style={{ marginTop: "20px" }}>
              Let&rsquo;s start a <em className="accent-ink">conversation</em>.
            </h1>
            <p className="lede" data-reveal data-delay="2" style={{ marginTop: "26px" }}>
              Tell me about the learner, the goal and the curriculum — I&rsquo;ll come back with a clear next step. New students welcome, remote worldwide.
            </p>

            <div className="ct-methods" style={{ marginTop: "40px", borderTop: "1px solid var(--line)" }} data-reveal data-delay="2">
              <a href="mailto:hello@saraabdelmeguid.com">
                <span>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-faint)", display: "block" }}>Email</span>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 500 }}>hello@saraabdelmeguid.com</span>
                </span>
              </a>
              <div className="ct-row">
                <span>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-faint)", display: "block" }}>Based in</span>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 500 }}>Australia</span>
                </span>
                <span style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-faint)", display: "block" }}>Mode</span>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 500 }}>Remote · Worldwide</span>
                </span>
              </div>
              <div className="ct-row">
                <span>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-faint)", display: "block" }}>Availability</span>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 500 }}>Accepting new students</span>
                </span>
              </div>
            </div>
          </div>

          <div className="form-card" data-reveal data-delay="1">
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 500, margin: "0 0 6px" }}>Book a lesson</h2>
            <p style={{ color: "var(--fg-soft)", fontSize: "15px", margin: "0 0 28px" }}>Usually a reply within a day or two.</p>
            <ContactForm />
          </div>
        </div>
      </header>

      {/* What happens next */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="idx" data-reveal>What happens next</span>
          </div>
          <div className="nextsteps" data-reveal>
            {nextSteps.map(({ n, title, body }) => (
              <div key={n} className="ns">
                <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--accent)" }}>{n}</span>
                <h4 style={{ fontFamily: "var(--serif)", fontSize: "23px", fontWeight: 500, margin: "14px 0 9px" }}>{title}</h4>
                <p style={{ fontSize: "14.5px", color: "var(--fg-soft)", margin: 0, lineHeight: 1.55 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
