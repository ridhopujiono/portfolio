import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

function compareProjects(a: Project, b: Project): number {
  const order = a.data.sortOrder - b.data.sortOrder;
  // Entry IDs provide a deterministic tie-breaker independent of locale.
  return order || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}

// Use this helper in every public list and in future getStaticPaths functions.
export async function getPublishedProjects(): Promise<Project[]> {
  const projects = await getCollection(
    'projects',
    ({ data }) => data.publicationStatus === 'published',
  );
  return projects.sort(compareProjects);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getPublishedProjects();
  return projects.filter(({ data }) => data.featured);
}
