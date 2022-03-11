export interface Work {
  id?: number | string;
  title: string;
  titleKor: string;
  subtitle?: string;
  description?: string;
  url?: string;
  heroImages?: string[];
  thumbnails?: string[];
  prizes?: string[];
  ranks?: string[];
  workSummary?: string;
  workDetail?: string;
  period?: string;
  releaseDate?: string;
  copyright?: string;
  client?: string;
  category: WorkCategory;
}

export enum WorkCategory {
  PROJECT = 'project',
}
