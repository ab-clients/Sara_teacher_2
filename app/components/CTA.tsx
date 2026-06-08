import Link from "next/link";

export default function CTA() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="wrap">
        <span className="kicker" data-reveal style={{ justifyContent: "center" }}>Ready to get started?</span>
        <h2 className="display" data-reveal data-delay="1" style={{ marginTop: "24px", maxWidth: "16ch", marginInline: "auto" }}>
          Let&rsquo;s build <em className="accent-ink">confidence</em> — one lesson at a time.
        </h2>
        <p className="lede" data-reveal data-delay="2" style={{ margin: "28px auto 0", textAlign: "center" }}>
          Contact me to schedule a lesson, or view my CV to learn more about my experience, approach and qualifications.
        </p>
        <div data-reveal data-delay="3" style={{ marginTop: "42px", display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn--solid">Contact me <span className="arr">→</span></Link>
          <Link href="/cv" className="btn">View CV <span className="arr">→</span></Link>
        </div>
      </div>
    </section>
  );
}
