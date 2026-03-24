import { motion } from 'framer-motion'
import GlowingAvatar from '../components/shared/GlowingAvatar'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 bg-grid-white px-8 md:px-16 lg:px-24 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 space-y-10 w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center space-x-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-surface/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-muted font-medium tracking-wide text-xs uppercase">Sẵn sàng cho dự án mới</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold text-white leading-[0.9] tracking-tighter mb-6">
            QUOC <br /> 
            <span className="text-gradient">DAT</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted font-sans font-medium tracking-tight">
            Kỹ sư Frontend <span className="mx-3 text-white/5">|</span> Chuyên gia Hiện đại hóa Hệ thống
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl font-normal"
        >
          Tôi tập trung vào việc <b className="text-zinc-200 font-semibold">Tái thiết kế hệ thống</b> — chuyển đổi các kiến trúc legacy thành các hệ sinh thái web hiện đại, hiệu năng cao và dễ dàng mở rộng.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a 
            href="/src/assest/file/NgoQuocDat_Frontend_Developer_CV.pdf" 
            download 
            className="px-8 py-4 bg-white text-zinc-950 font-bold text-sm rounded-full hover:scale-[1.02] transition-transform flex items-center gap-2 group"
          >
            Tải xuống CV
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a 
            href="#projects" 
            className="px-8 py-4 bg-surface text-white font-medium text-sm rounded-full border border-border hover:border-border-hover transition-colors flex items-center gap-2 group"
          >
            Xem dự án
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="flex-none hidden lg:block relative z-10 w-[450px]">
        {/* Simplified glowing avatar implementation for premium feel */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <GlowingAvatar imageSrc="/assets/cv.png" />
        </div>
      </div>
    </div>
    </section>
  )
}
