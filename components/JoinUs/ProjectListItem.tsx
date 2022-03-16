import { Project } from '../../data/projects'

interface Props {
  project: Project
}

export default function ProjectListItem({ project }: Props) {
  return (
    <div className="flex h-auto w-full flex-col justify-evenly rounded-md bg-[#c4c4c4] py-5 text-black  lg:flex-row">
      <div className="flex flex-auto items-center justify-start p-5 lg:justify-center">
        <div>
          <p className=" font-Oswald text-4xl leading-normal">
            {project.title}
          </p>
          <p className=" max-w-lg font-Montserrat text-xl">
            {project.description}
          </p>
        </div>
      </div>
      <div className=" flex min-w-[12vw] flex-initial items-center justify-start bg-[#59687a] px-10 text-white lg:-skew-x-12 lg:justify-center">
        <p className="flex flex-col py-4 lg:skew-x-12">
          <span className=" font-Oswald text-lg uppercase">Type</span>
          <span className=" font-Oswald text-2xl uppercase">
            {project.type}
          </span>
        </p>
      </div>

      <div className=" flex min-w-[12vw] flex-initial items-center justify-start bg-slate-400 py-5 px-10 lg:-skew-x-12  lg:justify-center">
        <div className="lg:skew-x-12">
          <p className="pb-2 font-Oswald text-base font-bold uppercase underline underline-offset-2">
            Available Positions
          </p>
          <ul className=" list-disc">
            {project.positions.map((position, index) => (
              <li key={index} className=" font-Montserrat text-sm uppercase">
                {position}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" flex w-full max-w-sm flex-initial items-center justify-start py-5 px-5 lg:justify-center">
        <div>
          <p className="text-left font-Montserrat text-xs font-bold uppercase underline underline-offset-2 lg:text-center ">
            Time commitment
          </p>
          <div className="p-2 text-left lg:text-center">
            <p className="font-Montserrat text-base  ">
              <span className=" font-Oswald text-2xl">
                {project.commitment}
              </span>
              <span className=" font-Oswald text-2xl">
                {project.commitment > 1 ? ' hours' : ' hour'}
              </span>
            </p>
            <p className=" font-Oswald text-lg font-thin uppercase">per week</p>
          </div>
        </div>
      </div>
    </div>
  )
}
