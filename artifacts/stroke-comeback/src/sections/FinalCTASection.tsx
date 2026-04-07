import { finalCTA } from "@/content";
import { THINKIFIC_URL } from "@/content";

export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="w-full py-24 md:py-32 px-5 md:px-8 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-64 bg-teal-700/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-80 h-48 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 mb-8">
          <div className="w-5 h-px bg-teal-400/60" />
          <span className="text-teal-400 text-xs font-semibold tracking-[0.15em] uppercase">
            Ready to begin
          </span>
          <div className="w-5 h-px bg-teal-400/60" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
          {finalCTA.headline.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Body */}
        <p className="text-xl text-teal-200 leading-relaxed mb-12">
          {finalCTA.body}
        </p>

        {/* Primary CTA only — clear, single action */}
        <a
          href={THINKIFIC_URL}
          className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-white font-bold px-12 py-5 rounded-xl transition-colors shadow-xl hover:shadow-2xl text-lg tracking-wide mb-4"
        >
          {finalCTA.primaryCTA}
        </a>

        {/* Ghost secondary */}
        <div className="mb-10">
          <a
            href={THINKIFIC_URL}
            className="inline-flex items-center justify-center text-white/60 hover:text-white/90 font-medium text-sm transition-colors underline underline-offset-4"
          >
            {finalCTA.secondaryCTA}
          </a>
        </div>

        {/* Trust notes */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {finalCTA.trustNotes.map((note, i) => (
            <span key={i} className="text-sm text-slate-400 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-teal-500 inline-block" aria-hidden="true" />
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
