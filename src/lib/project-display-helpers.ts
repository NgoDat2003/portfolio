// Presentation helpers that derive display values from existing Project fields,
// so the data file does not need extra fields for badges and labels.

export type ProjectStatus = 'in-progress' | 'completed';

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  'in-progress': 'Đang phát triển',
  completed: 'Hoàn thành',
};

/** A timeline ending in "Present" / "Hiện tại" means the project is still active. */
export function getProjectStatus(timeline: string): ProjectStatus {
  return /present|hiện tại/i.test(timeline) ? 'in-progress' : 'completed';
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
