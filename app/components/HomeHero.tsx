import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <header style={{ paddingTop: "clamp(46px, 7vw, 96px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
      <div className="wrap hero-grid" style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: "clamp(34px, 5vw, 80px)",
        alignItems: "start",
      }}>
        <div>
          <span className="kicker" data-reveal>
            English Tutor · IGCSE Specialist · CELTA · TEFL
          </span>
          <h1 className="display" data-reveal data-delay="1" style={{ marginTop: "22px" }}>
            English, taught with <em className="accent-ink">clarity</em>,<br />
            confidence &amp; <em>craft</em>.
          </h1>
          <p className="lede" data-reveal data-delay="2" style={{ marginTop: "30px" }}>
            I&rsquo;m Sara — an English tutor with 15+ years of international experience, designing student-centred lessons that build real-world fluency and genuine exam readiness.
          </p>
          <div data-reveal data-delay="3" style={{ marginTop: "30px", display: "flex", gap: "18px", flexWrap: "wrap", alignItems: "center", fontSize: "13px", letterSpacing: "0.04em", color: "var(--fg-faint)" }}>
            <span>Based in Australia</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--fg-faint)", display: "inline-block" }} />
            <span>Open to global roles</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--fg-faint)", display: "inline-block" }} />
            <span>Remote worldwide</span>
          </div>
          <div data-reveal data-delay="3" style={{ marginTop: "38px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn--solid">Work with me <span className="arr">→</span></Link>
            <Link href="/cv" className="btn">View CV <span className="arr">→</span></Link>
          </div>
        </div>

        <div className="hero-portrait-wrap" style={{ paddingTop: "100px" }}>
          <div className="hero-portrait" data-reveal data-delay="2" style={{
            position: "relative",
            aspectRatio: "982 / 792",
            width: "100%",
            marginLeft: "auto",
          }}>
            <div className="ph" style={{ width: "100%", height: "100%", borderRadius: "2px" }}>
              {/* Large screen portrait */}
              <Image
                className="hero-img-lg"
                src="/images/hero-sara-lg.png"
                alt="Sara Abdelmeguid"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
              {/* Small screen landscape */}
              <Image
                className="hero-img-sm"
                src="/images/hero-sara-sm.png"
                alt="Sara Abdelmeguid"
                fill
                style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                priority
              />
            </div>
            <div style={{
              position: "absolute",
              left: "-14px",
              top: "-20px",
              background: "var(--bg-3)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
              border: "1px solid var(--line)",
              padding: "11px 16px",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--fg-soft)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <b style={{ color: "var(--accent)" }}>15+</b> Years Teaching
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-img-sm { display: none; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-portrait-wrap { order: -1; padding-top: 0 !important; }
          .hero-portrait { aspect-ratio: 16 / 7 !important; height: auto !important; margin-bottom: 8px; }
          .hero-img-lg { display: none; }
          .hero-img-sm { display: block; }
        }
      `}</style>
    </header>
  );
}
