import { motion } from 'framer-motion'
import SectionTitle from '../components/shared/SectionTitle'

export default function About() {
  const skills = [
    'React.js',
    'Next.js',
    'TypeScript',
    'TanStack Query',
    'Zustand',
    'React Hook Form',
    'Zod',
    'Tailwind CSS',
    'REST API',
    'Playwright',
    'Vitest',
    'PostgreSQL',
  ]

  return (
    <section id="about" className="py-24 px-8 md:px-16 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle title="Về tôi" subtitle="Frontend, dashboard và hệ thống nội bộ" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-16 lg:gap-24"
        >
          <div className="flex-1 text-zinc-400 text-lg md:text-xl leading-relaxed space-y-8 font-normal">
            <p>
              Tôi là <span className="text-zinc-100 font-semibold">Ngô Quốc Đạt</span>, Junior Frontend Developer có kinh nghiệm xây dựng giao diện React/TypeScript cho POS, dashboard và các workflow quản trị nội bộ.
            </p>
            <p>
              Điểm mạnh hiện tại của tôi là xử lý form nghiệp vụ, bảng dữ liệu, tích hợp REST API, quản lý server state và kiểm thử các luồng quan trọng bằng Playwright/Vitest.
            </p>
            <p>
              Tôi đang phát triển theo hướng Frontend Developer có khả năng hiểu nghiệp vụ, phối hợp backend/API và triển khai các màn hình quản trị có dữ liệu thật.
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
