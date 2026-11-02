import { projects } from '../data/projects'

// Every figure here comes from content already published in projects.ts / Experience.tsx.
const STATS = [
  { value: '200+', label: 'cửa hàng F&B kết nối qua Web Portal' },
  { value: '100+', label: 'hợp đồng thuê mặt bằng được số hóa' },
  { value: `${projects.length}`, label: 'dự án tiêu biểu trong portfolio' },
  { value: 'iPOS → SAP B1', label: 'luồng đối soát tự động bằng n8n' },
]

/** Bordered band of key numbers shown right under the hero. */
export default function HeroStatsStrip() {
  return (
    <div className="border-y-2 border-ink bg-card px-4 md:px-8">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={[
              'py-6 pr-4 md:py-8',
              index % 2 === 1 ? 'pl-4 md:pl-6' : '',
              index >= 2 ? 'border-t border-ink/15 md:border-t-0' : '',
              index > 0 ? 'md:border-l md:border-ink/15 md:pl-6' : '',
            ].join(' ')}
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-xl font-bold tracking-tight text-ink md:text-2xl">{stat.value}</dd>
            <dd className="mt-1 text-sm leading-snug text-ink-soft">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
