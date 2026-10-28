export interface AthleteProfile {
  name: string;
  sport: string;
  category: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  instagram: string;
  strava?: string;
  youtube?: string;
  status: string; // e.g. "Em Temporada Competitiva"
  age: string;
  height: string;
  weight: string;
  coach: string;
  club: string;
  podiumRate: string;
  officialTitles: string;
  weeklyTrainingHours: string;
  avatarUrl: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  competition: string;
  year: string;
  medal: 'gold' | 'silver' | 'bronze' | 'trophy';
  category: string;
  resultTime: string;
  description: string;
  image?: string;
  highlight?: boolean;
}

export interface PersonalRecord {
  id: string;
  discipline: string;
  record: string;
  event: string;
  date: string;
  notes: string;
}

export interface CompetitionEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  category: string;
  status: 'confirmado' | 'alvo_principal' | 'concluido';
  goal: string;
}

export interface SponsorItem {
  id: string;
  name: string;
  tier: 'Master' | 'Oficial' | 'Apoio Técnico';
  category: string;
  description: string;
}
