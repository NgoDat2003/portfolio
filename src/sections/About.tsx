import { motion } from 'framer-motion'
import SectionTitle from '../components/shared/SectionTitle'

export default function About() {
  const skills = [
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

  return (
    <section id="about" className="py-24 px-8 md:px-16 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle title="Về tôi" subtitle="Fullstack, Web Portal & Số hóa vận hành doanh nghiệp" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-16 lg:gap-24"
        >
          <div className="flex-1 text-zinc-400 text-lg md:text-xl leading-relaxed space-y-8 font-normal">
            <p>
              Tôi là <span className="text-zinc-100 font-semibold">Ngô Quốc Đạt</span>, Fullstack Web Developer có kinh nghiệm thực chiến trong phát triển Web Portal doanh nghiệp, Nền tảng quản lý hợp đồng thuê và số hóa quy trình vận hành chuỗi bán lẻ F&B (<span className="text-primary font-medium">300+ cửa hàng</span>).
            </p>
            <p>
              Thế mạnh cốt lõi là thiết kế kiến trúc Monorepo (Turborepo), Contract-First API, phân quyền doanh nghiệp (Microsoft Entra ID / Azure AD SSO, Cookie-based JWT Token Rotation), mô phỏng tài chính (Dry-run addendum engine, Period-locking) và tự động hóa giám sát dữ liệu bán lẻ (iPOS → SAP Business One).
            </p>
            <p>
              Tôi tập trung vào tính toàn vẹn dữ liệu, hiệu năng hệ thống và trải nghiệm vận hành trơn tru giữa các phòng ban khối văn phòng và chuỗi cửa hàng.
            </p>
          </div>
          <div className="flex-1 lg:pl-12">
            <h3 className="text-sm font-bold mb-8 text-zinc-100 uppercase tracking-widest flex items-center gap-4">
              Tech Stack
              <div className="h-px bg-white/10 flex-1"></div>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="px-5 py-2.5 bg-surface border border-white/[0.04] hover:border-white/20 hover:bg-surface/80 rounded-full text-xs font-semibold tracking-wider text-zinc-400 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
