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
    "CivicFix AI is a full-stack community problem reporting platform that connects citizens with local authorities to make reporting and resolving public infrastructure issues easier. Citizens can submit reports with descriptions, images, categories, locations, and priorities, then track the progress of their reports through different status stages.\n\nThe platform includes secure authentication, role-based access control, interactive maps, report management, comments, notifications, search and filtering, and an administrative dashboard with analytics. It is designed to help authorities organize community reports, identify problem areas, monitor resolution progress, and make better decisions using data.",
  techStack:
    "React.js · Tailwind CSS · Node.js · Express.js · Prisma · PostgreSQL · Leaflet · OpenStreetMap · Recharts · JWT · bcrypt",
  aiFeatures:
    "AI-assisted report writing, report analysis, responsible department recommendations, natural-language report search, and intelligent civic issue management.",
  githubUrl: "https://civic-fix-ai-five.vercel.app/",
};

// export const otherProjects: ProjectItem[] = [
//   {
//     tag: "Project",
//     name: "Another project",
//     description:
//       "Add a short description of what this project does and what you used to build it.",
//   },
//   {
//     tag: "Project",
//     name: "Another project",
//     description:
//       "Add a short description of what this project does and what you used to build it.",
//   },
// ];

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
