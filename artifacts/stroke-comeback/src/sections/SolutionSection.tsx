import { solution } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import {
  Brain,
  Activity,
  Moon,
  Wind,
  Heart,
  TrendingUp,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Activity,
  Moon,
  Wind,
  Heart,
  TrendingUp,
};

export function SolutionSection() {
  return (
    <SectionContainer id="solution" background="white" maxWidth="wide">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
          {solution.headline}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {solution.body}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {solution.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon];
          return (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                {Icon && <Icon className="w-5 h-5 text-teal-700" />}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
