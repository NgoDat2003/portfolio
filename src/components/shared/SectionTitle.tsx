import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center space-x-4 mb-2"
      >
        <div className="h-[2px] w-12 bg-primary/40"></div>
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{subtitle || "Selected Work"}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-8xl font-display font-extrabold text-white leading-none tracking-tightest"
      >
        {title}<span className="text-primary prose-2xl">.</span>
      </motion.h2>
    </div>
  )
}
