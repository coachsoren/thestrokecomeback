import { founderSection, founder } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";

export function FounderSection() {
  return (
    <SectionContainer id="founder" background="soft" maxWidth="default">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {founderSection.headline}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Founder photo / placeholder
            =============================================
            TO ADD A REAL PHOTO:
            1. Place the image in artifacts/stroke-comeback/public/images/founder.jpg
            2. Uncomment the <img> tag below and remove the placeholder div
            3. Update founder.headshotSrc in content.ts
            ============================================= */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          {/* Placeholder — replace with <img src={founder.headshotSrc} alt={founder.headshotAlt} ... /> */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 border-4 border-white shadow-md flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 text-teal-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="50" cy="38" r="18" />
              <path d="M18 88 C18 68 82 68 82 88" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="flex-1">
          {/* Founder details
              =============================================
              TO UPDATE FOUNDER CREDENTIALS:
              Edit the `founder` object in src/content.ts:
              - founder.name
              - founder.title
              - founder.qualifications
              - founder.background
              ============================================= */}
          <div className="mb-5">
            {/* Founder name — update in content.ts */}
            <p className="font-bold text-slate-900 text-lg">{founder.name}</p>
            {/* Founder title — update in content.ts */}
            <p className="text-teal-700 text-sm font-medium">{founder.title}</p>
            {/* Optional qualifications — update in content.ts */}
            {founder.qualifications && (
              <p className="text-slate-500 text-sm mt-0.5">{founder.qualifications}</p>
            )}
            {/* Optional background — update in content.ts */}
            {founder.background && (
              <p className="text-slate-500 text-sm">{founder.background}</p>
            )}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-teal-300 mb-5" />

          {/* Founder statement */}
          <div className="flex flex-col gap-4">
            {founderSection.body.map((para, i) => (
              <p key={i} className="text-slate-700 text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
