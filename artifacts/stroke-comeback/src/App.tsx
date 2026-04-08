import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { WhyDifferentSection } from "@/sections/WhyDifferentSection";
import { ProgramSection } from "@/sections/ProgramSection";
import { InlineCTASection } from "@/sections/InlineCTASection";
import { WhoItsForSection } from "@/sections/WhoItsForSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { DeliverablesSection } from "@/sections/DeliverablesSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { FAQSection } from "@/sections/FAQSection";
import { FounderSection } from "@/sections/FounderSection";
import { FinalCTASection } from "@/sections/FinalCTASection";
import { Footer } from "@/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        {/* 1. Problem */}
        <HeroSection />
        <ProblemSection />
        <InlineCTASection />
        {/* 2. Understanding + Solution */}
        <SolutionSection />
        <WhyDifferentSection />
        {/* 3. Structure */}
        <ProgramSection />
        <InlineCTASection />
        {/* 4. Proof */}
        <WhoItsForSection />
        <TestimonialsSection />
        {/* 5. Offer */}
        <DeliverablesSection />
        {/* 6. Decision */}
        <BenefitsSection />
        <InlineCTASection />
        <FAQSection />
        <FounderSection />
        <FinalCTASection />
      </main>
      <Footer />
      <div className="md:hidden h-20" aria-hidden="true" />
    </div>
  );
}

export default App;
