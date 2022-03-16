import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="Join Us">
      <div className=" h-full min-h-screen w-screen bg-[#454D58] pt-20">
        <div className="py-10">
          <div className="mx-auto flex flex-col items-center justify-center gap-y-4 py-10  text-white">
            <p className=" w-full max-w-lg border-b border-b-white pb-2 text-center text-7xl">
              Join Us!
            </p>
            <p className=" text-4xl">Find a project to join!</p>
          </div>

          <motion.div className=" h-auto overflow-hidden bg-[#30363E] p-5 xl:p-10">
            <motion.div
              variants={ideasContainerVariants}
              initial={'hidden'}
              animate={'open'}
              className="mx-auto grid grid-cols-1  gap-10 lg:grid-cols-3 lg:px-10  "
            >
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  variants={ideasItemVariants}
                  key={index}
                  className="mx-auto h-auto w-full overflow-hidden rounded-[40px] bg-[#C4C4C4] lg:w-[30vw]"
                >
                  <div className="w-full rounded-[40px] bg-[#59687B] p-3 text-white ">
                    <p className=" pb-2 text-center text-4xl">Project Name</p>
                    <p className=" text-center text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi aliquid tempore ipsum nesciunt necessitatibus
                      sapiente.
                    </p>
                  </div>

                  <div className="mx-auto  flex w-full flex-col  justify-evenly gap-y-5 px-5 py-5 lg:flex-row">
                    <div className="flex flex-col items-center justify-start gap-y-3 font-Abel">
                      <p className=" text-lg font-bold">Type</p>
                      <p className=" text-lg">Product Platform</p>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-y-3 border-y-2 border-x-0 border-[#454D58] border-opacity-50 py-5 lg:border-y-0 lg:border-x-2 lg:py-0 lg:px-5">
                      <p className=" text-lg font-bold">Positions Available</p>
                      <ul className="list-disc">
                        <li className=" list-item">
                          <p className=" text-lg">React Developer</p>
                        </li>
                        <li className=" list-item">
                          <p className=" text-lg">Digital Artist</p>
                        </li>
                        <li className=" list-item">
                          <p className=" text-lg">UX/UI</p>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-y-3">
                      <p className=" text-lg font-bold">Time Commitment</p>
                      <p className=" text-lg">3Hrs</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

const ideasContainerVariants = {
  hidden: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.35,
      delayChildren: 0.5,
    },
  },
  exit: { opacity: 0 },
}

const ideasItemVariants = {
  hidden: { opacity: 0, y: '100%' },
  open: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: '-100%' },
}
