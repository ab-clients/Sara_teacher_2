import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import Button from "../components/Button";
import CvQualifications from "../components/CvQualifications";

export const metadata = {
  title: "Sara Abdelmeguid — CV",
  description: "Curriculum Vitae / Resume for Sara Abdelmeguid — English Tutor",
};

export default function CVPage() {
  return (
    <>
      {/* Hero / Summary */}
      <section className="py-12">
        <div className="container">
          <div className="paper flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold">
                Sara Abdelmeguid
              </h1>
              <p className="text-(--muted) mt-2">
                English Tutor • IGCSE specialist • CELTA, TEFL
              </p>

              <p className="text-(--muted) mt-4 max-w-2xl leading-relaxed">
                English tutor with 15+ years of international experience across
                Egypt, the UAE and Australia. I design student-centred lessons,
                focusing on confidence, real-world communication and exam
                readiness. I work with learners of all ages and adapt to
                British, American, Canadian and Australian curricula.
              </p>

              <div className="flex gap-3 mt-4">
                <Button variant="primary">
                  <a href="/contact" className="inline-flex items-center gap-2">
                    Contact
                  </a>
                </Button>
                <Button variant="ghost" type="button">
                  <a
                    href="/sara-abdelmeguid-resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 cursor-pointer"
                    download
                  >
                    <FaDownload aria-hidden />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>

            <div className="w-full md:w-56 text-center">
              <div className="w-40 h-40 rounded-full bg-black/[0.06] mx-auto flex items-center justify-center text-(--muted)">
                <Image
                  src="/images/sara-profile.jpg"
                  alt="Sara Abdelmeguid"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
              </div>
              <div className="mt-4 text-(--muted)">
                Based in Australia
                <br />
                Open to global roles
              </div>
            </div>
          </div>
        </div>
      </section>

      <CvQualifications />

      {/* Services & Approach */}
      <section className="py-12">
        <div className="container">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Teaching Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="paper p-4">
                <h3 className="font-semibold">1:1 Tutoring</h3>
                <p className="text-(--muted) mt-2">
                  Personalised lessons tailored to learner goals — exam prep,
                  writing, speaking and comprehension.
                </p>
              </div>
              <div className="paper p-4">
                <h3 className="font-semibold">Small Group Classes</h3>
                <p className="text-(--muted) mt-2">
                  Interactive group lessons that encourage collaboration and
                  peer feedback.
                </p>
              </div>
              <div className="paper p-4">
                <h3 className="font-semibold">Curriculum Design</h3>
                <p className="text-(--muted) mt-2">
                  Custom syllabi, assessments and resources to fit school or
                  individual needs.
                </p>
              </div>
              <div className="paper p-4">
                <h3 className="font-semibold">Online Workshops</h3>
                <p className="text-(--muted) mt-2">
                  Focused workshops: exam technique, essay writing, speaking
                  confidence.
                </p>
              </div>
            </div>

            <section className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Teaching Approach</h3>
              <p className="text-(--muted) leading-relaxed">
                I use communicative, student-centred methods with clear
                objectives and measurable outcomes. Lessons combine practical
                tasks, targeted feedback and regular progress checks. I adapt
                materials to each learner to keep lessons engaging and relevant.
              </p>
            </section>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="paper p-4">
              <h3 className="text-lg font-semibold mb-2">Skills & Tools</h3>
              <ul className="text-(--muted) list-disc list-inside">
                <li>IGCSE Exam Preparation</li>
                <li>Lesson Planning & Assessment</li>
                <li>Zoom, Google Classroom, Kahoot</li>
                <li>Curriculum Mapping</li>
              </ul>
            </div>

            <div className="paper p-4">
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <p className="text-(--muted)">
                Accepting new students — remote worldwide. Flexible hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (placeholder) */}
      <section className="py-12 section-alt">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            What students say
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="paper p-6">
              “Sara’s lessons helped me improve my grades and confidence —
              clear, friendly and effective.”
            </div>
            <div className="paper p-6">
              “Excellent guidance for IGCSE exams — practical techniques and
              personalised feedback.”
            </div>
            <div className="paper p-6">
              “Engaging lessons that made speaking and writing much easier.”
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
