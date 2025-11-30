"use client";
import { FaClock, FaAward, FaBook } from "react-icons/fa";

export default function CvQualifications() {
  return (
    <section className="section-alt py-8" id="qualifications">
      <div className="container">
        <h3 className="text-xl font-semibold mb-4">
          Qualifications & Experience
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="paper flex flex-col items-center text-center gap-3">
            <FaClock
              className="text-3xl"
              style={{ color: "var(--primary)" }}
              aria-hidden
            />
            <div>
              <strong>Years Teaching</strong>
              <div className="text-(--muted)">
                15+ years across Egypt, UAE, Australia
              </div>
            </div>
          </div>

          <div className="paper flex flex-col items-center text-center gap-3">
            <FaAward
              className="text-3xl"
              style={{ color: "var(--primary)" }}
              aria-hidden
            />
            <div>
              <strong>Certifications</strong>
              <div className="text-(--muted)">CELTA, TEFL</div>
            </div>
          </div>

          <div className="paper flex flex-col items-center text-center gap-3">
            <FaBook
              className="text-3xl"
              style={{ color: "var(--primary)" }}
              aria-hidden
            />
            <div>
              <strong>Curricula</strong>
              <div className="text-(--muted)">
                IGCSE, American, Canadian, Australian
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
