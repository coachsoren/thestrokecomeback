import { testimonials } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function TestimonialsSection() {
  return (
    <SectionContainer id="testimonials" background="white" maxWidth="wide">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {testimonials.headline}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {testimonials.items.map((item, i) => (
          <div
            key={i}
            className="bg-slate-50 border border-slate-100 rounded-2xl p-7 flex flex-col gap-5"
          >
            {/* Opening quote mark */}
            <div aria-hidden="true" className="text-4xl font-serif text-teal-200 leading-none select-none">
              &ldquo;
            </div>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed -mt-3 flex-1">
              {item.quote}
            </p>

            <div className="flex items-center gap-2.5 pt-2 border-t border-slate-200">
              {/* Subtle avatar placeholder */}
              <div className="w-7 h-7 rounded-full bg-teal-100 border border-teal-200 flex-shrink-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-teal-400/50" />
              </div>
              <span className="text-sm text-slate-400 font-medium">{item.attribution}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-slate-400 text-center leading-relaxed max-w-2xl mx-auto">
        {testimonials.disclaimer}
      </p>
    </SectionContainer>
  );
}
