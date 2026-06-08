export function HomeAbout() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="eyebrow-row">
          <span className="idx" data-reveal>01 — About</span>
          <span className="kicker kicker--plain" data-reveal>A friendly, modern approach</span>
        </div>

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "clamp(34px, 5vw, 80px)", alignItems: "start" }}>
          <div data-reveal>
            <h2 className="display">Fifteen years, four continents, one belief.</h2>
          </div>

          <div data-reveal data-delay="1">
            <p className="lede">
              I specialise in IGCSE and exam preparation, plus tailored lessons for learners of all ages — across British, American, Canadian and Australian curricula.
            </p>
            <p className="body-text" style={{ marginTop: "22px", maxWidth: "54ch" }}>
              Lessons are student-centred, practical and focused on measurable progress. I combine communicative tasks with targeted feedback to build confidence and skills that last well beyond the exam hall.
            </p>

            <div style={{ marginTop: "46px", borderTop: "1px solid var(--line)" }}>
              {[
                { k: "IGCSE", b: "IGCSE Specialist", s: "Exam technique & coursework" },
                { k: "15+", b: "Years Teaching", s: "Classroom & online, three countries" },
                { k: "1:1", b: "Tailored Lessons", s: "Personalised plans & feedback" },
              ].map(({ k, b, s }) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "clamp(20px, 4vw, 54px)", alignItems: "baseline", padding: "26px 0", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 500, lineHeight: 1, color: "var(--fg)" }}>{k}</span>
                  <div>
                    <p style={{ fontSize: "17px", color: "var(--fg)", fontWeight: 500, margin: 0 }}>{b}</p>
                    <p style={{ fontSize: "14.5px", color: "var(--fg-faint)", margin: "4px 0 0" }}>{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 26px !important; }
        }
      `}</style>
    </section>
  );
}
