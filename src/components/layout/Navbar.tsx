import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, NAME, RESUME_URL } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="container-custom">
        <div
          className={`relative flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass border border-border shadow-soft" : "border border-transparent"
          }`}
        >
          <a href="#hero" className="text-sm font-semibold tracking-tight text-white">
            S.P.A
          </a>

          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] tracking-wide transition-colors ${
                    isActive ? "text-white" : "text-text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <a
            href={RESUME_URL}
            className="hidden md:inline-flex items-center rounded-full border border-border px-5 py-2 text-[13px] font-medium text-white hover:border-border-hover hover:bg-white/[0.03] transition-colors"
          >
            Resume
          </a>

          <button
            className="md:hidden flex h-9 w-9 items-center justify-center text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="container-custom mt-2">
              <div className="glass border border-border rounded-3xl p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-text-muted hover:bg-white/[0.04] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={RESUME_URL}
                  className="mt-1 rounded-xl px-4 py-3 text-sm font-medium text-white hover:bg-white/[0.04] transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span className="sr-only">{NAME}</span>
    </header>
  );
}
