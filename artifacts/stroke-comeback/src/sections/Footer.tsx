import { BRAND_NAME, CONTACT_EMAIL, THINKIFIC_URL, disclaimer } from "@/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-white">
      {/* Disclaimer */}
      <div className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-8">
          <p className="text-slate-400 text-sm leading-relaxed text-center max-w-3xl mx-auto">
            <span className="font-semibold text-slate-300">Medical Disclaimer: </span>
            {disclaimer}
          </p>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            {/*
              =============================================
              DOMAIN CONFIGURATION
              Once you connect a custom domain, this will serve as the canonical brand.
              The site can be connected to a custom domain via your Replit project settings.
              =============================================
            */}
            <p className="font-semibold text-white text-base mb-1">{BRAND_NAME}</p>
            <p className="text-slate-400 text-sm">Structured recovery. Real progress.</p>
          </div>

          {/* Links */}
          <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a
              href={THINKIFIC_URL}
              className="text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium"
            >
              Enroll in the Program
            </a>
            {/* Contact email — update CONTACT_EMAIL in content.ts */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {year} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Not a substitute for medical care or professional rehabilitation.
          </p>
        </div>
      </div>
    </footer>
  );
}
