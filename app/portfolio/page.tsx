import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import Button from "../../app/components/Button";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaBookOpen,
  FaChalkboardTeacher,
} from "react-icons/fa";

export const metadata = {
  title: "Portfolio — Sara Abdelmeguid",
  description:
    "Teaching resources, sample lessons and projects by Sara Abdelmeguid — English tutor",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "IGCSE Writing Booster",
      desc: "A 6-week targeted program focusing on exam-writing technique and assessment practice.",
      href: "/portfolio/igcse-writing",
      tag: "Course",
    },
    {
      title: "Online Speaking Workshops",
      desc: "Interactive, small-group workshops to build speaking confidence and exam performance.",
      href: "/portfolio/speaking-workshops",
      tag: "Workshop",
    },
    {
      title: "Custom Curriculum Sample",
      desc: "Example curriculum and assessment materials designed for middle-school learners.",
      href: "/portfolio/curriculum-sample",
      tag: "Resources",
    },
  ];

  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="paper p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold">Portfolio</h1>
            <p className="text-(--muted) mt-3 max-w-2xl mx-auto">
              Teaching resources, sample lesson plans, workshops and projects
              that showcase my approach to English teaching, exam preparation
              and curriculum design. Click any item to view details or request a
              custom program.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <Link href="/contact">
                <Button variant="primary">Contact for custom work</Button>
              </Link>
              <Link href="/cv">
                <Button variant="ghost">View full CV</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="paper p-5 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg">{p.title}</div>
                  <div className="text-(--muted) text-sm">{p.tag}</div>
                </div>

                <p className="text-(--muted) mt-3 flex-1">{p.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-(--primary)"
                  >
                    View project <FaExternalLinkAlt aria-hidden />
                  </Link>
                  <span className="text-(--muted) text-sm">
                    Sample materials available
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 section-alt">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="paper p-4">
              <FaChalkboardTeacher
                className="text-2xl"
                style={{ color: "var(--accent)" }}
                aria-hidden
              />
              <h3 className="font-semibold mt-3">Workshops</h3>
              <p className="text-(--muted) mt-2">
                Public and private workshops for exam technique, speaking and
                writing.
              </p>
            </div>

            <div className="paper p-4">
              <FaBookOpen
                className="text-2xl"
                style={{ color: "var(--primary)" }}
                aria-hidden
              />
              <h3 className="font-semibold mt-3">Lesson Resources</h3>
              <p className="text-(--muted) mt-2">
                Downloadable lesson plans, assessment rubrics and sample
                activities.
              </p>
            </div>

            <div className="paper p-4">
              <FaExternalLinkAlt
                className="text-2xl"
                style={{ color: "var(--primary)" }}
                aria-hidden
              />
              <h3 className="font-semibold mt-3">Custom Curriculum</h3>
              <p className="text-(--muted) mt-2">
                Bespoke curriculum design for schools and tutoring programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container paper p-6 text-center">
          <h3 className="text-2xl font-semibold">Want to see more?</h3>
          <p className="text-(--muted) mt-2">
            I can share full samples, lesson plans and references on request.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/contact">
              <Button variant="primary">Get in touch</Button>
            </Link>
            <Link href="/cv">
              <Button variant="ghost">Download CV</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
