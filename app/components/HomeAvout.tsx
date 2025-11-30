import React from "react";

export const HomeAbout = () => {
  return (
    <section className="container py-12" id="home-about">
      <h2 className="text-2xl font-semibold mb-3">About</h2>
      <p className="text-(--muted) max-w-2xl leading-relaxed">
        I&rsquo;m Sara — an English tutor with 15+ years of international
        experience. I specialise in IGCSE and exam preparation, plus tailored
        lessons for learners of all ages. For a full CV with experience,
        qualifications and services, visit the{" "}
        <a href="/cv" className="underline">
          CV
        </a>
        .
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <div className="paper p-4 text-center">
          <div className="font-semibold">IGCSE Specialist</div>
          <div className="text-(--muted) mt-2">Exam technique & coursework</div>
        </div>
        <div className="paper p-4 text-center">
          <div className="font-semibold">15+ Years</div>
          <div className="text-(--muted) mt-2">Classroom & online teaching</div>
        </div>
        <div className="paper p-4 text-center">
          <div className="font-semibold">Tailored Lessons</div>
          <div className="text-(--muted) mt-2">
            Personalised plans & feedback
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">How I work</h3>
        <p className="text-(--muted) max-w-2xl">
          Lessons are student-centred, practical and focused on measurable
          progress — I combine communicative tasks with targeted feedback to
          build confidence and skills.
        </p>
      </div>
    </section>
  );
};
