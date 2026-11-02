import { motion } from 'framer-motion'
import SectionTitle from '../components/shared/SectionTitle'

const SKILLS = [
  'TypeScript',
  'Next.js 15',
  'React 18/19',
  'NestJS 10',
  'Node.js / Express',
  'PostgreSQL',
  'Prisma / Drizzle ORM',
  'Turborepo',
  'Azure AD SSO (MSAL)',
  'TanStack Query',
  'Tailwind CSS',
  'Playwright E2E',
  'n8n Automation',
  'Docker',
]

export default function About() {
  return (
    <section id="about" className="px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Về tôi" subtitle="Fullstack, Web Portal & số hóa vận hành" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
        >
          <div className="space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Tôi là <strong className="font-semibold text-ink">Ngô Quốc Đạt</strong>, Fullstack Web Developer có kinh nghiệm thực chiến trong phát triển Web Portal doanh nghiệp, Nền tảng quản lý hợp đồng thuê và số hóa quy trình vận hành chuỗi bán lẻ F&B (<span className="marker-highlight font-semibold text-ink">200+ cửa hàng</span>).
            </p>
            <p>
              Thế mạnh cốt lõi là thiết kế kiến trúc Monorepo (Turborepo), Contract-First API, phân quyền doanh nghiệp (Microsoft Entra ID / Azure AD SSO, Cookie-based JWT Token Rotation), mô phỏng tài chính (Dry-run addendum engine, Period-locking) và tự động hóa giám sát dữ liệu bán lẻ (iPOS → SAP Business One).
            </p>
            <p>
              Tôi tập trung vào tính toàn vẹn dữ liệu, hiệu năng hệ thống và trải nghiệm vận hành trơn tru giữa các phòng ban khối văn phòng và chuỗi cửa hàng.
            </p>
          </div>

          <div className="sketch-card h-fit p-6 md:p-8">
            <h3 className="font-hand text-2xl text-ink">Tech stack</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
