import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sara Abdelmeguid — CV",
  description: "Curriculum Vitae for Sara Abdelmeguid — English Tutor, IGCSE Specialist, CELTA & TEFL certified.",
};

const qualifications = [
  { k: "Years Teaching", v: "15+",             s: "Across Egypt, the UAE and Australia" },
  { k: "Certifications",  v: "CELTA\nTEFL",    s: "Internationally recognised qualifications" },
  { k: "Curricula",       v: "IGCSE",          s: "British · American · Canadian · Australian" },
];

const services = [
  { n: "01", t: "1:1 Tutoring",         d: "Personalised lessons tailored to learner goals — exam preparation, writing, speaking and comprehension." },
  { n: "02", t: "Small Group Classes",  d: "Interactive group lessons that encourage collaboration, discussion and constructive peer feedback." },
  { n: "03", t: "Curriculum Design",    d: "Custom syllabi, assessments and resources built to fit a school's standards or an individual's needs." },
  { n: "04", t: "Online Workshops",     d: "Focused sessions on exam technique, essay writing and speaking confidence — delivered remotely." },
];

const skills = ["IGCSE Exam Preparation", "Lesson Planning & Assessment", "Curriculum Mapping", "Zoom", "Google Classroom", "Canvas LMS", "Google Docs", "Kahoot"];
const curricula = ["IGCSE", "British", "American", "Canadian", "Australian"];

const testimonials = [
  { q: "Sara's lessons helped me improve my grades and confidence — clear, friendly and effective.", who: "IGCSE Student" },
  { q: "Excellent guidance for IGCSE exams — practical techniques and personalised feedback.", who: "Exam Candidate" },
  { q: "Engaging lessons that made speaking and writing much easier.", who: "Language Learner" },
];

