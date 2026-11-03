import type { ProjectStatus } from '../lib/project-display-helpers';

/** One "challenge → solution" pair shown as a card on the project detail page. */
export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  /** "Kind / Domain"; the part before " / " is the eyebrow label on cards and the detail page. */
  category: string;
  timeline: string;
  /** Explicit status (e.g. 'production' for systems in live use); otherwise derived from `timeline`. */
  status?: ProjectStatus;
  // Optional case-study facts and challenges; entries without them show only category and timeline.
  role?: string;
  client?: string;
  platform?: string;
  team?: string;
  challenges?: ProjectChallenge[];
  desc: string;
  tech: string[];
  github: string;
  github_fe?: string;
  github_be?: string;
  demo: string;
  video?: string;
  /** Note shown under the video explaining how it was recorded. */
  video_note?: string;
  /** Detail-page hero image; also the poster when `video` is set. */
  image: string;
  /** Card thumbnail; falls back to `image` when absent. */
  cover?: string;
  full_description: string;
}
