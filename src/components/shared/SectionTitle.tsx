import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface SectionTitleProps {
  title: string
  /** Short hand-written line shown above the heading. */
  subtitle?: string
  align?: 'left' | 'center'
}

/** Section heading: hand-written eyebrow, bold title and a coral hand-drawn squiggle. */
export default function SectionTitle({ title, subtitle, align = 'left' }: SectionTitleProps) {
  const centered = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={clsx('mb-10 md:mb-14', centered && 'text-center')}
    >
      {subtitle && <p className="mb-1 font-hand text-xl text-ink-soft md:text-2xl">{subtitle}</p>}
      <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-5xl">{title}</h2>
      <svg
        viewBox="0 0 160 12"
        className={clsx('mt-3 h-3 w-32 text-accent md:w-40', centered && 'mx-auto')}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 7c12-5 22 4 34 0s22-5 34 0 22 4 34 0 22-5 34 0 12 3 20 1"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  )
}
