export interface StackColumn {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  date: string;
  role: string;
  org: string;
  description: string;
}

export interface ProjectItem {
  tag: string;
  name: string;
  description: string;
  techStack?: string;
  aiFeatures?: string;
  githubUrl?: string;
}

export interface EducationStat {
  label: string;
  value: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export const stackColumns: StackColumn[] = [
  {
    title: "Frontend",
    items: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Tools & Data",
    items: [
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "GitHub Actions",
      "Vercel",
      "Railway",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    date: "Current",
    role: "Full Stack Developer Intern",
    org: "Codveda Technologies",
    description:
      "Working across the stack on client projects — building interfaces, APIs and the infrastructure that connects them.",
  },
  {
    date: "Previous",
    role: "Frontend Developer Intern",
    org: "CodeAlpha",
    description:
      "Built and shipped responsive frontend features, translating designs into working, accessible interfaces.",
  },
];

export const featuredProject: ProjectItem = {
  tag: "Completed",
  name: "CiviFix AI",
  description:
    "CivicFix AI is a full-stack platform that helps citizens report and track community problems. It connects citizens with local authorities through reports, images, locations, interactive maps, notifications, and an analytics dashboard.",
  techStack:
    "React.js · Tailwind CSS · Node.js · Express.js · Prisma · PostgreSQL ",
  aiFeatures:
    "AI-assisted report writing, report analysis, responsible department recommendations, natural-language report search, and intelligent civic issue management.",
  githubUrl: "https://civic-fix-ai-five.vercel.app/",
};

export const otherProjects: ProjectItem[] = [
  {
    tag: "In Development",
    name: "Electronic Sales and Purchases Recording System",
    description:
      "Electronic Sales and Purchases Recording System is a full-stack web application designed to replace paper-based sales records with a centralized digital system. It allows employees to record sales transactions quickly, while giving administrators complete visibility into business transactions and sales performance. The system supports multiple employees and an administrator. Employees can create and view their transactions, while the administrator can manage transactions, employees, searches, reports, and system settings.  Key features include transaction recording, automatic quantity and price calculations, automatic date and time tracking, transaction history, search and filtering, employee-based sales reports, daily/weekly/monthly sales analytics, and print/PDF-ready transaction records.",
    techStack:
      "The system uses React.js, Node.js, Express.js, TypeScript, Prisma, and PostgreSQL, with JWT authentication and role-based access control.",
  },
];

export const educationStats: EducationStat[] = [
  { label: "Current level", value: "Year 3" },
  { label: "GPA", value: "3.00 / 3.67" },
  { label: "Expected", value: "2028" },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "apdulaahiaadam@gmail.com",
    href: "mailto:apdulaahiaadam@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Abdullahi-Aden-Abdi",
    href: "https://www.linkedin.com/in/abdullahi-aden-abdi/",
  },
  {
    label: "GitHub",
    value: "Abdullahi-Suugani",
    href: "https://github.com/Abdullahi-Suugani",
  },
];

export const navSections = [
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
