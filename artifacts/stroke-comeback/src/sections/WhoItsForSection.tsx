import { whoItsFor } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { Check, X } from "lucide-react";

export function WhoItsForSection() {
  return (
    <SectionContainer id="who" background="white" maxWidth="wide">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {whoItsFor.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Who it's for */}
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-7">
          <h3 className="text-lg font-semibold text-teal-900 mb-5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-white" />
            </span>
            This program is designed for you if…
          </h3>
          <ul className="flex flex-col gap-3">
            {whoItsFor.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who it's not for */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
          <h3 className="text-lg font-semibold text-slate-700 mb-5 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center flex-shrink-0">
              <X className="w-3.5 h-3.5 text-white" />
            </span>
            This program is not for…
          </h3>
          <ul className="flex flex-col gap-3">
            {whoItsFor.excluded.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
