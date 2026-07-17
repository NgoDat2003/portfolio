import { Link, useParams } from 'react-router-dom';
import { Github, Globe, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

function renderContent(markdown: string) {
  return markdown
    .trim()
    .split('\n')
    .map((line, index) => {
      const value = line.trim();
      if (!value) return null;

      if (value.startsWith('## ')) {
        return (
          <h2 key={index} className="mt-12 mb-5 text-3xl font-display font-bold text-white">
            {value.replace('## ', '')}
          </h2>
        );
      }

      if (value.startsWith('- ')) {
        return (
          <div key={index} className="mb-3 flex gap-4 text-zinc-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span className="leading-relaxed">{value.replace('- ', '')}</span>
          </div>
        );
      }

      if (value.startsWith('![')) {
        const match = value.match(/!\[(.*?)\]\((.*?)\)/);
        if (!match) return null;
        return (
          <figure key={index} className="my-10 overflow-hidden rounded-3xl border border-white/10 bg-surface">
            <img src={match[2]} alt={match[1]} className="w-full object-cover" />
            <figcaption className="border-t border-white/10 px-5 py-3 text-xs uppercase tracking-widest text-zinc-500">
              {match[1]}
            </figcaption>
          </figure>
        );
      }

      if (value.startsWith('|')) {
        return null;
      }

      return (
        <p key={index} className="mb-5 text-lg leading-relaxed text-zinc-400">
          {value}
        </p>
      );
    });
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Không tìm thấy dự án</h1>
          <Link to="/" className="text-primary hover:underline">Quay lại trang chủ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-8 py-32 overflow-x-hidden">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-14"
        >
          <Link to="/#projects" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-white">
            <span className="transition-transform group-hover:-translate-x-2">←</span>
            Quay lại trang chủ
          </Link>

          <h1 className="mt-12 mb-8 text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-[0.95]">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Phân loại</span>
              <p className="mt-1 text-lg font-bold text-white">{project.category}</p>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Thời gian</span>
              <p className="mt-1 text-lg font-bold text-white">{project.timeline}</p>
            </div>
            <div className="ml-auto flex flex-wrap gap-3">
              {project.github_fe && (
                <a href={project.github_fe} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-950 transition-transform hover:scale-105">
                  FE Source <Github size={14} />
                </a>
              )}
              {project.github_be && (
                <a href={project.github_be} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-950 transition-transform hover:scale-105">
                  BE Source <Github size={14} />
                </a>
              )}
              {!project.github_fe && !project.github_be && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-950 transition-transform hover:scale-105">
                  Source <Github size={14} />
                </a>
              )}
              {project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-transform hover:scale-105">
                  Live Demo <Globe size={14} />
                </a>
              )}
              {project.video && (
                <a href={project.video} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-transform hover:scale-105">
                  E2E Video <PlayCircle size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16 aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl"
        >
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              className="h-full w-full object-cover"
              controls
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          )}
        </motion.div>

        <section className="rounded-[2rem] border border-white/10 bg-surface/40 p-8 md:p-10">
          <div className="mb-10 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
          <p className="mb-8 text-2xl leading-relaxed text-zinc-300">{project.desc}</p>
          <div className="space-y-1">{renderContent(project.full_description)}</div>
        </section>
      </div>
    </div>
  );
}
