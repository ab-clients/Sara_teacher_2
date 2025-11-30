"use client";
import Link from "next/link";
import Button from "./Button";
import { FaEnvelope, FaDownload, FaFileAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

export default function CTA() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="w-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-[var(--primary)]/12 to-[var(--accent)]/8 border border-[var(--paper-border)]">
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center md:justify-between gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-(--fg)">
                Ready to get started?
              </h3>
              <p className="text-(--muted) mt-3 max-w-xl">
                Contact me to schedule a lesson or view my CV to learn more
                about my experience, teaching approach and qualifications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button
                  variant="primary"
                  className="flex items-center gap-2 px-6 py-3 text-lg"
                >
                  <FaHandshake aria-hidden /> Contact Me
                </Button>
              </Link>

              <Link href="/cv">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-6 py-3 text-lg"
                >
                  <FaFileAlt aria-hidden /> View CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
