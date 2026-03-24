import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center space-x-4 mb-4"
      >
        <div className="h-[1px] w-10 bg-primary/50"></div>
        <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em]">{subtitle || "Selected Work"}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-zinc-100 leading-none tracking-tight"
      >
        {title}<span className="text-primary opacity-80">.</span>
      </motion.h2>
    </div>
  )
}
