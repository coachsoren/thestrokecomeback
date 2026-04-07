import { founderSection, founder } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function FounderSection() {
  return (
    <SectionContainer id="founder" background="soft" maxWidth="default">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-6 h-px bg-teal-500" />
        <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">
          {founderSection.credentialLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16">
        {/* Left — photo placeholder */}
        <div className="flex flex-col items-center md:items-start gap-0">
          {/*
            =============================================
            TO ADD A REAL PHOTO:
            1. Place the image at: artifacts/stroke-comeback/public/images/founder.jpg
            2. Replace the placeholder div below with:
               <img
                 src="/images/founder.jpg"
                 alt={founder.headshotAlt}
                 className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-md"
               />
            ============================================= */}
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-teal-100 via-blue-50 to-slate-100 border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 80 80"
              className="w-18 h-18 text-teal-300"
              style={{ width: "4.5rem", height: "4.5rem" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="40" cy="28" r="14" />
              <path d="M12 72 Q12 52 40 52 Q68 52 68 72" />
            </svg>
          </div>
        </div>

        {/* Right — name, title, text, credentials */}
        <div className="flex flex-col">
          {/* Name */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-1">
            {founder.name}
          </h2>

          {/* Professional title */}
          <p className="text-base text-slate-500 font-medium mb-8">
            {founder.title}
          </p>

          {/* Section headline */}
          <h3 className="text-lg md:text-xl font-semibold text-slate-800 leading-snug mb-6">
            {founderSection.headline}
          </h3>

          {/* Body paragraphs */}
          <div className="flex flex-col gap-5 mb-10">
            {founderSection.body.map((para, i) => (
              <p key={i} className="text-slate-600 text-base md:text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Credentials block */}
          <div className="bg-white border border-slate-200 rounded-xl px-6 py-5 mb-8 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Background
            </p>
            <ul className="flex flex-col gap-3">
              {founderSection.credentials.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
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
                  <span className="text-sm text-slate-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing sentence */}
          <div className="border-l-4 border-teal-500 pl-5">
            <p className="text-base md:text-lg text-slate-700 italic leading-relaxed">
              "{founderSection.closingSentence}"
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
