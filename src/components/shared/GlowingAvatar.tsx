import { motion } from 'framer-motion'

export default function GlowingAvatar({ imageSrc }: { imageSrc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-20 md:mt-0 group"
    >
      {/* Subtle background glow */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-white/5 to-white/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Main Container */}
      <div className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] rounded-[2rem] overflow-hidden bg-zinc-900 z-10 p-1.5 border border-white/[0.08] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="w-full h-full rounded-[1.75rem] overflow-hidden relative grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 bg-zinc-950">
          <img 
            src={imageSrc} 
            alt="Avatar" 
            className="w-full h-full object-cover rounded-[1.75rem] transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
        </div>
      </div>
    </motion.div>
  )
}
