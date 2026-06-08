"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="nav">
      <div className="wrap nav__in">
        <Link href="/" className="brand">
          <span className="dot" />
          <b>Sara Abdelmeguid</b>
        </Link>

        <div className="nav__links">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={isActive(href) ? "is-active" : ""}>
              {label}
            </Link>
          ))}
        </div>

        <div className="nav__right">
          <Link href="/contact" className="btn btn--sm">
            Work with me
          </Link>
          <button
            className="nav-hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile" role="dialog" aria-modal="true">
          <nav className="nav-mobile__inner">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={isActive(href) ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
