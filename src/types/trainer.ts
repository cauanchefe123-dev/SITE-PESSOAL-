export interface TrainerProfile {
  name: string;
  title: string;
  cref: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string; // WhatsApp
  instagram: string;
  acceptingNewStudents: boolean;
  yearsExperience: string;
  studentsTrained: string;
  retentionRate: string;
  avatarUrl: string;
}

export interface TrainingService {
  id: string;
  title: string;
  category: 'presencial' | 'online' | 'grupo' | 'avaliacao';
  categoryLabel: string;
  summary: string;
  description: string;
  benefits: string[];
  forWho: string;
  frequency: string;
  image: string;
  pricingHint: string;
}

export interface StudentSuccessStory {
  id: string;
  name: string;
  age: string;
  goal: string;
  result: string;
  timeframe: string;
  testimonial: string;
  serviceType: string;
}

export interface CertificationItem {
  id: string;
  institution: string;
  course: string;
  year: string;
  area: string;
}
