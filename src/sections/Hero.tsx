import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import TapedPortraitFrame from '../components/shared/TapedPortraitFrame'
import { profileContactInfo } from '../data/profile-contact-info'
import HeroStatsStrip from './HeroStatsStrip'

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE_OUT_EXPO },
})

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="px-4 md:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-14 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-3 py-1 text-xs font-semibold text-ink shadow-sketch-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5F8F4E] opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5F8F4E]" />
                </span>
                Đang tìm cơ hội Fullstack Web Developer
              </span>
  
              <p className="mt-8 font-hand text-2xl text-ink-soft md:text-3xl">Xin chào, tôi là Đạt.</p>
              <h1 className="mt-3 font-extrabold tracking-tight text-ink">
                <span className="marker-highlight text-4xl leading-[1.15] sm:text-5xl lg:text-[3.4rem]">Fullstack Web Developer</span>
                <span className="mt-3 block text-2xl leading-snug text-ink-soft sm:text-3xl lg:text-[2.1rem]">
                  xây hệ thống vận hành cho chuỗi 200+ cửa hàng
                </span>
              </h1>
              <p className="mt-5 text-base font-medium text-muted md:text-lg">
                Next.js 15 · NestJS 10 · TypeScript · PostgreSQL
              </p>
            </motion.div>
  
            <motion.p {...fadeUp(0.1)} className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              Kỹ sư Fullstack Web với kinh nghiệm thực chiến phát triển Web Portal doanh nghiệp, Nền tảng quản lý hợp đồng thuê và số hóa quy trình chuỗi F&B 200+ cửa hàng. Chuyên sâu Turborepo, Next.js 15, NestJS, Azure AD SSO và tự động hóa n8n.
            </motion.p>
  
            <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap gap-3">
              <a href={profileContactInfo.cvUrl} download className="btn-ink">
                Tải xuống CV <Download size={16} aria-hidden="true" />
              </a>
              <a href="#projects" className="btn-outline">
                Xem dự án <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
  
          <div className="flex justify-center lg:justify-end">
            <TapedPortraitFrame
              imageSrc="/assets/cv.png"
              alt={`Ảnh chân dung ${profileContactInfo.fullName}`}
              caption={profileContactInfo.fullName}
              note="Contract-first API & Azure AD SSO"
            />
          </div>
        </div>
      </div>

      <HeroStatsStrip />
    </section>
  )
}
