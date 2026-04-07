import { program } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function ProgramSection() {
  return (
    <SectionContainer id="program" background="white" maxWidth="wide">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {program.headline}
        </h2>
        <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          {program.intro}
        </p>
      </div>

      {/* Connective timeline strip on desktop */}
      <div className="relative mt-12">
        {/* Horizontal connector line */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-teal-100 z-0"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {program.phases.map((phase, i) => (
            <div
              key={i}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-t-2xl" />

              {/* Phase indicator */}
              <div className="flex items-center gap-2 mb-4 mt-2">
                <div className="w-7 h-7 rounded-full bg-teal-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{phase.number}</span>
                </div>
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">
                  {phase.weeks}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4 italic">{phase.summary}</p>

              <div className="w-8 h-px bg-teal-200 mb-4" />

              <ul className="flex flex-col gap-2.5 flex-1">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
