import { finalCTA } from "@/content";
import { THINKIFIC_URL } from "@/content";

export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="w-full py-20 md:py-28 px-5 md:px-8 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-64 bg-teal-700/15 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-80 h-48 bg-blue-900/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 mb-8">
          <div className="w-5 h-px bg-teal-400/60" />
          <span className="text-teal-400 text-xs font-semibold tracking-[0.15em] uppercase">
            Ready to begin
          </span>
          <div className="w-5 h-px bg-teal-400/60" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          {finalCTA.headline.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Body */}
        <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          {finalCTA.body}
        </p>

        {/* CTAs — clear hierarchy */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={THINKIFIC_URL}
            className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-white font-bold px-10 py-4 rounded-lg transition-colors shadow-lg text-base"
          >
            {finalCTA.primaryCTA}
          </a>
          <a
            href={THINKIFIC_URL}
            className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white/75 hover:text-white border border-white/20 hover:border-white/50 font-medium px-10 py-4 rounded-lg transition-all text-base"
          >
            {finalCTA.secondaryCTA}
          </a>
        </div>

        {/* Trust notes */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {finalCTA.trustNotes.map((note, i) => (
            <span key={i} className="text-sm text-slate-400 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-teal-500 inline-block" />
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
