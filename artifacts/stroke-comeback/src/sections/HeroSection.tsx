import { hero } from "@/content";
import { THINKIFIC_URL } from "@/content";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-0 md:pt-32 px-5 md:px-8 bg-gradient-to-br from-slate-50 via-white to-teal-50/40 overflow-hidden"
    >
      {/* Decorative blurs */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-teal-100/25 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-40 left-0 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto w-full pb-16 md:pb-24">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 mb-8">
          <div className="w-6 h-px bg-teal-600" />
          <span className="text-teal-700 text-xs font-semibold tracking-[0.18em] uppercase">
            {hero.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — copy */}
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6">
              {hero.headline.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-teal-800 leading-relaxed mb-3 font-medium border-l-2 border-teal-400 pl-4">
              {hero.subheadline}
            </p>

            {/* Supporting line */}
            <p className="text-base text-slate-500 leading-relaxed mb-10 pl-4 border-l-2 border-transparent">
              {hero.supportingLine}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={THINKIFIC_URL}
                className="inline-flex items-center justify-center bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white font-bold px-9 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-base tracking-wide"
              >
                {hero.primaryCTA}
              </a>
              <a
                href={THINKIFIC_URL}
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-teal-700 border-2 border-teal-600 hover:border-teal-700 font-semibold px-9 py-4 rounded-xl transition-all text-base"
              >
                {hero.secondaryCTA}
              </a>
            </div>

            {/* Trust bar */}
            <p className="text-xs text-slate-400 leading-relaxed tracking-wide">
              {hero.trustBar}
            </p>
          </div>

          {/* Right column — stat panel */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
                At a glance
              </p>
              <div className="grid grid-cols-2 gap-6">
                {hero.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-4xl font-bold text-teal-700 leading-none mb-1.5">
                      {stat.value}
                    </span>
                    <span className="text-sm text-slate-500 leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-7 border-t border-slate-100 flex flex-col gap-3">
                {[
                  "For stroke survivors at any stage",
                  "Follows formal rehab — or restarts it",
                  "Designed around neuroplasticity principles",
                  "Complements medical care",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 10 8" className="w-2.5 h-2 fill-white" aria-hidden="true">
                        <path
                          d="M1 4l2.5 2.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-600 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/80 to-transparent pointer-events-none"
      />
    </section>
  );
}
