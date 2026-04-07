import { useState } from "react";
import { faq } from "@/content";
import { CONTACT_EMAIL } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { Plus, Minus } from "lucide-react";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        open ? "border-teal-200 bg-teal-50/40" : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-5 px-6 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span
            className={`text-xs font-bold tabular-nums flex-shrink-0 mt-0.5 transition-colors ${
              open ? "text-teal-600" : "text-slate-300"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-base font-semibold leading-snug transition-colors ${
              open ? "text-teal-800" : "text-slate-800 group-hover:text-slate-900"
            }`}
          >
            {question}
          </span>
        </div>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-colors ${
            open ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-400"
          }`}
        >
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 pl-[3.75rem]">
          <p className="text-slate-700 text-base leading-[1.75] border-t border-teal-100 pt-4">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <SectionContainer id="faq" background="soft" maxWidth="default">
      <div className="text-center mb-3">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {faq.headline}
        </h2>
        <p className="text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          {faq.intro}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-teal-700 hover:text-teal-800 underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        {faq.items.map((item, i) => (
          <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
}
