import Link from "next/link";
import PortfolioGrid from "./PortfolioGrid";

export const metadata = {
  title: "Portfolio — Sara Abdelmeguid",
  description: "Selected teaching work — IGCSE exam-prep frameworks, bespoke curriculum design, lesson resources and workshops by Sara Abdelmeguid.",
};

const process = [
  { n: "i",   title: "Listen", body: "Understand the learner's goals, level and the curriculum they're working toward." },
  { n: "ii",  title: "Design", body: "Build a tailored plan with clear objectives and the right materials for the job." },
  { n: "iii", title: "Teach",  body: "Deliver communicative, practical lessons with targeted, constructive feedback." },
  { n: "iv",  title: "Review", body: "Track progress, adapt the plan and keep momentum toward measurable results." },
];

export default function PortfolioPage() {
  return (
    <>
      <style>{`
        .pf-hero__grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: clamp(30px, 5vw, 70px); align-items: end; }
        .pf-hero__note { font-size: 14px; color: var(--fg-faint); line-height: 1.6; border-left: 1px solid var(--line); padding-left: 20px; max-width: 34ch; }
        .process { border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(4, 1fr); }
        .process .step { padding: clamp(26px, 3vw, 40px) 24px clamp(26px, 3vw, 40px) 24px; border-right: 1px solid var(--line); }
        .process .step:first-child { padding-left: 0; }
        .process .step:last-child { border-right: 0; }
        @media (max-width: 900px) {
          .pf-hero__grid { grid-template-columns: 1fr !important; }
          .process { grid-template-columns: 1fr 1fr !important; }
          .process .step:nth-child(2n) { border-right: 0 !important; }
        }
        @media (max-width: 560px) {
          .process { grid-template-columns: 1fr !important; }
          .process .step { border-right: 0 !important; }
        }
      `}</style>

      {/* Hero */}
      <header style={{ paddingTop: "clamp(40px, 6vw, 84px)" }}>
        <div className="wrap pf-hero__grid">
          <div>
            <span className="kicker" data-reveal>Portfolio</span>
            <h1 className="display" data-reveal data-delay="1" style={{ marginTop: "20px" }}>
              Materials made to <em className="accent-ink">teach</em>.
            </h1>
            <p className="lede" data-reveal data-delay="2" style={{ marginTop: "26px" }}>
              A selection of teaching work — exam-prep frameworks, bespoke curricula, lesson resources and workshops, all designed around measurable learner progress.
            </p>
          </div>
          <p className="pf-hero__note" data-reveal data-delay="2">
            Each project here is a placeholder ready for a real screenshot or sample. Drop in lesson plans, worksheets, slide decks or student outcomes to bring it to life.
          </p>
        </div>
      </header>

      {/* Filter + Grid */}
      <section className="section section--tight">
        <div className="wrap">
          <PortfolioGrid />
        </div>
      </section>

      {/* Process strip */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="idx" data-reveal>How the work gets made</span>
          </div>
          <div className="process" data-reveal>
            {process.map(({ n, title, body }) => (
              <div key={n} className="step">
                <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--accent)" }}>{n}</span>
                <h4 style={{ fontFamily: "var(--serif)", fontSize: "24px", fontWeight: 500, margin: "14px 0 10px" }}>{title}</h4>
                <p style={{ fontSize: "14.5px", color: "var(--fg-soft)", margin: 0, lineHeight: 1.55 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--tight">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="kicker" data-reveal style={{ justifyContent: "center" }}>Have a project in mind?</span>
          <h2 className="display" data-reveal data-delay="1" style={{ marginTop: "22px", maxWidth: "18ch", marginInline: "auto" }}>
            Let&rsquo;s design something that <em className="accent-ink">works</em>.
          </h2>
          <div data-reveal data-delay="2" style={{ marginTop: "36px", display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn--solid">Start a conversation <span className="arr">→</span></Link>
            <Link href="/cv" className="btn">View CV <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
