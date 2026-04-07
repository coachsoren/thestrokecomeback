import { problem } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function ProblemSection() {
  return (
    <SectionContainer id="problem" background="soft">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
          {problem.headline}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {problem.body}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {problem.cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
              </div>
              <p className="text-slate-700 text-base leading-relaxed italic">"{card}"</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
