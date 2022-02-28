import Projects from '../../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsCards() {
  return (
    <div className="h-auto w-full bg-slate-700 py-10">
      <div className="container mx-auto">
        <div className="grid grid-flow-row grid-cols-1 gap-y-5 gap-x-10 lg:grid-cols-3 lg:grid-rows-1">
          {Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
