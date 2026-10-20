export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  availableForWork: boolean;
  yearsOfExperience: string;
  projectsCompleted: string;
  satisfactionRate: string;
  avatarUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'webapp' | 'ecommerce' | 'design_system' | 'mobile';
  categoryLabel: string;
  year: string;
  summary: string;
  fullDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  client: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  items: {
    name: string;
    level: string; // e.g. "Avançado", "Especialista"
    description: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  project: string;
}
