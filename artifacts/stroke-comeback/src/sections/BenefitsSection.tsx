import { benefits } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { ArrowRight } from "lucide-react";

export function BenefitsSection() {
  return (
    <SectionContainer id="benefits" background="soft" maxWidth="wide">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {benefits.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.items.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <ArrowRight className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-6">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
