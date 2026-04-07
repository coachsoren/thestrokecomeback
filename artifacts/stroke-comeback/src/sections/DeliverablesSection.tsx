import { deliverables } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { CTAButton } from "@/components/CTAButton";
import { CheckCircle2 } from "lucide-react";

export function DeliverablesSection() {
  return (
    <SectionContainer id="deliverables" background="white" maxWidth="default">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {deliverables.headline}
        </h2>
      </div>

      {/* Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {deliverables.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3"
          >
            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="text-sm text-slate-700 font-medium">{item}</span>
          </div>
        ))}
      </div>

      {/* Price highlight */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-center text-white mb-8 shadow-lg">
        <p className="text-sm font-semibold tracking-widest uppercase text-teal-200 mb-3">
          Investment
        </p>
        <p className="text-5xl font-bold text-white mb-2">{deliverables.price}</p>
        <p className="text-teal-200 text-sm">{deliverables.priceNote}</p>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <CTAButton label="Enroll Now" variant="primary" />
      </div>
    </SectionContainer>
  );
}