export default function CVPage() {
  return (
    <>
      <style>{`
        .cvhero__grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: clamp(34px, 5vw, 76px); align-items: start; }
        .pcard-profile { position: sticky; top: 100px; }
        .pcard-profile .ph { aspect-ratio: 1 / 1; width: 100%; border-radius: 2px; }
        .quals { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 2px; overflow: hidden; }
        .qual { background: var(--bg); padding: clamp(26px, 3vw, 40px); }
        .svc { border-top: 1px solid var(--line); }
        .svc__row { display: grid; grid-template-columns: 60px 1fr 1.3fr; gap: clamp(18px, 3vw, 44px); align-items: baseline; padding: clamp(24px, 3vw, 38px) 0; border-bottom: 1px solid var(--line); transition: background 0.5s var(--ease); }
        .svc__row:hover { background: var(--bg-2); }
        .quotes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 2px; overflow: hidden; }
        .qcard { background: var(--bg); padding: clamp(28px, 3vw, 44px); display: flex; flex-direction: column; gap: 24px; min-height: 280px; }
        .chip { border: 1px solid var(--line); border-radius: 999px; padding: 9px 18px; font-size: 14px; color: var(--fg-soft); transition: all 0.4s var(--ease); }
        .chip:hover { border-color: var(--accent); color: var(--accent); }
        .availbox { margin-top: 30px; border: 1px solid var(--line); border-radius: 2px; padding: 26px; display: flex; gap: 16px; align-items: flex-start; }
        .availbox .pulse { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 12px var(--accent); margin-top: 7px; flex: none; animation: pulse 2.4s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{ opacity:1; } 50%{ opacity:0.35; } }
        @media (prefers-reduced-motion: reduce){ .availbox .pulse{ animation:none; } }
        @media (max-width: 900px) {
          .cvhero__grid { grid-template-columns: 1fr !important; }
          .pcard-profile { position: static; max-width: 320px; }
          .quals, .quotes { grid-template-columns: 1fr !important; }
          .svc__row { grid-template-columns: 40px 1fr !important; }
          .svc__row .svc__d { grid-column: 1 / -1; }
          .approach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* CV Hero */}
      <header style={{ paddingTop: "clamp(40px, 6vw, 84px)" }}>
        <div className="wrap cvhero__grid">
          <div>
            <span className="kicker" data-reveal>Curriculum Vitae</span>
            <h1 className="display" data-reveal data-delay="1" style={{ marginTop: "20px" }}>
              Sara<br /><em>Abdelmeguid</em>
            </h1>
            <p data-reveal data-delay="2" style={{ marginTop: "22px", fontSize: "13px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>
              English Tutor · IGCSE Specialist · CELTA · TEFL
            </p>
            <p className="lede" data-reveal data-delay="2" style={{ marginTop: "24px", maxWidth: "50ch" }}>
              English tutor with 15+ years of international experience across Egypt, the UAE and Australia. I design student-centred lessons focused on confidence, real-world communication and exam readiness — adapting to British, American, Canadian and Australian curricula for learners of all ages.
            </p>
            <div data-reveal data-delay="3" style={{ marginTop: "34px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn--solid">Contact <span className="arr">→</span></Link>
              <a href="/sara-abdelmeguid-resume.pdf" target="_blank" rel="noreferrer" download className="btn">
                Download PDF <span className="arr">↓</span>
              </a>
            </div>
          </div>

          <aside className="pcard-profile" data-reveal data-delay="2">
            <div className="ph" style={{ position: "relative" }}>
              <Image
                src="/images/sara-profile.jpg"
                alt="Sara Abdelmeguid"
                width={400}
                height={400}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div style={{ marginTop: "22px", borderTop: "1px solid var(--line)" }}>
              {[
                ["Based in", "Australia"],
                ["Availability", "Open to global roles"],
                ["Mode", "Remote · Worldwide"],
                ["Certified", "CELTA · TEFL"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "14px 0", borderBottom: "1px solid var(--line)", fontSize: "14px" }}>
                  <span style={{ color: "var(--fg-faint)", letterSpacing: "0.04em" }}>{label}</span>
                  <span style={{ color: "var(--fg)", textAlign: "right" }}>{value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </header>

      {/* Qualifications */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="idx" data-reveal>01 — Qualifications &amp; Experience</span>
          </div>
          <div className="quals" data-reveal>
            {qualifications.map(({ k, v, s }) => (
              <div key={k} className="qual">
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-faint)", margin: 0 }}>{k}</p>
                <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 500, lineHeight: 1.05, margin: "16px 0 0", whiteSpace: "pre-line" }}>{v}</p>
                <p style={{ fontSize: "14px", color: "var(--fg-soft)", margin: "10px 0 0" }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="idx" data-reveal>02 — Teaching Services</span>
            <span className="kicker kicker--plain" data-reveal>Tailored to every learner</span>
          </div>
          <div className="svc" data-reveal>
            {services.map(({ n, t, d }) => (
              <div key={n} className="svc__row">
                <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.16em", color: "var(--accent)" }}>{n}</span>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 500, lineHeight: 1.05, margin: 0 }}>{t}</h3>
                <p className="svc__d" style={{ fontSize: "15.5px", color: "var(--fg-soft)", lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach, Skills & Availability */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="idx" data-reveal>03 — Approach, Skills &amp; Availability</span>
          </div>
          <div className="approach-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(34px, 5vw, 72px)" }}>
            <div data-reveal>
              <h3 className="display">Communicative, student-centred, measurable.</h3>
              <p className="body-text" style={{ marginTop: "22px", maxWidth: "50ch" }}>
                I use clear objectives and measurable outcomes, combining practical tasks, targeted feedback and regular progress checks. Materials adapt to each learner to keep every lesson engaging, relevant and built around real goals.
              </p>
              <div className="availbox">
                <span className="pulse" />
                <div>
                  <h4 style={{ margin: "0 0 6px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg)" }}>Availability</h4>
                  <p style={{ margin: 0, color: "var(--fg-soft)", fontSize: "15px" }}>Accepting new students — remote worldwide, with flexible hours.</p>
                </div>
              </div>
            </div>
            <div data-reveal data-delay="1">
              <span className="kicker kicker--plain">Skills &amp; Tools</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "22px" }}>
                {skills.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
              <span className="kicker kicker--plain" style={{ marginTop: "34px", display: "inline-flex" }}>Curricula</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "12px" }}>
                {curricula.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="idx" data-reveal>04 — What students say</span>
          </div>
          <div className="quotes" data-reveal>
            {testimonials.map(({ q, who }) => (
              <div key={who} className="qcard">
                <span style={{ fontFamily: "var(--serif)", fontSize: "64px", lineHeight: 0.6, color: "var(--accent)" }}>&ldquo;</span>
                <blockquote style={{ margin: 0, fontFamily: "var(--serif2)", fontStyle: "italic", fontSize: "clamp(19px, 2vw, 23px)", lineHeight: 1.45, color: "var(--fg)", flex: 1 }}>{q}</blockquote>
                <span style={{ fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fg-faint)" }}>{who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section--tight">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="kicker" data-reveal style={{ justifyContent: "center" }}>Let&rsquo;s work together</span>
          <h2 className="display" data-reveal data-delay="1" style={{ marginTop: "22px", maxWidth: "18ch", marginInline: "auto" }}>
            Bring your goals — I&rsquo;ll bring the <em className="accent-ink">plan</em>.
          </h2>
          <div data-reveal data-delay="2" style={{ marginTop: "36px", display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn--solid">Book a lesson <span className="arr">→</span></Link>
            <Link href="/portfolio" className="btn">See portfolio <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
