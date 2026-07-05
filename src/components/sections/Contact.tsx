import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Check, Copy, ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL, socialLinks } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-text-muted hover:border-border-hover hover:text-white transition-colors"
    >
      {copied ? (
        <>
          <Check size={13} /> Copied
        </>
      ) : (
        <>
          <Copy size={13} /> Copy email
        </>
      )}
    </button>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="label-eyebrow">05</span>
                <span className="h-px w-10 bg-border-hover" />
                <span className="label-eyebrow">Contact</span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-hero font-bold text-white text-balance">
                Let's build
                <br />
                something.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-8 max-w-sm text-text-muted text-[15px] leading-relaxed">
                Open to internships, full-time roles, and collaborations worth
                the time. Reach out — I read everything.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="text-sm text-white">{CONTACT_EMAIL}</span>
                <CopyEmailButton />
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8 flex items-center gap-3">
                {socialLinks
                  .filter((s) => s.icon === "Github" || s.icon === "Linkedin")
                  .map((social) => {
                    const Icon = social.icon === "Github" ? Github : Linkedin;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted hover:text-white hover:border-border-hover transition-colors"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-7 md:p-9"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-text-muted mb-2 tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full border-b border-border bg-transparent pb-3 text-sm text-white placeholder:text-text-muted/50 focus:border-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-text-muted mb-2 tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full border-b border-border bg-transparent pb-3 text-sm text-white placeholder:text-text-muted/50 focus:border-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-text-muted mb-2 tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about the role or project..."
                    className="w-full resize-none border-b border-border bg-transparent pb-3 text-sm text-white placeholder:text-text-muted/50 focus:border-white outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <MagneticButton
                  variant="primary"
                  icon={<ArrowUpRight size={15} />}
                  className="!px-6"
                >
                  {submitted ? "Sent" : "Send Message"}
                </MagneticButton>
                {submitted && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs text-text-muted"
                  >
                    Thanks — I'll reply soon.
                  </motion.span>
                )}
              </div>
              <p className="mt-5 text-[11px] text-text-muted">
                UI demo — connect this to Formspree, Resend, or your backend.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
