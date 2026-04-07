import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { WhyDifferentSection } from "@/sections/WhyDifferentSection";
import { WhoItsForSection } from "@/sections/WhoItsForSection";
import { ProgramSection } from "@/sections/ProgramSection";
import { InlineCTASection } from "@/sections/InlineCTASection";
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
        <HeroSection />
        <ProblemSection />
        <InlineCTASection />
        <SolutionSection />
        <WhyDifferentSection />
        <WhoItsForSection />
        <ProgramSection />
        <InlineCTASection />
        <DeliverablesSection />
        <BenefitsSection />
        <InlineCTASection />
        <FAQSection />
        <FounderSection />
        <FinalCTASection />
      </main>
      <Footer />
      {/* Mobile bottom spacing for sticky CTA */}
      <div className="md:hidden h-20" aria-hidden="true" />
    </div>
  );
}

export default App;
