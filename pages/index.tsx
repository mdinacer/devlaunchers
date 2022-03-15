import { XIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false)
  const [labelChecked, setLabelChecked] = useState(false)
  return (
    <Layout title="Home" description="Join Us">
      <div className=" h-full min-h-screen w-screen bg-[#454D58] py-20 px-10  ">
        <div className="flex flex-row gap-x-5 py-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={index}
              className=" flex flex-row items-center gap-x-5 rounded-2xl bg-gray-300 py-1 pl-5 pr-2"
            >
              <p>{`Filter ${index + 1}`}</p>
              <XIcon className="h-6 w-6" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={index}
              className=" h-auto rounded-[20px] bg-gray-300 p-10"
            >
              <p className="  pb-3 text-sm font-bold uppercase">
                platform type
              </p>
              <p className=" pb-4 text-4xl">Project Name</p>
              <p className="font-thing pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptates fugiat hic commodi id doloremque amet ipsum, quod eum
                possimus!
              </p>
              <p className="font-thing">
                <span className="text-base font-bold">Open positions: </span>
                <span className="text-base">6 positions</span>
              </p>
              <p className="font-thing">
                <span className="text-base font-bold">Time Commitment: </span>
                <span className="text-base">3-5 Hours/week</span>
              </p>
              <div className="flex w-full flex-row justify-end py-5">
                <button className="ml-auto rounded-[20px] bg-gray-500 py-1 px-2 text-white">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
