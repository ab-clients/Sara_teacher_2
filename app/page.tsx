import HomeHero from "./components/HomeHero";
import CTA from "./components/CTA";
import HomeTeaching from "./components/HomeTeaching";
import { HomeAbout } from "./components/HomeAvout";

export default function Home() {
  return (
    <>
      <HomeHero
        title={"Hi, I'm Sara Abdelmeguid"}
        subtitle={[
          "Freelance Teacher • Based in Australia • Open to global roles.",
          "English language tutoring, curriculum design, and online lessons. Friendly, modern approach tailored to learners.",
        ]}
        bgImage="/images/hero-sara.jpg"
      />

      <HomeAbout />

      <HomeTeaching />
      <CTA />
    </>
  );
}
