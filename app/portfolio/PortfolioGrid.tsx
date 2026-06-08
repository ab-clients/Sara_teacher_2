"use client";
import { useState } from "react";

const projects = [
  {
    cat: "exam",
    featured: true,
    no: "Featured",
    catLabel: "Exam Preparation",
    title: "IGCSE English — Exam Technique Framework",
    desc: "A complete preparation system: past-paper drills, mark-scheme breakdowns, model answers and timed-writing practice that turns exam pressure into a method.",
    tags: ["Past papers", "Mark schemes", "Model answers", "Timing"],
  },
  {
    cat: "curriculum",
    featured: false,
    no: "01",
    catLabel: "Curriculum",
    title: "Bespoke Scheme of Work",
    desc: "Custom syllabi mapped to British, American, Canadian and Australian standards — sequenced units with objectives and assessment points.",
    tags: ["Syllabus", "Curriculum mapping"],
  },
  {
    cat: "workshops",
    featured: false,
    no: "02",
    catLabel: "Workshops",
    title: "Essay Writing Workshop",
    desc: "A structured series on planning, paragraphing and argument — taking students from blank page to a confident, well-evidenced essay.",
    tags: ["Structure", "Argument", "Editing"],
  },
  {
    cat: "resources",
    featured: false,
    no: "03",
    catLabel: "Resources",
    title: "Reading & Comprehension Resources",
    desc: "Levelled worksheets, vocabulary builders and comprehension checks designed to meet learners exactly where they are.",
    tags: ["Worksheets", "Vocabulary"],
  },
  {
    cat: "workshops",
    featured: false,
    no: "04",
    catLabel: "Workshops",
    title: "Speaking Confidence Programme",
    desc: "Communicative tasks, role-play and guided discussion that help reluctant speakers find fluency and self-assurance.",
    tags: ["Communicative", "Role-play"],
  },
  {
    cat: "resources curriculum",
    featured: false,
    no: "05",
    catLabel: "Resources",
    title: "Assessment & Progress Tracking",
    desc: "Clear rubrics, feedback templates and a progress tracker that make growth visible to students and parents alike.",
    tags: ["Rubrics", "Feedback", "Reporting"],
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "curriculum", label: "Curriculum" },
  { key: "exam", label: "Exam Prep" },
  { key: "resources", label: "Resources" },
  { key: "workshops", label: "Workshops" },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState("all");

  const visible = projects.filter((p) =>
    active === "all" || p.cat.split(" ").includes(active)
  );

  return (
    <>
      <style>{`
        .filters { display: flex; flex-wrap: wrap; gap: 8px; }
        .filter-btn {
          font-family: var(--sans); font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--fg-soft); background: transparent; border: 1px solid var(--line); border-radius: 999px;
          padding: 10px 20px; cursor: pointer; transition: all 0.35s var(--ease);
        }
        .filter-btn:hover { border-color: var(--line-strong); color: var(--fg); }
        .filter-btn.is-on { background: var(--accent); border-color: var(--accent); color: #06120c; }
        .pf-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: clamp(20px, 2.6vw, 36px); margin-top: clamp(34px, 5vw, 56px); }
        .pf-item { display: flex; flex-direction: column; }
        .pf-item--wide { grid-column: 1 / -1; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(24px, 3vw, 44px); align-items: center; }
        .pf-ph { background: repeating-linear-gradient(135deg, rgba(255,255,255,0.022) 0 2px, transparent 2px 9px), linear-gradient(160deg, #141816, #0c100e); border: 1px solid var(--line); position: relative; overflow: hidden; }
        .pf-ph--normal { aspect-ratio: 16 / 10; width: 100%; border-radius: 2px; }
        .pf-ph--wide { aspect-ratio: 16 / 10; height: 100%; border-radius: 2px; }
        .pf-ph__label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px; font-family: var(--sans); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--fg-faint); }
        .pf-head { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-top: 20px; }
        .pf-cat { font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); }
        .pf-no { font-size: 12px; color: var(--fg-faint); letter-spacing: 0.1em; }
        .pf-item h3 { font-family: var(--serif); font-size: clamp(26px, 2.8vw, 34px); font-weight: 500; line-height: 1.06; margin: 10px 0 0; transition: color 0.3s var(--ease); }
        .pf-item--wide h3 { font-size: clamp(30px, 3.4vw, 46px); }
        .pf-item:hover h3 { color: var(--accent); }
        .pf-item p { font-size: 15.5px; color: var(--fg-soft); line-height: 1.6; margin: 12px 0 0; max-width: 46ch; }
        .pf-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .pf-tags span { font-size: 12px; color: var(--fg-faint); border: 1px solid var(--line); border-radius: 999px; padding: 5px 12px; }
        @media (max-width: 900px) {
          .pf-grid { grid-template-columns: 1fr; }
          .pf-item--wide { grid-template-columns: 1fr; grid-column: auto; }
        }
      `}</style>

      <div className="eyebrow-row">
        <span className="idx" data-reveal>Selected Work</span>
        <div className="filters" data-reveal>
          {filters.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn${active === key ? " is-on" : ""}`}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="pf-grid">
        {visible.map((p) =>
          p.featured ? (
            <article key={p.no} className="pf-item pf-item--wide">
              <div className="pf-ph pf-ph--wide">
                <div className="pf-ph__label">
                  <span>Featured Sample</span>
                  <span>igcse-framework.png</span>
                </div>
              </div>
              <div>
                <div className="pf-head">
                  <span className="pf-cat">{p.catLabel}</span>
                  <span className="pf-no">{p.no}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="pf-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </article>
          ) : (
            <article key={p.no} className="pf-item">
              <div className="pf-ph pf-ph--normal">
                <div className="pf-ph__label">
                  <span>{p.catLabel}</span>
                  <span>{p.no}</span>
                </div>
              </div>
              <div className="pf-head">
                <span className="pf-cat">{p.catLabel}</span>
                <span className="pf-no">{p.no}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="pf-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          )
        )}
      </div>
    </>
  );
}
