import { deliverables } from "@/content";
import { THINKIFIC_URL } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { CheckCircle2 } from "lucide-react";

const groupColors: Record<string, string> = {
  Guidance: "bg-teal-50 border-teal-200",
  Content: "bg-blue-50 border-blue-200",
  Support: "bg-slate-50 border-slate-200",
};

const groupLabelColors: Record<string, string> = {
  Guidance: "text-teal-700 bg-teal-100",
  Content: "text-blue-700 bg-blue-100",
  Support: "text-slate-600 bg-slate-200",
};

export function DeliverablesSection() {
  return (
    <SectionContainer id="deliverables" background="white" maxWidth="wide">
      {/* Headline */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {deliverables.headline}
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          {deliverables.intro}
        </p>
      </div>

      {/* Grouped deliverables */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {deliverables.groups.map((group) => (
          <div
            key={group.label}
            className={`rounded-2xl border p-6 ${groupColors[group.label] ?? "bg-slate-50 border-slate-200"}`}
          >
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-5 ${groupLabelColors[group.label] ?? "text-slate-600 bg-slate-200"}`}
            >
              {group.label}
            </span>
            <div className="flex flex-col gap-4">
              {group.items.map((item, j) => (
                <div key={j} className="flex items-start gap-3">
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
          </div>
        ))}
      </div>

      {/* Micro-commitment prompt */}
      <div className="text-center mb-8">
        <p className="text-base text-slate-500 mb-3">{deliverables.microCommitment.label}</p>
        <a
          href={THINKIFIC_URL}
          className="inline-flex items-center justify-center bg-transparent hover:bg-teal-50 text-teal-700 border-2 border-teal-600 hover:border-teal-700 font-semibold px-8 py-3.5 rounded-xl transition-all text-sm"
        >
          {deliverables.microCommitment.button}
        </a>
      </div>

      {/* Price panel */}
      <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-2xl p-8 md:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Price info */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-300 mb-2">
              {deliverables.priceLabel}
            </p>
            <p className="text-6xl font-bold text-white mb-2 leading-none">{deliverables.price}</p>
            <p className="text-teal-200 text-sm mb-1">{deliverables.priceSubNote}</p>
            <p className="text-slate-500 text-xs mt-3 max-w-xs leading-relaxed">
              {deliverables.guarantee}
            </p>
          </div>

          {/* CTA stack */}
          <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[260px]">
            <a
              href={THINKIFIC_URL}
              className="w-full text-center bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg text-base tracking-wide"
            >
              Start the Program
            </a>
            <a
              href={THINKIFIC_URL}
              className="w-full text-center bg-transparent hover:bg-white/10 text-white/80 hover:text-white border border-white/25 hover:border-white/50 font-medium px-8 py-3.5 rounded-xl transition-all text-sm"
            >
              View Full Program Details
            </a>
            <p className="text-slate-400 text-xs text-center">{deliverables.urgencyLine}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
