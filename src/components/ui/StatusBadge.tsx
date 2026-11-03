import { clsx } from 'clsx'
import { PROJECT_STATUS_LABEL, type ProjectStatus } from '../../lib/project-display-helpers'

const STATUS_STYLES: Record<ProjectStatus, { pill: string; dot: string }> = {
  'in-progress': { pill: 'bg-pastel-butter', dot: 'bg-accent' },
  production: { pill: 'bg-pastel-sky', dot: 'bg-[#2F6690]' },
  completed: { pill: 'bg-pastel-sage', dot: 'bg-[#5F8F4E]' },
}

/** Pastel pill showing whether a project is in progress, in live use, or finished. */
export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const styles = STATUS_STYLES[status]
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border border-ink px-2.5 py-0.5 text-xs font-semibold text-ink',
        styles.pill,
      )}
    >
      <span className={clsx('h-1.5 w-1.5 rounded-full', styles.dot)} aria-hidden="true" />
      {PROJECT_STATUS_LABEL[status]}
    </span>
  )
}
