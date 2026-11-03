// Presentation helpers that derive display values from Project fields.

export type ProjectStatus = 'in-progress' | 'production' | 'completed';

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  'in-progress': 'Đang phát triển',
  production: 'Đang vận hành',
  completed: 'Hoàn thành',
};

/** An explicit `status` wins; otherwise a timeline ending in "Present" / "Hiện tại" means still in progress. */
export function getProjectStatus(project: { timeline: string; status?: ProjectStatus }): ProjectStatus {
  if (project.status) return project.status;
  return /present|hiện tại/i.test(project.timeline) ? 'in-progress' : 'completed';
}

/** "Full-stack Platform / Quality Assurance" -> { kind: "Full-stack Platform", domain: "Quality Assurance" } */
export function splitProjectCategory(category: string): { kind: string; domain: string } {
  const [kind, ...rest] = category.split(' / ');
  return { kind: kind.trim(), domain: rest.join(' / ').trim() };
}

/** Project links use "#" as the "not available" placeholder. */
export function isRealLink(url?: string): url is string {
  return Boolean(url) && url !== '#';
}
