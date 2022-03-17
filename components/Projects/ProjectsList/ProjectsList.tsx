import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function ProjectsList() {
  const ref = useRef(null)
  return (
    <div
      className="overflow-y-auto overflow-x-hidden lg:max-h-[70vh]"
      ref={ref}
    >
      <div className="grid grid-flow-row gap-5 px-2 lg:px-10">
        {Array.from(Array(25).keys()).map((item, index) => (
          <motion.div
            key={index}
            className=" flex h-auto w-auto flex-col  overflow-hidden rounded-[10px] bg-gray-300 sm:translate-x-[0] lg:flex-row lg:rounded-[40px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            animate={{}}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ fallback: true }}
          >
            <div className="flex h-full w-full items-center justify-center p-5 lg:w-[50%]">
              <div className=" w-full lg:max-w-xl">
                <p className=" text-4xl font-bold">Project Name</p>
                <p className=" text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt corporis, optio porro, blanditiis repellat voluptas
                  dicta ducimus sunt numquam, aspernatur aperiam similique.
                </p>
              </div>
            </div>
            <div className="flex h-full flex-col items-center justify-center gap-y-5 bg-gray-400 bg-opacity-50 p-5 lg:w-[15%] ">
              <p className=" text-lg font-bold">Type</p>
              <p className=" text-xl">Idea - Platform</p>
            </div>
            <div className="flex h-full w-full items-center justify-self-center bg-gray-400 bg-opacity-20 p-5 lg:w-[20%] ">
              <div className="mx-auto w-auto">
                <p className="pb-5 text-lg font-bold">
                  Positions Available / Level
                </p>

                <ul className=" list-disc pl-5">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item}>{`Position ${item} - Advanced`}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center gap-y-5  p-5 lg:w-[15%]  ">
              <p className=" text-lg font-bold">Time Commitment</p>
              <p className=" text-xl">3-5 hrs/week</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
