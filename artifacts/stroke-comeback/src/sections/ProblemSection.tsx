import { problem } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function ProblemSection() {
  return (
    <SectionContainer id="problem" background="soft" maxWidth="default">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {problem.headline}
        </h2>
        <p className="text-base text-slate-500 leading-relaxed max-w-md mx-auto">
          {problem.intro}
        </p>
      </div>

      <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-center max-w-2xl mx-auto mb-10">
        {problem.body}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {problem.cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-teal-200 transition-colors duration-200"
          >
            <div className="flex items-start gap-3.5">
              <span className="text-sm font-bold text-slate-200 tabular-nums flex-shrink-0 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-slate-700 text-base leading-relaxed italic">
                &ldquo;{card.text}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
