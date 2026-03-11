import type { Project } from '@/app/projects/_lib/data';
import { projects } from '@/app/projects/_lib/data';

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
