import {
  ArrowCircleRightIcon,
  ClipboardCheckIcon,
  XCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { AnimatePresence, motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useState } from 'react'
import ProjectsFilters from '../components/Filtering'
import IdeaCardsList from '../components/IdeasSection/IdeaCards'
import IdeaSectionHeader from '../components/IdeasSection/SectionHeader'
import Layout from '../components/Layout'
import ProjectsList from '../components/Projects/ProjectsList'

const Home: NextPage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  return (
    <Layout title="Home" description="Join Us">
      <div className=" h-full min-h-screen w-screen bg-[#454D58] pt-20 text-black">
        <div className="py-10">
          <IdeaSectionHeader />

          <IdeaCardsList />

          <div className="relative flex select-none items-center justify-center bg-slate-300 p-5">
            <div className=" grid grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                <motion.div
                  layoutId={`Item${index}`}
                  onClick={() => {
                    setSelectedId(null)
                    setSelectedId(`Item${index}`)
                  }}
                  key={index}
                  className=" h-80 w-80 cursor-pointer overflow-hidden rounded-md drop-shadow-md odd:bg-[#3a7ca5] odd:text-white even:bg-[#ff7f0e]"
                >
                  <motion.div className="flex h-10 w-full items-center justify-center bg-gradient-to-br ">
                    <p className="font-Oswald text-xl font-thin">
                      {index % 2 === 0 ? 'PRODUCT' : 'IDEA'}
                    </p>
                  </motion.div>
                  <motion.div className="h-full bg-slate-100 p-5 text-black">
                    <motion.p className=" font-Oswald text-4xl font-thin leading-normal">
                      First Project
                    </motion.p>
                    <motion.p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt labore atque, a quidem similique velit.
                    </motion.p>
                    <div className="flex flex-col items-center justify-center pt-5">
                      <p className=" font-Oswald text-4xl font-thin leading-normal">
                        {index + 2}
                      </p>
                      <p className=" font-Montserrat text-xl font-thin">
                        Available positions
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedId && (
                <motion.div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-30">
                  <motion.div
                    layoutId={selectedId}
                    className="relative  w-full max-w-lg  overflow-hidden rounded-md bg-slate-100 drop-shadow-lg"
                  >
                    <motion.div className="p-5">
                      <motion.p className=" font-Oswald text-4xl font-thin uppercase leading-normal">
                        Project Title
                      </motion.p>
                      <motion.p className="pb-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quas sit accusantium laboriosam sint eligendi
                        voluptas optio nostrum. Numquam, quas. Magni, veniam
                        voluptatibus! Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Quas sit accusantium laboriosam sint
                        eligendi voluptas optio nostrum. Numquam, quas. Magni,
                        veniam voluptatibus!
                      </motion.p>
                      <p className=" font-Oswald text-2xl font-thin leading-loose">
                        Available Positions
                      </p>
                      <ul className=" flex list-none flex-col gap-y-2 pl-2">
                        <li className=" list-item border-b border-b-gray-200">
                          <div>
                            <p>React Developer</p>
                            <div className=" flex flex-row items-center justify-between font-Montserrat text-sm text-gray-600">
                              <p>Intermediate</p>
                              <p>3 Hours per week</p>
                            </div>
                          </div>
                        </li>
                        <li className=" list-item border-b border-b-gray-200">
                          <div>
                            <p>UI/UX Designer</p>
                            <div className=" flex flex-row items-center justify-between font-Montserrat text-sm text-gray-600">
                              <p>Advanced</p>
                              <p>4 Hours per week</p>
                            </div>
                          </div>
                        </li>
                        <li className=" list-item border-b-0 border-b-gray-200">
                          <div>
                            <p>Digital Artist</p>
                            <div className=" flex flex-row items-center justify-between font-Montserrat text-sm text-gray-600">
                              <p>Advanced</p>
                              <p>7 Hours per week</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </motion.div>

                    <div className="flex flex-row items-center justify-between border-t border-t-gray-400 bg-gray-200 py-2 px-5">
                      <button className="flow-row flex items-center gap-x-2 p-2">
                        <ClipboardCheckIcon
                          type="outline"
                          className="h-7 w-7"
                        />
                        APPLY
                      </button>
                      <button className="flow-row flex items-center gap-x-2 p-2">
                        DETAILS
                        <ArrowCircleRightIcon
                          type="outline"
                          className="h-7 w-7 text-[#ff7f0e]"
                        />
                      </button>
                    </div>
                    <motion.button
                      className="absolute top-0 right-0  p-2"
                      onClick={() => setSelectedId(null)}
                    >
                      <XCircleIcon className="h-8 w-8" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <ProjectsFilters />
          </div>
          <div>
            <ProjectsList />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
