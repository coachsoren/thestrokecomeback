import { deliverables, riskReduction } from "@/content";
import { THINKIFIC_URL } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function DeliverablesSection() {
  return (
    <SectionContainer id="deliverables" background="white" maxWidth="default">
      {/* Headline */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {deliverables.headline}
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          {deliverables.intro}
        </p>
      </div>

      {/* Two-column checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {deliverables.items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4"
          >
            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-900 leading-snug mb-0.5">
                {item.title}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Risk reduction */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 md:p-7 mb-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white border border-teal-200 flex items-center justify-center mt-0.5 shadow-sm">
            <ShieldCheck className="w-4.5 h-4.5 text-teal-600 w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-teal-900 mb-2">{riskReduction.headline}</h3>
            <div className="flex flex-col gap-1.5 mb-2">
              {riskReduction.body.map((para, i) => (
                <p key={i} className="text-sm text-teal-800 leading-relaxed">{para}</p>
              ))}
            </div>
            <p className="text-sm text-teal-700 font-medium">{riskReduction.reassurance}</p>
          </div>
        </div>
      </div>

      {/* Price panel */}
      <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-2xl p-8 md:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-300 mb-2">
              {deliverables.priceLabel}
            </p>
            <p className="text-6xl font-bold text-white mb-2 leading-none">{deliverables.price}</p>
            <p className="text-teal-200 text-sm">{deliverables.priceSubNote}</p>
            <p className="text-slate-500 text-xs mt-3 max-w-xs leading-relaxed">
              {deliverables.guarantee}
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[260px]">
            <a
              href={THINKIFIC_URL}
              className="w-full text-center bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base tracking-wide"
            >
              Start the Program
            </a>
            <a
              href={THINKIFIC_URL}
              className="w-full text-center text-white/70 hover:text-white font-medium text-sm transition-colors text-center"
            >
              View full program details
            </a>
            <p className="text-slate-400 text-xs text-center">{deliverables.urgencyLine}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
