import SectionTitle from '../components/shared/SectionTitle'
import PremiumCard from '../components/ui/PremiumCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle title="Dự án" subtitle="Sản phẩm tiêu biểu" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-16">
          {projects.map((project, index) => (
            <PremiumCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
