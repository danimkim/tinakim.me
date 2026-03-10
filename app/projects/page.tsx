import { getAllProjects } from '@/app/projects/utils'
import { ProjectCard } from '@/app/projects/_components/project-card'

export const metadata = {
  title: 'Projects',
  description: 'A collection of projects I have built',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Projects
      </h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
