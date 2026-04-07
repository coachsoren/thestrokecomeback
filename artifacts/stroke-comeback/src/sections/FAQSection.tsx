import { useState } from "react";
import { faq } from "@/content";
import { SectionContainer } from "@/components/SectionContainer";
import { ChevronDown } from "lucide-react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-800 group-hover:text-teal-700 transition-colors leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-slate-600 text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <SectionContainer id="faq" background="white" maxWidth="default">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {faq.headline}
        </h2>
      </div>

      <div className="divide-slate-200">
        {faq.items.map((item, i) => (
          <FAQItem key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </SectionContainer>
  );
}
