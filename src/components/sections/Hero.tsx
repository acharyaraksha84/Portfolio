import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FIRST_NAME, LAST_NAME, TAGLINE, RESUME_URL } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";

const easeOut = [0.16, 1, 0.3, 1] as const;

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[400px]">
      {/* soft backdrop circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="absolute inset-0 m-auto h-[92%] w-[92%] rounded-full bg-white/[0.04] blur-[2px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: easeOut }}
        className="absolute inset-0 m-auto h-[78%] w-[78%] rounded-full border border-border"
      />

      {/* portrait cutout — replace with real grayscale photo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: easeOut }}
        className="relative z-10 aspect-[3/4] w-full"
      >
        <div className="relative h-full w-full overflow-hidden rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-[#3a3a3a] to-[#0e0e0e]">
          <div className="absolute inset-0 bg-portrait-vignette" />
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              <br />
                <img
                  src="/portrait.jpg"
                  alt="Shriraksha P Acharya"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-fade-bottom" />
        </div>
      </motion.div>

      {/* small decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -right-3 top-6 md:-right-6 flex h-14 w-14 items-center justify-center rounded-full border border-border glass"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24"
    >
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,black,transparent)]" />

      <div className="container-custom relative grid lg:grid-cols-[1.15fr_0.9fr_0.7fr] gap-10 items-center">
        {/* LEFT — large typography */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-eyebrow mb-6"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-hero font-bold text-white text-balance">
            <motion.span
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
              className="block"
            >
              {FIRST_NAME}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.22, ease: easeOut }}
              className="block text-accent"
            >
              {LAST_NAME}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-col gap-1 text-sm tracking-[0.15em] uppercase text-text-muted"
          >
            <span>Software Engineer</span>
            <span>AI/ML Engineer</span>
            <span>Data Analyst</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-sm text-[15px] text-text-muted leading-relaxed"
          >
            {TAGLINE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View Work
            </MagneticButton>
            <MagneticButton href={RESUME_URL} variant="secondary">
              Resume
            </MagneticButton>
          </motion.div>
        </div>

        {/* CENTER — portrait */}
        <div className="order-first lg:order-none">
          <Portrait />
        </div>

        {/* RIGHT — minimal role description */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
          className="hidden lg:flex flex-col items-end text-right gap-6"
        >
          <div>
            <p className="text-2xl font-semibold text-white leading-tight">
              Building
              <br />
              Scalable Solutions
            </p>

            <p className="mt-2 text-sm text-text-muted tracking-wide">
              Software • AI/ML • Data
            </p>
          </div>
          <a
            href="#about"
            aria-label="Scroll to about"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-border-hover hover:bg-white/[0.03] transition-colors"
          >
            <ArrowUpRight size={17} className="text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
