import { motion } from 'framer-motion'
import { useState, type MouseEvent } from 'react'
import { Download, Github, Mail } from 'lucide-react'
import { profileContactInfo } from '../data/profile-contact-info'

const MAIL_SUBJECT = 'Fullstack Developer Opportunity'

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false)
  const { email, phone, githubUrl, cvUrl } = profileContactInfo
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(MAIL_SUBJECT)}`

  // Copy the address first (handy when no mail client is set up), then open the mail client.
  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 3000)
        setTimeout(() => {
          window.location.href = mailtoUrl
        }, 500)
      })
      .catch(() => {
        window.location.href = mailtoUrl
      })
  }

  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl rounded-3xl border-2 border-dashed border-ink bg-card px-6 py-12 text-center md:px-14 md:py-16"
      >
        <p className="font-hand text-xl text-ink-soft md:text-2xl">Bạn đang tuyển Fullstack Developer?</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">Liên hệ với tôi</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          Tôi đang tìm kiếm cơ hội Fullstack Web Developer, ưu tiên các sản phẩm web app, dashboard, admin portal và hệ thống quản trị nội bộ.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={mailtoUrl} onClick={handleEmailClick} className="btn-ink min-w-[180px]" aria-live="polite">
            <Mail size={16} aria-hidden="true" />
            {isCopied ? 'Đã copy email' : 'Gửi email'}
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-outline min-w-[180px]">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a href={cvUrl} download className="btn-outline min-w-[180px]">
            <Download size={16} aria-hidden="true" /> Tải CV
          </a>
        </div>

        <p className="mt-8 text-sm text-muted">
          {email} · {phone}
        </p>
      </motion.div>
    </section>
  )
}
