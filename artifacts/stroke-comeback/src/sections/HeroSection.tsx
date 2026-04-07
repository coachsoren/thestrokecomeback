import { hero } from "@/content";
import { CTAButton } from "@/components/CTAButton";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-20 md:pt-32 md:pb-28 px-5 md:px-8 bg-gradient-to-br from-slate-50 via-white to-teal-50/40"
    >
      {/* Subtle decorative shapes */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 w-64 h-64 bg-blue-50/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto w-full">
        {/* Overline badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-teal-600" />
          <span className="text-teal-700 text-sm font-semibold tracking-widest uppercase">
            12-Week Home Recovery Program
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-6 max-w-2xl font-light italic">
          {hero.subheadline}
        </p>

        {/* Body */}
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
          {hero.body}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <CTAButton label={hero.primaryCTA} variant="primary" />
          <CTAButton label={hero.secondaryCTA} variant="secondary" />
        </div>

        {/* Trust line */}
        <p className="text-sm text-slate-500 leading-relaxed">{hero.trustLine}</p>

        {/* Decorative divider */}
        <div
          aria-hidden="true"
          className="mt-14 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        />
      </div>

      {/* Abstract visual — replace with real image by adding an img tag here */}
      <div
        aria-hidden="true"
        className="hidden lg:flex absolute right-8 xl:right-16 bottom-16 w-72 xl:w-80 h-72 xl:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-blue-100 opacity-60 items-center justify-center"
      >
        <NeuroplasticityIllustration />
      </div>
    </section>
  );
}

function NeuroplasticityIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-40 h-40 text-teal-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Simplified abstract circles representing neural network */}
      <circle cx="100" cy="100" r="60" opacity="0.3" />
      <circle cx="100" cy="100" r="40" opacity="0.5" />
      <circle cx="100" cy="100" r="20" opacity="0.8" />
      {/* Connection lines */}
      <line x1="100" y1="40" x2="100" y2="160" opacity="0.4" />
      <line x1="40" y1="100" x2="160" y2="100" opacity="0.4" />
      <line x1="58" y1="58" x2="142" y2="142" opacity="0.3" />
      <line x1="142" y1="58" x2="58" y2="142" opacity="0.3" />
      {/* Nodes */}
      <circle cx="100" cy="40" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="160" cy="100" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="100" cy="160" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="40" cy="100" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="142" cy="58" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="142" cy="142" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="58" cy="142" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="58" cy="58" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
