import { motion } from 'framer-motion'

export default function IdeaCard() {
  return (
    <motion.div
      variants={ideasItemVariants}
      className="mx-auto h-auto w-full overflow-hidden rounded-[20px] bg-[#C4C4C4] lg:w-[30vw] lg:rounded-[40px]"
    >
      <div className="w-full rounded-[20px] bg-[#59687B] p-3 text-white lg:rounded-[40px] ">
        <p className=" pb-2 text-center text-4xl">Project Name</p>
        <p className=" text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          aliquid tempore ipsum nesciunt necessitatibus sapiente.
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
  )
}

const ideasItemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  open: {
    opacity: 1,
    scale: 1,
  },
  exit: { opacity: 0, y: '-100%' },
}
