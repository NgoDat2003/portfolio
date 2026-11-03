import { motion } from 'framer-motion'
import SectionTitle from '../components/shared/SectionTitle'

const SKILLS = [
  'TypeScript',
  'React 18/19',
  'Next.js',
  'NestJS',
  'Node.js / Express',
  'Python (Frappe / ERPNext)',
  'PostgreSQL',
  'MongoDB',
  'SQL Server',
  'Prisma / Drizzle / Mongoose',
  'Turborepo',
  'Microsoft Entra ID (MSAL)',
  'TanStack Query',
  'Tailwind CSS',
  'Playwright',
  'Docker',
]

export default function About() {
  return (
    <section id="about" className="px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Về tôi" subtitle="Fullstack cho hệ thống nội bộ" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
        >
          <div className="space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Tôi là <strong className="font-semibold text-ink">Ngô Quốc Đạt</strong>, Fullstack Web Developer. Từ 04/2026 tôi làm hệ thống nội bộ cho một tập đoàn F&B có <span className="marker-highlight font-semibold text-ink">200+ cửa hàng</span>. Các hệ thống tôi làm gồm portal đăng nhập một lần, theo dõi chứng từ SAP, quản lý hợp đồng thuê mặt bằng và website thương hiệu.
            </p>
            <p>
              Phần tôi làm nhiều nhất là API NestJS và màn hình Next.js cho các nghiệp vụ này: đăng nhập Microsoft Entra ID, phiên cookie có xoay vòng token, phân quyền theo role, lịch thanh toán có khóa kỳ và file bút toán cho SAP. Trước đó, tại TADALABS (03/2025 - 03/2026), tôi là thành viên chính của module Inno POS và đóng góp giao diện hộp thư OmniChat trên ERPNext.
            </p>
            <p>
              Tôi thích ngồi với người dùng ở các phòng ban để hiểu nghiệp vụ trước khi viết code, và ưu tiên để số liệu khớp nhau giữa các hệ thống.
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
