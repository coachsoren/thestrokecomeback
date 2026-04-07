import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
  maxWidth?: "narrow" | "default" | "wide";
  background?: "white" | "soft" | "slate" | "teal";
}

const maxWidths = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
};

const backgrounds = {
  white: "bg-white",
  soft: "bg-slate-50",
  slate: "bg-slate-100",
  teal: "bg-teal-700",
};

export function SectionContainer({
  id,
  children,
  className = "",
  maxWidth = "default",
  background = "white",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`w-full py-16 md:py-24 px-5 md:px-8 ${backgrounds[background]} ${className}`}
    >
      <div className={`mx-auto w-full ${maxWidths[maxWidth]}`}>{children}</div>
    </section>
  );
}
