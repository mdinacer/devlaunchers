import Projects from '../../data/projects'

export default function ProjectsList() {
  return (
    <div className="h-full w-full py-16">
      <div className="container mx-auto grid grid-flow-row gap-5 ">
        {Projects.map((project) => (
          <div
            key={project.id}
            className="flex h-40 w-full flex-row justify-evenly rounded-md bg-[#c4c4c4]  text-black"
          >
            <div className="flex flex-auto items-center justify-center">
              <div>
                <p className=" font-Oswald text-4xl">{project.title}</p>
                <p className=" max-w-lg font-Montserrat text-xl">
                  {project.description}
                </p>
              </div>
            </div>
            <div className=" flex min-w-[12vw] flex-initial -skew-x-12 items-center justify-center bg-[#59687a] px-10 text-white">
              <p className="flex skew-x-12 flex-col">
                <span className=" font-Oswald text-lg uppercase">Type</span>
                <span className=" font-Oswald text-2xl uppercase">
                  {project.type}
                </span>
              </p>
            </div>

            <div className=" flex min-w-[12vw] flex-initial -skew-x-12 items-center justify-center bg-slate-400  px-10">
              <div className="skew-x-12">
                <p className="pb-2 font-Oswald text-base font-bold uppercase underline underline-offset-2">
                  Available Positions
                </p>
                <ul className=" list-disc">
                  {project.positions.map((position, index) => (
                    <li
                      key={index}
                      className=" font-Montserrat text-sm uppercase"
                    >
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" flex w-full max-w-sm flex-initial items-center justify-center">
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
        ))}
      </div>
    </div>
  )
}
