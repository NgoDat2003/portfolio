import SectionTitle from '../components/shared/SectionTitle'
import { motion } from 'framer-motion'

export default function About() {
  const skills = ['ReactJS', 'TypeScript', 'Zustand', 'TanStack Query', 'Tailwind CSS', 'Radix UI', 'Redux', 'NodeJS/Express', 'MongoDB/SQL']

  return (
    <section id="about" className="py-24 px-8 md:px-24 bg-background">
      <SectionTitle title="Về tôi" subtitle="Hành trình và Bộ kỹ năng" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-20"
      >
        <div className="flex-1 text-slate-300 text-xl leading-relaxed space-y-6 font-medium">
          <p>
            Chào bạn, tôi là <span className="text-white font-bold">Quốc Đạt</span> – Frontend Developer chuyên xây dựng các ứng dụng web phức tạp với khả năng tối ưu hiệu năng cao.
          </p>
          <p>
            Với kinh nghiệm thực chiến phát triển hệ thống POS thời gian thực (Real-time) và đạt điểm cao cho đồ án tốt nghiệp, tôi luôn ưu tiên <span className="text-primary italic">User Experience</span> và <span className="text-primary italic">Clean Architecture</span> trong mọi dòng code.
          </p>
          <p>
            Tôi không chỉ viết code, tôi giải quyết các bài toán kỹ thuật thực tế bằng bộ công cụ hiện đại nhất để tạo ra giá trị bền vững cho doanh nghiệp.
          </p>
        </div>
        <div className="flex-1 lg:pl-12">
          <h3 className="text-2xl font-display font-extrabold mb-8 text-white uppercase tracking-wider">Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-6 py-3 glass-card rounded-full text-sm font-black uppercase tracking-widest text-slate-400 hover:text-white hover:border-primary/50 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
