import SectionTitle from '../components/shared/SectionTitle'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-24 bg-background">
      <SectionTitle title="Dự án" subtitle="Sản phẩm tiêu biểu" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block glass-card rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all p-10 md:p-12"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[2rem] mb-12 relative shadow-2xl border border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-primary/30 text-[11px] font-black uppercase text-primary tracking-[0.2em] shadow-2xl">
                {project.timeline}
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex justify-between items-center">
                <span className="text-[12px] uppercase tracking-[0.3em] font-black text-primary">{project.category}</span>
                <div className="flex flex-wrap gap-4 justify-end">
                  {project.tech.map(t => (
                    <span key={t} className="text-[11px] text-slate-400 font-bold uppercase tracking-widest opacity-60">{t}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-none tracking-tighter group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
                  {project.desc}
                </p>
              </div>

              <div className="p-8 bg-slate-950/40 rounded-3xl border border-white/[0.05] shadow-inner">
                <div className="space-y-2">
                  <span className="text-[12px] uppercase font-black text-primary/80 tracking-[0.2em] block">Công nghệ & Giải pháp:</span>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {project.tech_detail}
                  </p>
                </div>
              </div>

              <div className="pt-12 flex flex-wrap gap-4 md:gap-6 items-center border-t border-white/10">
                <Link
                  to={`/project/${project.id}`}
                  className="px-8 py-3.5 bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 text-white font-bold uppercase tracking-widest text-[11px] rounded-full hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group/btn cursor-pointer"
                >
                  <span>Mô tả chi tiết</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                {project.github_fe || project.github_be ? (
                  <>
                    {project.github_fe && (
                      <a
                        href={project.github_fe}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-white border border-transparent hover:border-white/10 rounded-full transition-all flex items-center gap-2 group/link cursor-pointer"
                      >
                        Github FE <span className="text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                      </a>
                    )}
                    {project.github_be && (
                      <a
                        href={project.github_be}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-white border border-transparent hover:border-white/10 rounded-full transition-all flex items-center gap-2 group/link cursor-pointer"
                      >
                        Github BE <span className="text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                      </a>
                    )}
                  </>
                ) : project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-white border border-transparent hover:border-white/10 rounded-full transition-all flex items-center gap-2 group/link cursor-pointer"
                  >
                    Github <span className="text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                  </a>
                )}
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-white border border-transparent hover:border-white/10 rounded-full transition-all flex items-center gap-2 group/link cursor-pointer"
                  >
                    Demo <span className="text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
