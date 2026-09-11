export interface StackColumn {
  title: string
  items: string[]
}

export interface ExperienceItem {
  date: string
  role: string
  org: string
  description: string
}

export interface ProjectItem {
  tag: string
  name: string
  description: string
  url?: string
}

export interface EducationStat {
  label: string
  value: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export const stackColumns: StackColumn[] = [
  {
    title: 'Frontend',
    items: [
      'React & component-driven UI',
      'Responsive, accessible layouts',
      'State management',
      'Performance & accessibility',
    ],
  },
  {
    title: 'Backend',
    items: [
      'REST & API design',
      'Databases & data modelling',
      'Authentication & authorization',
      'Server-side logic',
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      'Deployment & CI/CD',
      'Cloud hosting',
      'Monitoring & logging',
      'Version control workflows',
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    date: 'Current',
    role: 'Full Stack Developer Intern',
    org: 'Codveda Technologies',
    description:
      'Working across the stack on client projects — building interfaces, APIs and the infrastructure that connects them.',
  },
  {
    date: 'Previous',
    role: 'Frontend Developer Intern',
    org: 'CodeAlpha',
    description:
      'Built and shipped responsive frontend features, translating designs into working, accessible interfaces.',
  },
]

export const featuredProject: ProjectItem = {
  tag: 'Featured',
  name: 'CiviFix AI',
  description:
    'A civic-tech platform for reporting and resolving city infrastructure issues — potholes, broken streetlights, waste collection — and routing them automatically to the right department. (Replace this with your real project description.)',
  url: '#',
}

export const otherProjects: ProjectItem[] = [
  {
    tag: 'Project',
    name: 'Another project',
    description: 'Add a short description of what this project does and what you used to build it.',
  },
  {
    tag: 'Project',
    name: 'Another project',
    description: 'Add a short description of what this project does and what you used to build it.',
  },
]

export const educationStats: EducationStat[] = [
  { label: 'Current level', value: 'Year 3' },
  { label: 'GPA', value: '3.67 / 4.00' },
  { label: 'Expected', value: '2028' },
]

export const contactLinks: ContactLink[] = [
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: '#' },
  { label: 'GitHub', value: 'github.com/yourname', href: '#' },
]

export const navSections = [
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
