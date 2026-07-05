import { motion } from "framer-motion";
import { skillGroups } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function initialsFor(name: string) {
  const clean = name.replace(/[^a-zA-Z0-9 ]/g, "");
  const parts = clean.split(" ").filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return clean.slice(0, 2).toUpperCase();
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="Tools I build with."
        />

        <div className="mt-16 space-y-10">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <Reveal delay={gi * 0.05}>
                <h3 className="label-eyebrow mb-4">{group.category}</h3>
              </Reveal>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: si * 0.03 }}
                    whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.24)" }}
                    className="flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 cursor-default"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] font-mono text-[9px] font-semibold text-white">
                      {initialsFor(skill.name)}
                    </span>
                    <span className="text-sm text-text-muted">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
