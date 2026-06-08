export default function HomeMarquee() {
  const items = [
    "IGCSE Preparation",
    "Exam Technique",
    "Curriculum Design",
    "1:1 Tutoring",
    "Essay Writing",
    "Speaking Confidence",
  ];

  return (
    <>
      <style>{`
        .marquee { border-block: 1px solid var(--line); overflow: hidden; padding-block: 26px; }
        .marquee__track {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation: marquee-slide 38s linear infinite;
        }
        .marquee__track span {
          font-family: var(--serif);
          font-size: clamp(26px, 3.4vw, 46px);
          font-weight: 500;
          color: var(--fg-soft);
          padding-inline: clamp(20px, 3vw, 44px);
          display: inline-flex;
          align-items: center;
          gap: clamp(20px, 3vw, 44px);
        }
        .marquee__track span::after { content: "✦"; color: var(--accent); font-size: 0.5em; }
        .marquee:hover .marquee__track { animation-play-state: paused; }
        @keyframes marquee-slide { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee__track { animation: none; } }
      `}</style>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...items, ...items].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}
