import SectionTitle from '../components/shared/SectionTitle'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Dự án" subtitle="Sản phẩm tiêu biểu" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
