import { Project } from '../../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-md bg-[#c4c4c4] py-5">
      <p className=" py-5 text-center font-Montserrat text-xs font-bold uppercase text-black">{`${project.type} Platform`}</p>
      <div className="min-h-[12vh] -translate-x-3 -translate-y-3 rounded-md bg-[#59687a] px-5 py-3 pl-7 text-white drop-shadow-md">
        {/* <p className=" font-Montserrat text-xs uppercase">{`${project.type} Platform`}</p> */}
        <p className=" font-Oswald text-3xl">{project.title}</p>
        <p className=" max-w-md flex-auto py-2 font-Montserrat text-sm font-normal">
          {project.description}
        </p>
      </div>

      <div className=" grid  flex-initial grid-cols-2 grid-rows-1 text-black">
        <div className="mx-auto">
          <p className="pb-2 font-Montserrat text-xs font-bold uppercase underline underline-offset-2">
            Available Positions:
          </p>
          <ul className=" list-disc">
            {project.positions.map((position, index) => (
              <li key={index} className=" font-Montserrat text-sm uppercase">
                {position}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-center font-Montserrat text-xs font-bold uppercase underline underline-offset-2 ">
            Time commitment
          </p>
          <div className="p-2">
            <p className=" text-center font-Montserrat text-base ">
              <span className=" font-Oswald text-2xl">
                {project.commitment}
              </span>
              <span className=" font-Oswald text-2xl">
                {project.commitment > 1 ? ' hours' : ' hour'}
              </span>
            </p>
            <p className="text-center font-Oswald text-lg font-thin uppercase">
              per week
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
