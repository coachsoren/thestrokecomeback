import { program } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function ProgramSection() {
  return (
    <>
      {/* ── Statement block ───────────────────────────────────────── */}
      <section
        id="program-statement"
        className="w-full py-20 md:py-28 px-5 md:px-8 bg-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          {program.statement.map((line, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 leading-snug mb-3"
                  : "text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug"
              }
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* ── Program section ───────────────────────────────────────── */}
      <SectionContainer id="program" background="soft" maxWidth="default">
        {/* Section label + headline */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-teal-500" />
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">
              {program.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
            {program.headline}
          </h2>

          {/* Intro paragraphs */}
          <div className="flex flex-col gap-3 max-w-2xl">
            {program.intro.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-base md:text-lg text-slate-600 leading-relaxed font-medium"
                    : "text-base md:text-lg text-slate-600 leading-relaxed"
                }
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Phases — vertical list */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical connector line */}
          <div
            aria-hidden="true"
            className="absolute top-5 bottom-5 left-[1.1rem] w-px bg-teal-100 hidden md:block"
          />

          {program.phases.map((phase, i) => (
            <div
              key={i}
              className="relative flex gap-6 md:gap-8 py-8 border-b border-slate-100 last:border-0 group"
            >
              {/* Phase number bubble */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-teal-700 group-hover:bg-teal-600 transition-colors flex items-center justify-center shadow-sm z-10 relative">
                  <span className="text-white text-xs font-bold">{phase.number}</span>
                </div>
              </div>

              {/* Phase content */}
              <div className="flex-1 min-w-0 pb-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug mb-3">
                  Phase {phase.number}: {phase.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-3">
                  {phase.body}
                </p>

                {/* Outcome line */}
                {phase.outcome && (
                  <p className="text-teal-700 font-medium text-sm mb-3 italic">
                    {phase.outcome}
                  </p>
                )}

                {/* Bullet items */}
                {phase.items.length > 0 && (
                  <ul className="flex flex-col gap-1.5 mt-3">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Closing panel — highlights + closing line */}
        <div className="mt-12 bg-white border border-teal-100 rounded-2xl p-7 md:p-8 shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
            This is why the program works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
            {program.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded bg-teal-600 flex items-center justify-center mt-0.5">
                  <svg
                    viewBox="0 0 10 8"
                    className="w-2.5 h-1.5"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M1 4l2.5 2.5L9 1" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 pt-6">
            <p className="text-base md:text-lg font-semibold text-slate-800 leading-snug">
              {program.closingLine}
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
