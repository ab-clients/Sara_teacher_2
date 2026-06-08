import HomeHero from "./components/HomeHero";
import HomeMarquee from "./components/HomeMarquee";
import { HomeAbout } from "./components/HomeAvout";
import HomeTeaching from "./components/HomeTeaching";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeMarquee />
      <HomeAbout />
      <HomeTeaching />
      <CTA />
    </>
  );
}
