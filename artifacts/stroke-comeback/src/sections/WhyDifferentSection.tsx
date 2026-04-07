import { whyDifferent } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { CheckCircle2, Quote } from "lucide-react";

export function WhyDifferentSection() {
  return (
    <SectionContainer id="why-different" background="soft" maxWidth="wide">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {whyDifferent.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Differentiators */}
        <div className="flex flex-col gap-5">
          {whyDifferent.differentiators.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual / quote area */}
        <div className="flex flex-col justify-center">
          {/* Abstract visual */}
          <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"
            />
            <div className="relative">
              <Quote className="w-8 h-8 text-teal-300 mb-5 opacity-80" />
              <p className="text-lg md:text-xl font-light leading-relaxed text-white/95 italic">
                {whyDifferent.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
