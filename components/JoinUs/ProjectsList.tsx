import Projects from '../../data/projects'
import ProjectListItem from './ProjectListItem'
import ProjectsFilters from './ProjectsFilters'

export default function ProjectsList() {
  return (
    <div className="h-full w-full py-16">
      <ProjectsFilters />
      <div className="container mx-auto grid grid-flow-row gap-5 ">
        {Projects.map((project) => (
          <ProjectListItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
