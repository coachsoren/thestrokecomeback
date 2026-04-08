import { finalCTA } from "@/content";
import { THINKIFIC_URL } from "@/content";

export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="w-full py-24 md:py-32 px-5 md:px-8 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white relative overflow-hidden"
    >
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-8">
          {finalCTA.headline.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-3 mb-10">
          {finalCTA.body.map((para, i) => (
            <p key={i} className="text-lg text-slate-300 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* What happens next */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-left">
          <p className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-4 text-center">
            What happens next
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {finalCTA.nextSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-600/40 border border-teal-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-300 text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-sm text-slate-200 leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={THINKIFIC_URL}
          className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-white font-bold px-12 py-5 rounded-xl transition-colors shadow-xl hover:shadow-2xl text-lg tracking-wide mb-3"
        >
          {finalCTA.primaryCTA}
        </a>

        <p className="text-sm text-teal-300 mb-8">{finalCTA.subline}</p>

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
