import { THINKIFIC_URL } from "@/content";

interface CTAButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  fullWidth?: boolean;
}

export function CTAButton({
  label,
  variant = "primary",
  className = "",
  fullWidth = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white px-9 py-4 text-base shadow-lg hover:shadow-xl tracking-wide",
    secondary:
      "bg-white hover:bg-slate-50 active:bg-slate-100 text-teal-700 border-2 border-teal-600 hover:border-teal-700 px-9 py-4 text-base",
    outline:
      "bg-transparent hover:bg-white/10 active:bg-white/20 text-white border-2 border-white/70 hover:border-white px-9 py-4 text-base",
  };

  return (
    <a
      href={THINKIFIC_URL}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {label}
    </a>
  );
}
