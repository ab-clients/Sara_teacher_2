"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-6 relative">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xl font-semibold flex items-center gap-2"
          >
            <FaGraduationCap
              className="text-2xl"
              style={{ color: "var(--primary)" }}
              aria-hidden
            />
            <span>Sara Abdelmeguid</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm text-(--muted)">
          <Link href="/">Home</Link>
          <Link href="/cv">CV</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
          <ThemeToggle />
        </nav>

        {/* Mobile: Theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md"
          >
            {open ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="absolute inset-x-4 top-full mt-3 rounded-lg shadow-lg z-50"
          style={{
            backgroundColor: "var(--bg)",
            border: "1px solid var(--paper-border)",
          }}
        >
          <div className="p-4">
            <nav className="flex flex-col gap-3">
              <Link href="/" onClick={() => setOpen(false)} className="py-2">
                Home
              </Link>
              <Link href="/cv" onClick={() => setOpen(false)} className="py-2">
                CV
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setOpen(false)}
                className="py-2"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="py-2"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
