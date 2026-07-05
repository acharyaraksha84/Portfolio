import { GraduationCap, MapPin, CircleCheck } from "lucide-react";
import { aboutIntro, education, LOCATION, AVAILABILITY } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative -mt-16 md:-mt-24 z-20 pb-28 md:pb-40">
      <div className="container-custom">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-14 shadow-soft-lg">
            <div className="grid lg:grid-cols-[0.9fr_0.8fr_0.9fr] gap-12">
              {/* LEFT — heading + statement */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="label-eyebrow">01</span>
                  <span className="h-px w-10 bg-border-hover" />
                  <span className="label-eyebrow">About</span>
                </div>
                <p className="text-2xl md:text-[2rem] font-semibold leading-[1.15] text-white text-balance">
                  Turning Ideas Into
                  <br />
                  Impactful Solutions.
                </p>
              </div>

              {/* MIDDLE — intro */}
              <div className="flex flex-col justify-center gap-4">
                {aboutIntro.map((p, i) => (
                  <p key={i} className="text-text-muted text-[15px] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* RIGHT — info cards */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl border border-border p-5 flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-white">
                    <GraduationCap size={15} />
                  </span>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Education</p>
                    <p className="text-sm text-white">{education.degree}</p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {education.institution} · {education.duration}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border p-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-white">
                    <MapPin size={15} />
                  </span>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Location</p>
                    <p className="text-sm text-white">{LOCATION}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border p-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-white">
                    <CircleCheck size={15} />
                  </span>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">Availability</p>
                    <p className="text-sm text-white">{AVAILABILITY}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
