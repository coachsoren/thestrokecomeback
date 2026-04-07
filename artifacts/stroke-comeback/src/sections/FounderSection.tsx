import { founderSection, founder } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function FounderSection() {
  const hasCredentials =
    founder.qualifications || founder.yearsExperience || founder.clinicalFocus;

  return (
    <SectionContainer id="founder" background="soft" maxWidth="default">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-6 h-px bg-teal-500" />
        <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">
          {founderSection.credentialLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14">
        {/* Left — photo + identity card */}
        <div className="flex flex-col items-center md:items-start gap-5">
          {/*
            =============================================
            TO ADD A REAL FOUNDER PHOTO:
            1. Place the image at: artifacts/stroke-comeback/public/images/founder.jpg
            2. Replace the placeholder div below with:
               <img
                 src="/images/founder.jpg"
                 alt={founder.headshotAlt}
                 className="w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover shadow-md"
               />
            3. Optionally set founder.headshotSrc in content.ts
            ============================================= */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-teal-100 via-blue-50 to-slate-100 border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 80 80"
              className="w-16 h-16 text-teal-300"
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

          {/* Identity card — update founder fields in content.ts */}
          <div className="bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm w-full md:w-48">
            {/* Founder name — set founder.name in content.ts */}
            <p className="font-bold text-slate-900 text-base leading-snug mb-1">
              {founder.name}
            </p>
            {/* Founder title — set founder.title in content.ts */}
            <p className="text-teal-700 text-xs font-semibold leading-snug mb-3">
              {founder.title}
            </p>

            {hasCredentials && (
              <div className="flex flex-col gap-1.5 border-t border-slate-100 pt-3">
                {/* Qualifications — set founder.qualifications in content.ts */}
                {founder.qualifications && (
                  <p className="text-slate-500 text-xs leading-snug">{founder.qualifications}</p>
                )}
                {/* Years of experience — set founder.yearsExperience in content.ts */}
                {founder.yearsExperience && (
                  <p className="text-slate-500 text-xs leading-snug">{founder.yearsExperience}</p>
                )}
                {/* Clinical focus — set founder.clinicalFocus in content.ts */}
                {founder.clinicalFocus && (
                  <p className="text-slate-500 text-xs leading-snug">{founder.clinicalFocus}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right — statement */}
        <div className="flex flex-col justify-start">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-8">
            {founderSection.headline}
          </h2>

          {/* Founder narrative — update founderSection.body in content.ts */}
          <div className="flex flex-col gap-5">
            {founderSection.body.map((para, i) => (
              <p key={i} className="text-slate-700 text-base md:text-lg leading-relaxed">
                {i === 0 ? (
                  <>{para}</>
                ) : (
                  para
                )}
              </p>
            ))}
          </div>

          {/* Mission statement — shown if founder.mission is set in content.ts */}
          {founder.mission && (
            <div className="mt-8 bg-teal-50 border-l-4 border-teal-500 rounded-r-xl px-5 py-4">
              <p className="text-teal-900 text-base italic leading-relaxed">
                "{founder.mission}"
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
