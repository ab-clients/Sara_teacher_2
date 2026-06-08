const principles = [
  { n: "i",   title: "Balanced Learning",       body: "Education should nurture both academic mastery and emotional well-being — growing learners intellectually while building empathy, resilience and self-confidence." },
  { n: "ii",  title: "Inclusive Classrooms",     body: "Every learner deserves to feel seen and capable. Lessons adapt to different styles, backgrounds and abilities so diversity strengthens understanding." },
  { n: "iii", title: "Inquiry-Driven Thinking",  body: "Curiosity is the foundation of meaningful learning. Students ask questions, explore possibilities and reflect — discovery over passive instruction." },
  { n: "iv",  title: "Holistic Development",     body: "True education extends beyond grades. A holistic model connects academic skill with character, creativity and critical thinking — for life, not just exams." },
  { n: "v",   title: "Continuous Growth",        body: "Learning is a lifelong journey. Continuous assessment and reflection help students and teachers grow together, building confidence through visible progress." },
  { n: "vi",  title: "Real-World Connection",    body: "Knowledge gains meaning when applied. Linking concepts to authentic experience builds practical understanding, problem-solving and a sense of purpose." },
];

const tools = ["Google Classroom", "Zoom", "Canvas LMS", "Google Docs", "Kahoot"];

export default function HomeTeaching() {
  return (
    <>
      <style>{`
        .grid-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--line);
          border-radius: 2px;
          overflow: hidden;
        }
        .pcard {
          padding: clamp(28px, 3vw, 44px) clamp(24px, 2.6vw, 38px);
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          position: relative;
          transition: background 0.5s var(--ease);
          min-height: 240px;
          display: flex;
          flex-direction: column;
        }
        .pcard:hover { background: var(--bg-2); }
        .pcard__n { font-size: 12px; font-weight: 600; letter-spacing: 0.2em; color: var(--fg-faint); }
        .pcard:hover .pcard__n { color: var(--accent); }
        .pcard h3 { font-family: var(--serif); font-size: 27px; font-weight: 500; line-height: 1.06; margin: 18px 0 14px; }
        .pcard p { font-size: 15px; color: var(--fg-soft); line-height: 1.62; margin: 0; }
        .grid-cards .pcard:nth-child(3n) { border-right: 0; }
        .grid-cards .pcard:nth-last-child(-n+3) { border-bottom: 0; }
        .tool-pill {
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 13.5px;
          letter-spacing: 0.04em;
          color: var(--fg-soft);
          transition: all 0.4s var(--ease);
        }
        .tool-pill:hover { border-color: var(--accent); color: var(--accent); }
        @media (max-width: 900px) {
          .grid-cards { grid-template-columns: 1fr; }
          .grid-cards .pcard { border-right: 0; }
          .grid-cards .pcard:nth-last-child(-n+3):not(:last-child) { border-bottom: 1px solid var(--line); }
        }
      `}</style>

      {/* Principles grid */}
      <section className="section section--tight" id="methodology">
        <div className="wrap">
          <div className="eyebrow-row">
            <span className="idx" data-reveal>02 — Teaching &amp; Methodology</span>
            <span className="kicker kicker--plain" data-reveal>Six guiding principles</span>
          </div>
          <div className="grid-cards" data-reveal>
            {principles.map(({ n, title, body }) => (
              <div key={n} className="pcard">
                <span className="pcard__n">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy quote band */}
      <section style={{ borderBlock: "1px solid var(--line)", paddingBlock: "clamp(48px, 7vw, 96px)" }}>
        <div className="wrap">
          <div className="cols-2" style={{ alignItems: "center" }}>
            <blockquote data-reveal style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 500, fontSize: "clamp(30px, 4.4vw, 60px)", lineHeight: 1.1, letterSpacing: "-0.01em", maxWidth: "18ch" }}>
              I create inclusive, student-centred spaces where learners feel confident to take risks and make mistakes.
            </blockquote>
            <div data-reveal data-delay="1">
              <p className="body-text" style={{ maxWidth: "48ch" }}>
                My teaching philosophy connects language learning to real-world contexts and personal goals — practical, communicative and built around each learner. Clear objectives, targeted feedback and regular progress checks keep every lesson relevant and engaging.
              </p>
              <span className="kicker kicker--plain" style={{ marginTop: "34px", display: "inline-flex" }}>Tools I use</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "18px" }}>
                {tools.map((t) => (
                  <span key={t} className="tool-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
