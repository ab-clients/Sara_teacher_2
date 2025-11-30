export default function Footer() {
  return (
    <footer className="site-footer py-8 text-sm">
      <div className="container flex flex-col md:flex-row items-center md:justify-between gap-3">
        <div
          style={{ color: "var(--muted)" }}
          className="text-center md:text-left"
        >
          © {new Date().getFullYear()} Sara Abdelmeguid
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-right">
          <div className="flex gap-3 items-center">
            <a
              href="#"
              className="hover:underline"
              style={{ color: "var(--muted)" }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:underline"
              style={{ color: "var(--muted)" }}
            >
              Contact
            </a>
          </div>

          <div className="hidden md:block" style={{ color: "var(--muted)" }}>
            •
          </div>

          <div className="flex items-center gap-2">
            <span style={{ color: "var(--muted)" }}>Developed by</span>
            <a
              href="https://alybadawy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--muted)" }}
            >
              Aly Badawy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
