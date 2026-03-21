import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Oops! Không tìm thấy dự án</h1>
          <Link to="/" className="text-primary hover:underline">Quay lại trang chủ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-32 px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Navigation & Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <Link to="/#projects" className="text-primary hover:text-white transition-colors flex items-center gap-3 font-bold uppercase tracking-widest text-xs group">
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Quay lại trang chủ
          </Link>
          
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mt-12 mb-8 tracking-tighter leading-[0.9]">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-12 pt-8 border-t border-white/5 items-center">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Phân loại</span>
              <p className="text-lg font-bold text-white">{project.category}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Thời gian</span>
              <p className="text-lg font-bold text-white">{project.timeline}</p>
            </div>
            <div className="flex gap-4 items-center pt-2 ml-auto flex-wrap justify-end">
               {project.github_fe || project.github_be ? (
                 <>
                   {project.github_fe && (
                     <a href={project.github_fe} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3 rounded-full bg-white text-slate-950 border border-white hover:scale-105 shadow-xl font-black uppercase tracking-widest text-[10px] transition-all">
                       Source FE <Github size={14} />
                     </a>
                   )}
                   {project.github_be && (
                     <a href={project.github_be} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3 rounded-full bg-white text-slate-950 border border-white hover:scale-105 shadow-xl font-black uppercase tracking-widest text-[10px] transition-all">
                       Source BE <Github size={14} />
                     </a>
                   )}
                 </>
               ) : (
                 <a 
                  href={project.github} 
                  target={project.github === '#' ? '_self' : '_blank'} 
                  rel="noopener noreferrer" 
                  className={`flex items-center gap-3 px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] transition-all border ${project.github === '#' ? 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed' : 'bg-white text-slate-950 border-white hover:scale-105 shadow-xl'}`}
                 >
                   Source Code <Github size={14} />
                 </a>
               )}
               {project.demo !== '#' && (
                 <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 px-8 py-3 rounded-full bg-primary text-white font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg border border-primary"
                 >
                   Live Demo <Globe size={14} />
                 </a>
               )}
            </div>
          </div>
        </motion.div>

        {/* Feature/Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-slate-900 mb-24"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Full Case Study (README style) */}
        <div className="space-y-32">
          {/* Summary Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 text-primary">
              <span className="h-[2px] w-12 bg-primary"></span>
              <span className="uppercase tracking-[0.4em] font-black text-[11px]">Tổng quan dự án</span>
            </div>
            <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed font-medium">
              {project.desc}
            </p>
          </section>

          {/* Structured Content Parser */}
          <div className="space-y-24">
            {project.full_description.split('##').map((section, idx) => {
              if (!section.trim()) return null;
              const [title, ...contentLines] = section.split('\n');
              return (
                <motion.section 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-6 group">
                    <span className="text-primary/20 group-hover:text-primary transition-colors">#</span>
                    {title.replace(/[✨💬🛠🏗📁🔐👤📸🔗]/g, '').trim()}
                    <div className="h-[1px] flex-1 bg-white/5"></div>
                  </h2>
                  <div className="space-y-8 max-w-4xl">
                    {contentLines.map((line, lIdx) => {
                      const trimmedLine = line.trim();
                      if (!trimmedLine) return null;

                      // Images within content
                      if (trimmedLine.startsWith('![')) {
                        const match = trimmedLine.match(/!\[(.*?)\]\((.*?)\)/);
                        if (match) {
                          return (
                            <div key={lIdx} className="my-16 space-y-6">
                              <div className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-slate-900">
                                <img src={match[2]} alt={match[1]} className="w-full h-auto hover:scale-[1.01] transition-transform duration-700" />
                              </div>
                              <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                                {match[1]}
                              </p>
                            </div>
                          );
                        }
                      }

                      // Tables (LMS specific demo accounts / specs)
                      if (trimmedLine.startsWith('|')) {
                        const cells = trimmedLine.split('|').filter(c => c.trim() !== '' || trimmedLine.includes('| '));
                        if (cells.length < 1 || trimmedLine.match(/[|-]{3,}/)) return null;
                        return (
                          <div key={lIdx} className="overflow-x-auto my-10">
                            <table className="w-full border-separate border-spacing-0 rounded-3xl overflow-hidden glass-card border border-white/5">
                              <tbody>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                  {cells.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-10 py-6 border-r last:border-0 border-white/5 text-slate-300 font-medium">
                                      {cell.trim()}
                                    </td>
                                  ))}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        );
                      }

                      // Architecture / Trees
                      if (trimmedLine.startsWith('```') || trimmedLine.includes('┌─') || trimmedLine.includes('│')) {
                        if (trimmedLine === '```text' || trimmedLine === '```') return null;
                        return (
                          <pre key={lIdx} className="p-10 bg-slate-950 rounded-[2rem] border border-white/5 text-primary/80 font-mono text-[14px] leading-relaxed overflow-x-auto my-12 shadow-inner">
                            <code>{trimmedLine}</code>
                          </pre>
                        );
                      }

                      // Sub-headings ###
                      if (trimmedLine.startsWith('###')) {
                        return (
                          <h3 key={lIdx} className="text-2xl font-bold text-white mt-16 mb-4 first:mt-0 flex items-center gap-4">
                            <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(129,140,248,0.5)]"></div>
                            {trimmedLine.replace('###', '').trim()}
                          </h3>
                        );
                      }

                      // Bullet points -
                      if (trimmedLine.startsWith('-')) {
                        return (
                          <div key={lIdx} className="flex items-start gap-6 text-slate-300 text-lg group pl-2">
                            <span className="text-primary mt-3 shrink-0 opacity-40">
                              <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></div>
                            </span>
                            <span className="opacity-90 leading-relaxed font-medium">
                              {trimmedLine.replace('-', '').trim()}
                            </span>
                          </div>
                        );
                      }

                      // Standard Paragraph with Inline support (Shields, etc)
                      return (
                        <p key={lIdx} className="text-slate-400 text-lg leading-relaxed font-normal opacity-70 flex flex-wrap items-center gap-3">
                          {trimmedLine.split(/(!\[.*?\]\(.*?\))/g).map((part, pIdx) => {
                            const match = part.match(/!\[(.*?)\]\((.*?)\)/);
                            if (match) return <img key={pIdx} src={match[2]} alt={match[1]} className="inline-block h-6" />;
                            return <span key={pIdx}>{part}</span>;
                          })}
                        </p>
                      );
                    })}
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
        
        {/* Sign-off */}
        <div className="mt-48 pt-16 border-t border-white/5 flex justify-between items-center opacity-30 text-[10px] font-black uppercase tracking-[0.5em]">
          <span>Project Case Study // Developed by Ngo Dat</span>
          <Link to="/" className="hover:text-primary transition-colors">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
