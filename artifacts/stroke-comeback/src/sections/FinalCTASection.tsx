import { finalCTA } from "@/content";
import { CTAButton } from "@/components/CTAButton";

export function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="w-full py-20 md:py-28 px-5 md:px-8 bg-gradient-to-br from-teal-800 to-teal-950 text-white text-center relative overflow-hidden"
    >
      {/* Decorative */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-white/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {finalCTA.headline}
        </h2>
        <p className="text-lg text-teal-100 leading-relaxed mb-10">{finalCTA.body}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CTAButton label={finalCTA.primaryCTA} variant="outline" />
          <CTAButton label={finalCTA.secondaryCTA} variant="outline" />
        </div>
        <p className="mt-8 text-sm text-teal-300">
          12-week guided program  •  Lifelong access  •  $997 USD
        </p>
      </div>
    </section>
  );
}
