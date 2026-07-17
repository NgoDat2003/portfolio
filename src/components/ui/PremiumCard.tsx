import { motion } from 'framer-motion'
import { MouseEvent, useRef } from 'react'
import { Link } from 'react-router-dom'

export interface Project {
  id: string;
  title: string;
  category: string;
  timeline: string;
  desc: string;
  tech_detail: string;
  deploy_note: string;
  achievements: string[];
  tech: string[];
  github: string;
  github_fe?: string;
  github_be?: string;
  demo: string;
  video?: string;
  image: string;
  images?: string[];
  full_description: string;
}

interface PremiumCardProps {
  project: Project;
  index: number;
}

export default function PremiumCard({ project, index }: PremiumCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group block premium-card spotlight-card p-8 md:p-10 relative overflow-hidden"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-10 relative border border-white/[0.05] bg-zinc-900/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover origin-bottom transition-transform duration-700 ease-out group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-6 right-6 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase text-zinc-300 tracking-wider shadow-xl">
          {project.timeline}
        </div>
      </div>

      <div className="space-y-8 relative z-20">
        <div className="flex justify-between items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">{project.category}</span>
          <div className="flex flex-wrap gap-3 justify-end">
            {project.tech.slice(0, 3).map((t: string) => (
              <span key={t} className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-base leading-relaxed font-normal line-clamp-2">
            {project.desc}
          </p>
        </div>

        <div className="pt-8 flex flex-wrap gap-4 items-center border-t border-border">
          <Link
            to={`/project/${project.id}`}
            className="px-6 py-2.5 bg-white text-zinc-950 font-medium text-sm rounded-full hover:scale-[1.02] transition-transform flex items-center gap-2"
          >
            <span>Chi tiết</span>
            <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <div className="flex flex-wrap gap-4 ml-auto">
            {project.github_fe && (
              <a href={project.github_fe} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                FE Github
              </a>
            )}
            {project.github_be && (
              <a href={project.github_be} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                BE Github
              </a>
            )}
            {!project.github_fe && !project.github_be && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-0.5">
                Github
              </a>
            )}
            {project.demo !== '#' && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-indigo-300 transition-colors border-b border-transparent hover:border-primary/50 pb-0.5 ml-2">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
