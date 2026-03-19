import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-24 bg-background text-center flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-9xl font-display font-extrabold text-white mb-10 leading-none tracking-tighter"
      >
        Hãy cùng <span className="text-primary">Hợp tác</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-300 text-xl md:text-2xl max-w-2xl mb-16 font-medium leading-relaxed"
      >
        Hiện tại mình đang mở tìm kiếm cơ hội làm việc Full-time cho vị trí Frontend Developer. Đừng ngại liên hệ qua Email hoặc LinkedIn nhé!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-8"
      >
        <a href="mailto:ngodat200319@gmail.com" className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-all shadow-[0_15px_30px_rgba(129,140,248,0.3)]">
          Gửi Email
        </a>
        <a href="https://github.com/NgoDat2003" target="_blank" rel="noreferrer" className="px-12 py-5 glass-card text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white/10 transition-all">
          GitHub Profile
        </a>
      </motion.div>

      <div className="mt-40 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
        © 2026 Ngô Quốc Đạt (0377574337). Thiết kế tối giản & Hiệu năng cao.
      </div>
    </section>
  )
}
