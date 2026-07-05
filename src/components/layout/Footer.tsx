import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { NAME, socialLinks } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
  Code2,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-custom py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs tracking-wide text-text-muted">
          © {year} {NAME}
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon] ?? Github;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted hover:text-white hover:border-border-hover transition-colors"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
