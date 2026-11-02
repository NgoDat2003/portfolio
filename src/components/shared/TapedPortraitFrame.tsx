import { motion } from 'framer-motion'

interface TapedPortraitFrameProps {
  imageSrc: string
  alt: string
  caption: string
  /** Hand-written note pinned beside the photo. */
  note: string
}

/** Photo taped onto the page like a printed snapshot, with a hand-written caption and note. */
export default function TapedPortraitFrame({ imageSrc, alt, caption, note }: TapedPortraitFrameProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, rotate: 0, y: 16 }}
      animate={{ opacity: 1, rotate: 2, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[250px] sm:w-[290px] lg:w-[330px]"
    >
      {/* Tape strips */}
      <span
        className="absolute -top-3 left-6 z-20 h-7 w-20 -rotate-12 border border-ink/20 bg-pastel-butter/80"
        aria-hidden="true"
      />
      <span
        className="absolute -top-3 right-6 z-20 h-7 w-20 rotate-12 border border-ink/20 bg-pastel-peach/80"
        aria-hidden="true"
      />

      <div className="sketch-card relative z-10 p-3 pb-4">
        <div className="aspect-[4/5] overflow-hidden rounded-xl border-2 border-ink bg-pastel-sky">
          <img src={imageSrc} alt={alt} className="h-full w-full object-cover" />
        </div>
        <figcaption className="mt-3 text-center font-hand text-xl text-ink-soft">{caption}</figcaption>
      </div>

      {/* Sticky note */}
      <div className="absolute -bottom-6 -left-10 z-20 hidden w-36 -rotate-6 rounded-md border-2 border-ink bg-pastel-butter px-3 py-2 font-hand text-lg leading-snug text-ink shadow-sketch-sm sm:block">
        {note}
      </div>
    </motion.figure>
  )
}
