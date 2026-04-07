import { deliverables } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { THINKIFIC_URL } from "@/content";
import { Video, Headphones, FileText, Users, Phone, Mail, PlayCircle, Infinity } from "lucide-react";

const itemIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "12 weekly live group calls": Users,
  "Personalised onboarding call": Phone,
  "Email support throughout": Mail,
  "Video lessons for every module": Video,
  "Audio lessons for flexible learning": Headphones,
  "Worksheets and PDF guides": FileText,
  "Recorded sessions — all 12 weeks": PlayCircle,
  "Lifelong access to all materials": Infinity,
};

function getIcon(title: string) {
  for (const key of Object.keys(itemIcons)) {
    if (title.startsWith(key.substring(0, 10))) {
      return itemIcons[key];
    }
  }
  return null;
}

const groupColors: Record<string, string> = {
  "Live Support": "bg-teal-50 border-teal-200",
  "Core Content": "bg-blue-50 border-blue-200",
  "Ongoing Access": "bg-slate-50 border-slate-200",
};

const groupLabelColors: Record<string, string> = {
  "Live Support": "text-teal-700 bg-teal-100",
  "Core Content": "text-blue-700 bg-blue-100",
  "Ongoing Access": "text-slate-600 bg-slate-200",
};

export function DeliverablesSection() {
  return (
    <SectionContainer id="deliverables" background="white" maxWidth="wide">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {deliverables.headline}
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          {deliverables.intro}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {deliverables.groups.map((group) => (
          <div
            key={group.label}
            className={`rounded-2xl border p-6 ${groupColors[group.label] ?? "bg-slate-50 border-slate-200"}`}
          >
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-5 ${groupLabelColors[group.label] ?? "text-slate-600 bg-slate-200"}`}
            >
              {group.label}
            </span>
            <div className="flex flex-col gap-5">
              {group.items.map((item, j) => {
                const Icon = Object.entries(itemIcons).find(([k]) =>
                  item.title.toLowerCase().includes(k.toLowerCase().split(" ").slice(0, 3).join(" "))
                )?.[1];
                return (
                  <div key={j} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm mt-0.5">
                      {Icon ? (
                        <Icon className="w-4 h-4 text-teal-600" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 leading-snug mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Price + CTA panel */}
      <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-2xl p-8 md:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-300 mb-2">
              Investment
            </p>
            <p className="text-5xl font-bold text-white mb-1">{deliverables.price}</p>
            <p className="text-teal-200 text-sm mb-3">{deliverables.priceNote}</p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              {deliverables.guarantee}
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-64">
            <a
              href={THINKIFIC_URL}
              className="w-full text-center bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg text-base"
            >
              Enroll Now
            </a>
            <a
              href={THINKIFIC_URL}
              className="w-full text-center bg-transparent hover:bg-white/10 text-white/80 hover:text-white border border-white/25 hover:border-white/50 font-medium px-8 py-3.5 rounded-lg transition-all text-sm"
            >
              See Full Program Details
            </a>
            <p className="text-slate-500 text-xs text-center">Lifelong access. No recurring fees.</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
