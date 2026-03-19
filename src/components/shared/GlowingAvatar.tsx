import { motion } from 'framer-motion'

export default function GlowingAvatar({ imageSrc }: { imageSrc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mt-20 md:mt-0"
    >
      <div className="absolute inset-0 rounded-full border-4 border-primary/50 shadow-[0_0_50px_rgba(255,0,255,0.4)] animate-pulse"></div>
      <div className="absolute inset-2 rounded-full border-2 border-primary shadow-[0_0_30px_rgba(255,0,255,0.8)]"></div>
      
      <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-gray-900 z-10 p-2">
        <img 
          src={imageSrc} 
          alt="Avatar" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </motion.div>
  )
}
