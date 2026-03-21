import { motion } from 'framer-motion'
import GlowingAvatar from '../components/shared/GlowingAvatar'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-24 overflow-hidden pt-32 pb-16">
      {/* Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="flex-1 space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(129,140,248,0.5)]"></div>
            <span className="text-primary font-black tracking-[0.4em] uppercase text-[11px] opacity-80">Sẵn sàng cho các dự án mới</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-display font-extrabold text-white leading-[0.8] tracking-tighter mb-8 uppercase">
            QUOC <br /> <span className="text-primary">DAT</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-sans font-semibold tracking-tight">
            Kỹ sư Frontend <span className="mx-3 text-white/10">|</span> Chuyên gia Hiện đại hóa Hệ thống
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
        >
          Tôi tập trung vào việc <b>Tái thiết kế hệ thống</b> — chuyển đổi các kiến trúc legacy thành các hệ sinh thái web hiện đại, hiệu năng cao và có khả năng mở rộng vượt trội.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-6"
        >
          <a href="/src/assest/file/NgoQuocDat_Frontend_Developer_CV.pdf" download className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-all shadow-[0_15px_30px_rgba(129,140,248,0.3)]">
            Tải xuống CV
          </a>
          <a href="#projects" className="px-12 py-5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white/5 transition-all">
            Xem dự án
          </a>
        </motion.div>
      </div>

      <div className="flex-none hidden lg:block scale-110">
        <GlowingAvatar imageSrc="/src/assets/cv.png" />
      </div>
    </section>
  )
}
