import type {
  AchievementItem,
  CodingProfile,
  ExperienceItem,
  NavLink,
  ProjectItem,
  SkillGroup,
  SocialLink,
} from "@/types";

export const FIRST_NAME = "Shriraksha";
export const LAST_NAME = "P Acharya";
export const NAME = `${FIRST_NAME} ${LAST_NAME}`;
export const ROLES = ["Software Engineer", "AI/ML Engineer", "Data Analyst"];

export const STATEMENT = "Turning Ideas Into Impactful Solutions.";

export const TAGLINE =
  "Building scalable software, intelligent AI solutions, and digital experiences that solve real-world problems.";

export const RESUME_URL = "/ShrirakshaResume.pdf";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/acharyaraksha84", icon: "Github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shrirakshapacharya84", icon: "Linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/u/raksha84", icon: "Code2" },
  { label: "Email", href: "mailto:shrirakshapacharya@gmail.com", icon: "Mail" },
];

export const CONTACT_EMAIL = "shrirakshapacharya@gmail.com";
export const LOCATION = "Mangaluru, India";
export const AVAILABILITY = "Open to opportunities";

export const aboutIntro = [
  "I'm a Computer Science (AI & ML) student passionate about building scalable software and intelligent applications that solve real-world problems.",
  "I enjoy working across full-stack development, machine learning, and data analytics, turning ideas into practical products with clean architecture and intuitive user experiences.",
];

export const education = {
  degree: "B.E., Computer Science (AI/ML)",
  institution: "Sahyadri College of Engineering & Management, Mangaluru",
  duration: "2023 — 2027",
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Framer Motion", icon: "motion" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Django", icon: "django" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Scikit-learn", icon: "sklearn" },
      { name: "NLP", icon: "nlp" },
      { name: "Computer Vision", icon: "cv" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Figma", icon: "figma" },
      { name: "Jupyter", icon: "jupyter" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Infotact Solutions , Bengaluru",
    role: "Data Analytics Intern",
    duration: "Aug 2025 — Oct 2025",
    location: "Remote",
    description: [
    "Developed a Multi-Touch Marketing Attribution & ROI Engine using Power BI, DAX, and Power Query to analyze campaign performance across multiple attribution models.",
    "Built a Clinical Trial Monitoring dashboard to track patient recruitment, site performance, and operational metrics through interactive data visualizations.",
    "Worked with Power BI, SQL, Power Query, and data modeling techniques to transform raw datasets into actionable business insights.",
    ],
  },
  {
    company: "AICTE IBM SkillsBuild | BharatCares",
    role: "Gen AI & Cloud Computing Intern",
    duration: "Jun 2026 — Present",
    location: "Remote",
    description: [
      "Selected for an industry-aligned virtual internship focused on Generative AI, cloud computing, prompt engineering, and scalable AI deployment.",
      "Working on hands-on AI projects while gaining practical experience through expert-led masterclasses and cloud-based development workflows.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "LearnWise",
    description:
      "An AI-powered adaptive learning platform featuring personalized assessments, gamified leaderboards, real-time feedback, and progress analytics.",
    image: "/images/learnwise.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "https://github.com/acharyaraksha84/Learnwise",
    demo: "learnwise-xi.vercel.app",
  },
  {
    title: "Multi-Touch Marketing Attribution & ROI Engine",
    description:
      "A Business Intelligence solution that compares multiple attribution models to measure marketing performance and optimize ROI using interactive dashboards.",
    image: "/images/market.png",
    tech: ["Power BI", "DAX", "Power Query", "SQL"],
    github:
      "https://github.com/acharyaraksha84/Multi-Touch-Marketing-Attribution-ROI-Engine",
  },
  {
    title: "Spotify Data Pipeline",
    description:
      "A data engineering pipeline that extracts Spotify playlist data, performs transformations, and automates workflows for scalable analytics.",
    image: "/images/spotify.jpeg",
    tech: ["Python", "Pandas", "Apache Airflow"],
    github: "https://github.com/acharyaraksha84/Spotify_Data_Pipeline",
  },
  {
    title: "Clinical Trial Monitoring",
    description:
      "A centralized analytics dashboard for monitoring multi-site clinical trials, tracking patient recruitment, site performance, and operational efficiency.",
    image: "/images/clinic.png",
    tech: ["Python", "Pandas", "Jupyter Notebook"],
    github: "https://github.com/acharyaraksha84/Clinical-Trial-Monitoring",
  },
  {
    title: "PeerLearn",
    description:
      "An intelligent peer learning platform that streamlines peer collaboration through automated study partner matching and real-time interaction.",
    image: "/images/peer.jpeg",
    tech: ["Java", "MySQL"],
    github: "https://github.com/acharyaraksha84/PeerLearn",
  },
  {
    title: "Multi-Modal Voice Liveness Detection",
    description:
      "An AI-powered voice liveness detection system that distinguishes genuine human speech from AI-generated or spoofed voices using deep learning and vocal biomarkers. (In Progress)",
    image: "/images/voice.png",
    tech: ["Python", "PyTorch", "FastAPI", "React", "Librosa"],
    github:
      "https://github.com/acharyaraksha84/Multi-Modal-Voice-Liveness-Detection",
  },
];


export const achievements: AchievementItem[] = [
  { label: "Projects Shipped", value: 15, suffix: "+", icon: "Layers" },
  { label: "Hackathons Won", value: 3, icon: "Trophy" },
  { label: "DSA Problems Solved", value: 600, suffix: "+", icon: "Braces" },
  { label: "GitHub Contributions", value: 900, suffix: "+", icon: "GitBranch" },
];

export const codingProfiles: CodingProfile[] = [
  { label: "GitHub", href: "https://github.com/acharyaraksha84", icon: "Github", stat: "40+ repositories" },
  { label: "LeetCode", href: "https://leetcode.com/u/raksha84", icon: "Code2", stat: "600+ solved" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shrirakshapacharya84", icon: "Linkedin", stat: "Let's connect" }
];
