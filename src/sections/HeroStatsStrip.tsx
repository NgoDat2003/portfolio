import { projects } from '../data/projects'

// Every figure here is also stated on a project page (src/data/project-entries) or in Experience.tsx.
const STATS = [
  { value: '200+', label: 'cửa hàng thuộc tập đoàn F&B nơi tôi làm hệ thống nội bộ' },
  { value: '100+', label: 'hợp đồng thuê mặt bằng trên hệ thống QLHD tôi phát triển chính' },
  { value: `${projects.length}`, label: 'dự án có trang chi tiết trong portfolio' },
  { value: '1-2 giờ/ngày', label: 'ước tính tiết kiệm khi rà soát chứng từ SAP với Master Board' },
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
