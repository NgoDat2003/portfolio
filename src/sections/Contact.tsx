import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const email = 'ngodat200319@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
      setTimeout(() => {
        window.location.href = `mailto:${email}?subject=Frontend Developer Opportunity`;
      }, 500);
    }).catch(() => {
      window.location.href = `mailto:${email}?subject=Frontend Developer Opportunity`;
    });
  };

  return (
    <section id="contact" className="py-32 flex flex-col items-center relative overflow-hidden border-t border-white/5 bg-zinc-950/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-zinc-100 mb-8 leading-none tracking-tighter text-center"
      >
        Liên hệ <br className="md:hidden" /><span className="text-gradient">với tôi</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-16 font-normal leading-relaxed text-center px-8"
      >
        Tôi đang tìm kiếm cơ hội Frontend Developer, ưu tiên các sản phẩm web app, dashboard, admin portal và hệ thống quản trị nội bộ.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center gap-6"
      >
        <a
          href="mailto:ngodat200319@gmail.com"
          onClick={handleEmailClick}
          className="px-8 py-4 bg-white text-zinc-950 font-bold text-sm tracking-wide rounded-full hover:scale-[1.02] transition-transform min-w-[200px] flex justify-center items-center gap-2 group"
        >
          {isCopied ? 'Đã copy email' : 'Gửi email'}
        </a>
        <a
          href="https://github.com/NgoDat2003"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 bg-surface text-white font-medium text-sm tracking-wide rounded-full border border-border hover:border-white/20 transition-colors min-w-[200px] flex justify-center items-center"
        >
          GitHub Profile
        </a>
      </motion.div>

      <div className="mt-40 text-zinc-600 text-[10px] font-bold uppercase tracking-widest text-center">
        © 2026 Ngô Quốc Đạt · 0377574337 · Frontend Developer
      </div>
    </section>
  )
}
