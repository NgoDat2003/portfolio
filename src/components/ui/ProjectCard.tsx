import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Github, Globe } from 'lucide-react'
import type { Project } from '../../data/projects'
import { getProjectStatus, isRealLink, splitProjectCategory } from '../../lib/project-display-helpers'
import StatusBadge from './StatusBadge'

const VISIBLE_TECH_COUNT = 4

interface ProjectCardProps {
  project: Project
  index: number
}

/** Project summary card: category + status, thumbnail, title, tech chips and links. */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { kind, domain } = splitProjectCategory(project.category)
  const detailPath = `/project/${project.id}`
  const hiddenTechCount = project.tech.length - VISIBLE_TECH_COUNT
  const sourceLinks = [
    { href: project.github_fe, label: 'FE' },
    { href: project.github_be, label: 'BE' },
  ].filter((link): link is { href: string; label: string } => isRealLink(link.href))
  if (sourceLinks.length === 0 && isRealLink(project.github)) {
    sourceLinks.push({ href: project.github, label: 'Source' })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="sketch-card sketch-card-hover flex flex-col p-5 md:p-6"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">{kind}</span>
        <StatusBadge status={getProjectStatus(project)} />
      </div>
      <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
        {domain && `${domain} · `}{project.timeline}
      </p>

      <Link
        to={detailPath}
        className="mt-5 block aspect-[16/9] overflow-hidden rounded-xl border-2 border-ink bg-card"
        aria-label={`Xem chi tiết ${project.title}`}
        tabIndex={-1}
      >
        <img
          src={project.cover ?? project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
        />
      </Link>

      <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl">
        <Link to={detailPath} className="hover:text-accent-dark">{project.title}</Link>
      </h3>
      <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-ink-soft">{project.desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, VISIBLE_TECH_COUNT).map((tech) => (
          <span key={tech} className="chip">{tech}</span>
        ))}
        {hiddenTechCount > 0 && <span className="chip chip-more">+{hiddenTechCount}</span>}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
        <Link to={detailPath} className="link-wavy inline-flex items-center gap-1.5 text-sm">
          Xem chi tiết <ArrowRight size={15} aria-hidden="true" />
        </Link>
        <div className="ml-auto flex flex-wrap items-center gap-4 text-sm font-medium text-ink-soft">
          {sourceLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink">
              <Github size={15} aria-hidden="true" /> {link.label}
            </a>
          ))}
          {isRealLink(project.demo) && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink">
              <Globe size={15} aria-hidden="true" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
