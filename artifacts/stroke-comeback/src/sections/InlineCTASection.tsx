import { midCTA } from "@/content";
import { THINKIFIC_URL } from "@/content";

export function InlineCTASection() {
  return (
    <section className="w-full py-14 md:py-16 px-5 md:px-8 bg-teal-700">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-bold text-white mb-6 leading-snug">
          {midCTA.headline}
        </p>
        <a
          href={THINKIFIC_URL}
          className="inline-flex items-center justify-center bg-white hover:bg-slate-50 active:bg-slate-100 text-teal-800 font-bold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-base tracking-wide"
        >
          {midCTA.primaryCTA}
        </a>
        <p className="mt-4 text-sm text-teal-200">{midCTA.urgencyLine}</p>
      </div>
    </section>
  );
}
