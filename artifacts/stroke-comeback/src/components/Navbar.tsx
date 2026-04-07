import { useState, useEffect } from "react";
import { BRAND_NAME, THINKIFIC_URL } from "@/content";

const navLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "The Solution", href: "#solution" },
  { label: "Program", href: "#program" },
  { label: "What You Get", href: "#deliverables" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop sticky nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-semibold text-slate-800 text-sm md:text-base tracking-tight leading-tight"
          >
            {BRAND_NAME}
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-slate-600 hover:text-teal-700 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={THINKIFIC_URL}
            className="hidden md:inline-flex items-center justify-center bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Enroll Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-teal-700 hover:bg-slate-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
            <nav className="px-5 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-slate-700 hover:text-teal-700 font-medium py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={THINKIFIC_URL}
                className="mt-2 text-center bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                Enroll Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile sticky bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-3 shadow-lg">
        <a
          href={THINKIFIC_URL}
          className="block w-full text-center bg-teal-700 hover:bg-teal-800 text-white text-base font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-md"
        >
          Enroll Now — $997
        </a>
      </div>
    </>
  );
}
