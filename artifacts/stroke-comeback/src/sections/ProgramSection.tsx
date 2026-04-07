import { program } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function ProgramSection() {
  return (
    <SectionContainer id="program" background="soft" maxWidth="wide">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {program.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {program.phases.map((phase, i) => (
          <div
            key={i}
            className="relative bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
          >
            {/* Phase number watermark */}
            <span
              aria-hidden="true"
              className="absolute top-3 right-5 text-7xl font-bold text-slate-100 select-none leading-none"
            >
              {phase.number}
            </span>

            <div className="relative">
              {/* Phase label */}
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-600 mb-2">
                Phase {phase.number}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{phase.title}</h3>
              <p className="text-sm font-medium text-slate-500 mb-4">{phase.weeks}</p>

              {/* Divider */}
              <div className="w-10 h-px bg-teal-300 mb-4" />

              {/* Items */}
              <ul className="flex flex-col gap-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
