export interface ProfessorProfile {
  name: string;
  lastName?: string;
  nickname?: string;
  topBadge?: string;
  heroLine1?: string;
  heroLine2?: string;
  modalities?: string;
  belt: string; // e.g. "Faixa Preta 2º Grau (IBJJF / CBJJ)"
  beltRank: string; // "Black Belt 2nd Degree"
  lineage?: string;
  tagline: string;
  bio: string;
  location: string;
  academyName: string;
  email: string;
  whatsapp: string;
  instagram: string;
  youtube?: string;
  ibjjfRegistered: boolean;
  cbjjRegistered: boolean;
  status: string; // "Vagas Abertas para Personal & Novos Alunos"
  yearsTraining: number;
  activeStudents: number;
  podiumsCount: number;
  avatarUrl: string;
  heroBackgroundUrl?: string;
}

export interface BJJService {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  format: string;
  duration: string;
  targetAudience: string;
  description: string;
  scope?: string;
  methodology?: string;
  highlights: string[];
  priceHint: string;
  image: string;
}

export interface ScheduleItem {
  id: string;
  days: string;
  time: string;
  classType: string;
  level: string;
  coach: string;
  mat: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  category: string;
  division: string;
  year: string;
  location: string;
  medal: 'gold' | 'silver' | 'bronze';
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  beltLevel?: string;
  text: string;
  experienceType: 'Personal Fight' | 'Turma Regular' | 'Kids' | 'Competição';
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Iniciantes' | 'Personal Fight' | 'Equipamentos' | 'Metodologia' | 'Horários & Agenda';
}
