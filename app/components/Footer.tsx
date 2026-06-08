import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <p className="footer__big">Sara<br />Abdelmeguid</p>
            <p className="muted" style={{ marginTop: "20px", maxWidth: "34ch", fontSize: "14.5px" }}>
              Freelance English Tutor · IGCSE Specialist · CELTA, TEFL. Based in Australia, open to global roles.
            </p>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <Link href="/">Home</Link>
            <Link href="/cv">CV</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer__col">
            <h4>Get in touch</h4>
            <Link href="/contact">Book a lesson</Link>
            <a href="/sara-abdelmeguid-resume.pdf" target="_blank" rel="noreferrer" download>
              Download CV (PDF)
            </a>
            <p>Remote · Worldwide</p>
          </div>
        </div>

        <div className="footer__base">
          <span>© {new Date().getFullYear()} Sara Abdelmeguid</span>
          <span>
            Developed by{" "}
            <a href="https://alybadawy.com" target="_blank" rel="noopener noreferrer">
              Aly Badawy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
