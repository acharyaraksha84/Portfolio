import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";

function ProjectVisual({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-[#111]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}
export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          index="02"
          eyebrow="Selected Work"
          title="A few things I've shipped end-to-end."
          description="Full-stack products and applied machine-learning systems — chosen for depth, not volume."
        />

        <div className="mt-20 space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <motion.div
                whileHover="hover"
                className="group relative rounded-3xl border border-border bg-bg-secondary/40 p-6 md:p-8 hover:border-border-hover transition-colors"
              >
                <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-center">
                  <div className="overflow-hidden rounded-2xl">
                    <ProjectVisual
                      title={project.title}
                      image={project.image}
                    />
                  </div>

                  <div>
                    <span className="label-eyebrow">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white text-balance">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-text-muted text-[15px] leading-relaxed max-w-md">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Chip key={tech}>{tech}</Chip>
                      ))}
                    </div>
                    <div className="mt-7 flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-white hover:border-border-hover hover:-translate-y-0.5 transition-all"
                        >
                          <Github size={15} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-bg hover:-translate-y-0.5 transition-transform"
                        >
                          Live Demo <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
