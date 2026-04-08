import { recoverySystem } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

const blockAccents = [
  { bar: "from-teal-500 to-teal-600", num: "text-teal-100", tag: "text-teal-700 bg-teal-100" },
  { bar: "from-blue-500 to-blue-600", num: "text-blue-100", tag: "text-blue-700 bg-blue-100" },
  { bar: "from-indigo-400 to-indigo-600", num: "text-indigo-100", tag: "text-indigo-700 bg-indigo-100" },
  { bar: "from-teal-600 to-slate-700", num: "text-slate-200", tag: "text-slate-600 bg-slate-200" },
];

export function RecoverySystemSection() {
  return (
    <SectionContainer id="recovery-system" background="soft" maxWidth="wide">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-teal-500" />
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">
            Complete system
          </span>
          <div className="w-6 h-px bg-teal-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {recoverySystem.headline}
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          {recoverySystem.subtext}
        </p>
      </div>

      {/* 2×2 block grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {recoverySystem.blocks.map((block, i) => {
          const accent = blockAccents[i] ?? blockAccents[0];
          return (
            <div
              key={i}
              className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col"
            >
              {/* Coloured top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${accent.bar} flex-shrink-0`} />

              <div className="p-7 flex flex-col flex-1 relative">
                {/* Watermark number */}
                <span
                  aria-hidden="true"
                  className={`absolute top-4 right-6 text-7xl font-black leading-none select-none pointer-events-none ${accent.num}`}
                >
                  {block.number}
                </span>

                {/* Phase tag */}
                <span className={`inline-block self-start text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-4 ${accent.tag}`}>
                  Phase {block.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 pr-10">
                  {block.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {block.description}
                </p>

                {/* Divider */}
                <div className="w-10 h-px bg-slate-200 mb-5" />

                {/* Module list */}
                <ul className="flex flex-col gap-2 flex-1">
                  {block.modules.map((mod, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      <span className="text-sm text-slate-700 leading-snug">{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing stats note */}
      <div className="text-center">
        <p className="text-xs text-slate-400 tracking-wide">{recoverySystem.closingNote}</p>
      </div>
    </SectionContainer>
  );
}
