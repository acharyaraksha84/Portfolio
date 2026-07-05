export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export interface AchievementItem {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface CodingProfile {
  label: string;
  href: string;
  icon: string;
  stat: string;
}
