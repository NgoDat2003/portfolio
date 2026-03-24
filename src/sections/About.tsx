import SectionTitle from '../components/shared/SectionTitle'
import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    'React 18', 'TypeScript', 'Zustand', 'TanStack Query', 
    'Tailwind CSS v3', 'Radix UI', 'Framer Motion', 
    'Node.js', 'PostgreSQL'
  ]

  return (
    <section id="about" className="py-24 px-8 md:px-16 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle title="Về tôi" subtitle="Hành trình và Bộ kỹ năng" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-16 lg:gap-24"
        >
          <div className="flex-1 text-zinc-400 text-lg md:text-xl leading-relaxed space-y-8 font-normal">
            <p>
              Chào bạn, tôi là <span className="text-zinc-100 font-semibold">Quốc Đạt</span> – Frontend Engineer chuyên xây dựng các ứng dụng web với <span className="text-zinc-200 font-medium">kiến trúc mở rộng</span> và <span className="text-zinc-200 font-medium">hiệu năng tĩnh</span>.
            </p>
            <p>
              Với kinh nghiệm thực chiến phát triển hệ sinh thái POS thời gian thực (Real-time) và các nền tảng quản lý giáo dục, tôi luôn ưu tiên <span className="text-primary italic">User Experience</span> và <span className="text-primary italic">Clean Code</span> trong mọi tính năng.
            </p>
            <p>
              Tôi không chỉ viết mã tĩnh, tôi giải quyết các bài toán kỹ thuật thực tế bằng bộ công cụ hiện đại nhất để tối ưu hóa quy trình vận hành cho doanh nghiệp.
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
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
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
