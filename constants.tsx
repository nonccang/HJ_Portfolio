
import { Project } from './types';

const createProjects = (count: number, category: 'graphic' | 'motion', prefix: string): Project[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} Work 0${i + 1}`,
    category,
    description: `This project explores the intersection of form and function. Designed with a meticulous attention to detail, it represents a deep dive into ${prefix} storytelling. We focused on creating a visual language that resonates with the audience while pushing technical boundaries.`,
    heroImage: `https://picsum.photos/id/${10 + (prefix === 'motion' ? 20 : 0) + i}/1200/800`,
    galleryImages: [
      `https://picsum.photos/id/${50 + i}/800/600`,
      `https://picsum.photos/id/${60 + i}/800/1000`,
      `https://picsum.photos/id/${70 + i}/1000/800`,
      `https://picsum.photos/id/${80 + i}/800/800`,
      `https://picsum.photos/id/${90 + i}/1200/800`,
    ]
  }));
};

export const GRAPHIC_WORKS = createProjects(12, 'graphic', 'graphic');
export const MOTION_WORKS = createProjects(5, 'motion', 'motion');

export const ILLUSTRATIONS = Array.from({ length: 15 }).map((_, i) => 
  `https://picsum.photos/id/${150 + i}/${Math.random() > 0.5 ? 800 : 600}/${Math.random() > 0.5 ? 600 : 800}`
);

export const PHOTOGRAPHY = Array.from({ length: 12 }).map((_, i) => 
  `https://picsum.photos/id/${200 + i}/${Math.random() > 0.5 ? 1200 : 800}/${Math.random() > 0.5 ? 800 : 1200}`
);
