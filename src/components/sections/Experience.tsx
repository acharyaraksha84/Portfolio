import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-bg-secondary/30">
      <div className="container-custom">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Where I've worked."
        />

        <div className="mt-20 relative max-w-3xl">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-14">
            {experience.map((item, i) => (
              <motion.div
                key={item.company + item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-white" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs text-text-muted">
                    {item.duration}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-text-muted">
                  <span>{item.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {item.location}
                  </span>
                </div>
                <ul className="space-y-2 max-w-2xl">
                  {item.description.map((point, pi) => (
                    <li
                      key={pi}
                      className="flex items-start gap-2.5 text-sm text-text-muted leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-text-muted shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
