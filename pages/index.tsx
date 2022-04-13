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

          <div className="relative flex select-none items-center  bg-slate-300 p-5">
            <div className="flex w-full flex-row">
              <div className=" hidden h-full w-auto flex-col gap-y-5 px-10 lg:flex">
                <div className=" h-auto w-80 flex-initial cursor-pointer overflow-hidden rounded-md bg-gray-200 drop-shadow-md">
                  <div className="flex h-10 w-full items-center justify-center bg-slate-500 bg-gradient-to-br text-white ">
                    <p className="font-Oswald text-xl font-thin uppercase">
                      Type
                    </p>
                  </div>
                  <div className="h-full bg-slate-100 p-5 text-black">
                    <div>
                      <label className="flex items-center pl-3">
                        <input
                          className="form-checkbox text-[#ff7f0e]"
                          type="checkbox"
                          name="platform"
                          id="platform"
                          checked
                        />
                        <span className="ml-2">Platform</span>
                      </label>
                      <label className="flex items-center pl-3">
                        <input
                          className="form-checkbox text-[#3a7ca5]"
                          type="checkbox"
                          name="platform"
                          id="platform"
                          checked
                        />
                        <span className="ml-2">Product</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="h-full w-80 flex-auto cursor-pointer overflow-hidden rounded-md bg-gray-200 drop-shadow-md">
                  <div className="flex h-10 w-full items-center justify-center bg-slate-500 bg-gradient-to-br text-white ">
                    <p className="font-Oswald text-xl font-thin uppercase">
                      Positions
                    </p>
                  </div>
                  <div className="h-full bg-slate-100 p-5 text-black">
                    <div>
                      <div className="h-80 overflow-y-scroll">
                        <ul className="flex h-auto w-full flex-col gap-y-2">
                          {Array.from(Array(20).keys()).map((item, index) => (
                            <li key={index}>
                              <label className="flex items-center pl-3">
                                <input
                                  className="form-checkbox border border-slate-600 text-slate-500 focus-within:border-slate-600"
                                  type="checkbox"
                                  name="platform"
                                  id="platform"
                                />
                                <span className="ml-2">
                                  Position {index + 1}
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-auto w-80 flex-initial cursor-pointer overflow-hidden rounded-md bg-gray-200 drop-shadow-md">
                  <div className="flex h-10 w-full items-center justify-center bg-slate-500 bg-gradient-to-br text-white ">
                    <p className="font-Oswald text-xl font-thin uppercase">
                      Skill Level
                    </p>
                  </div>
                  <div className="h-full bg-slate-100 p-5 text-black">
                    <div>
                      <div className="h-full overflow-y-scroll">
                        <ul className="flex h-auto flex-col gap-y-2">
                          {['Beginner', 'Intermediate', 'Advanced'].map(
                            (item, index) => (
                              <li key={index}>
                                <label className="flex items-center pl-3">
                                  <input
                                    className="form-checkbox border border-slate-600 text-slate-500 focus-within:border-slate-600"
                                    type="checkbox"
                                    name="platform"
                                    id="platform"
                                  />
                                  <span className="ml-2">{item}</span>
                                </label>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-auto w-80 flex-initial cursor-pointer overflow-hidden rounded-md bg-gray-200 drop-shadow-md">
                  <div className="flex h-10 w-full items-center justify-center bg-slate-500 bg-gradient-to-br text-white ">
                    <p className="font-Oswald text-xl font-thin uppercase">
                      Max Commitment
                    </p>
                  </div>
                  <div className="h-full bg-slate-100 p-5 text-black">
                    <div className="m-auto  flex h-20 w-64 items-center justify-center">
                      <div className="relative min-w-full py-1">
                        <div className="h-2 rounded-full bg-gray-200">
                          <div
                            className="absolute h-2 w-0 rounded-full bg-gradient-to-r from-[#ff7f0e] to-[#ffab00]"
                            style={{ width: '58.5714%' }}
                          ></div>
                          <div
                            className="absolute top-0 -ml-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow"
                            unselectable="on"
                            style={{ left: '58.5714%' }}
                          >
                            <div className="relative -mt-2 w-1">
                              <div
                                className="bottom-100 absolute left-0 z-40 mb-2 min-w-full opacity-100"
                                style={{ marginLeft: '-20.5px' }}
                              >
                                <div className="relative shadow-md">
                                  <div className="-mt-8 truncate rounded bg-black py-1 px-4 text-xs text-white">
                                    4
                                  </div>
                                  <svg
                                    className="top-100 absolute left-0 h-2 w-full text-black"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 255 255"
                                  >
                                    <polygon
                                      className="fill-current"
                                      points="0,0 127.5,127.5 255,0"
                                    ></polygon>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 -ml-1 -mb-6 text-gray-800">
                            2 Hours
                          </div>
                          <div className="absolute bottom-0 right-0 -mr-1 -mb-6 text-gray-800">
                            10 Hours
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
                        <li className=" list-item border-b border-b-gray-300">
                          <div>
                            <p className="text-lg">React Developer</p>
                            <p className="text-base">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium quam quibusdam
                              aperiam.
                            </p>
                            <div className=" flex flex-row items-center justify-between pt-2 font-Montserrat text-sm text-gray-600">
                              <p>Intermediate</p>
                              <p>3 Hours per week</p>
                            </div>
                          </div>
                        </li>
                        <li className=" list-item border-b border-b-gray-300">
                          <div>
                            <p className="text-lg">UI/UX Designer</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium quam quibusdam
                              aperiam.
                            </p>
                            <div className=" flex flex-row items-center justify-between pt-2 font-Montserrat text-sm text-gray-600">
                              <p>Advanced</p>
                              <p>4 Hours per week</p>
                            </div>
                          </div>
                        </li>
                        <li className=" list-item border-b-0 border-b-gray-200">
                          <div>
                            <p className="text-lg">Digital Artist</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Praesentium quam quibusdam
                              aperiam.
                            </p>
                            <div className=" flex flex-row items-center justify-between pt-2 font-Montserrat text-sm text-gray-600">
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
