
export type ProjectCategory = 'graphic' | 'motion' | 'illustration' | 'photography';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  heroImage: string;
  galleryImages: string[];
}

export type Theme = 'light' | 'dark';
