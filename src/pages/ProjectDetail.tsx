import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github, Globe, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import StatusBadge from '../components/ui/StatusBadge';
import { getProjectStatus, isRealLink, splitProjectCategory } from '../lib/project-display-helpers';

/** Minimal renderer for the subset of markdown used in `full_description`. */
function renderContent(markdown: string) {
  return markdown
    .trim()
    .split('\n')
    .map((line, index) => {
      const value = line.trim();
      if (!value) return null;

      if (value.startsWith('## ')) {
        return (
          <h2 key={index} className="mb-4 mt-10 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            {value.replace('## ', '')}
          </h2>
        );
      }

      if (value.startsWith('- ')) {
        return (
          <div key={index} className="mb-3 flex gap-3 text-ink-soft">
            <span className="mt-0.5 shrink-0 font-bold text-accent" aria-hidden="true">→</span>
            <span className="leading-relaxed">{value.replace('- ', '')}</span>
          </div>
        );
      }

      if (value.startsWith('![')) {
        const match = value.match(/!\[(.*?)\]\((.*?)\)/);
        if (!match) return null;
        return (
          <figure key={index} className="my-10 overflow-hidden rounded-2xl border-2 border-ink bg-card shadow-sketch-sm">
            <img src={match[2]} alt={match[1]} className="w-full object-cover" />
            <figcaption className="border-t-2 border-ink px-5 py-3 font-hand text-lg text-ink-soft">
              {match[1]}
            </figcaption>
          </figure>
        );
      }

      if (value.startsWith('|')) {
        return null;
      }

      return (
        <p key={index} className="mb-5 text-base leading-relaxed text-ink-soft md:text-lg">
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
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-ink md:text-4xl">Không tìm thấy dự án</h1>
          <Link to="/" className="link-wavy">Quay lại trang chủ</Link>
        </div>
      </div>
    );
  }

  const { kind, domain } = splitProjectCategory(project.category);
  const sourceLinks = [
    { href: project.github_fe, label: 'FE Source' },
    { href: project.github_be, label: 'BE Source' },
  ].filter((link): link is { href: string; label: string } => isRealLink(link.href));
  if (sourceLinks.length === 0 && isRealLink(project.github)) {
    sourceLinks.push({ href: project.github, label: 'Source' });
  }

  return (
    <div className="px-4 pb-16 pt-10 md:px-8 md:pt-14">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link to="/#projects" className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Quay lại danh sách dự án
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">{kind}</span>
            <StatusBadge status={getProjectStatus(project.timeline)} />
          </div>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-6xl">
            {project.title}
          </h1>

          <div className="mt-8 flex flex-col gap-6 border-t-2 border-ink pt-6 md:flex-row md:items-center">
            <dl className="flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Phân loại</dt>
                <dd className="mt-1 text-base font-semibold text-ink">{domain || kind}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Thời gian</dt>
                <dd className="mt-1 text-base font-semibold text-ink">{project.timeline}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3 md:ml-auto">
              {sourceLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-ink px-5 py-2.5">
                  {link.label} <Github size={15} aria-hidden="true" />
                </a>
              ))}
              {isRealLink(project.demo) && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-2.5">
                  Live Demo <Globe size={15} aria-hidden="true" />
                </a>
              )}
              {project.video && (
                <a href={project.video} target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-2.5">
                  E2E Video <PlayCircle size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-6 aspect-video overflow-hidden rounded-2xl border-2 border-ink bg-ink shadow-sketch"
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

        {project.video && (
          <div className="mb-12 rounded-2xl border-2 border-ink bg-pastel-butter p-5 text-sm leading-relaxed text-ink-soft">
            <p className="mb-1 font-hand text-xl text-ink">Automated E2E happy-flow</p>
            <p>
              Video này được sinh từ Playwright E2E test, không phải quay tay. Flow mô phỏng người dùng thật đi qua các vai trò QAM, QC và SM: tạo audit plan, QC thực hiện checklist và upload evidence, SM xử lý Action Plan, sau đó QAM kiểm tra và đóng AP.
            </p>
          </div>
        )}

        <section className="sketch-card mt-10 p-6 md:p-10">
          <div className="mb-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </div>
          <p className="mb-6 text-xl leading-relaxed text-ink md:text-2xl">{project.desc}</p>
          {/* No space-y here: it would override each heading's own top margin. */}
          <div>{renderContent(project.full_description)}</div>
        </section>
      </div>
    </div>
  );
}
