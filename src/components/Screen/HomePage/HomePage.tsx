import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "../LoadingPage/LoadingPage";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import CostSaving from "./CostSaving";
import ProjectsSection from "./ProjectsSection";
import CTASection from "./CtaSection";
import { TapeSection } from "@/components/Tape";
import FAQSection from "./FaqSection";
import { TestimonialsSection } from "./TestimonialSection";
import StatsSection from "../AboutPage/StatsSection";
// import ResonsiveLine from "@/components/ResonsiveLine";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2800);
    })();
  }, []);

  return (
    // mix-blend-difference
    <main className="">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading-screen" />}
      </AnimatePresence>
      <HeroSection isLoading={isLoading} />
      {/* <ResonsiveLine /> */}
      <AboutSection />
      <StatsSection />
      <CostSaving />
      {/* <TeamSection /> */}
      <ProjectsSection />
      <CTASection />
      <TestimonialsSection />
      <TapeSection />
      <FAQSection />
      <TapeSection rotate="rotate-3" />
    </main>
  );
}
