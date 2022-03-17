import { motion } from 'framer-motion'
import IdeaCard from '../IdeaCardsItem/IdeaCard'

export default function IdeaCardsList() {
  return (
    <motion.div
      variants={ideasContainerVariants}
      initial={'hidden'}
      animate={'open'}
      className=" h-auto overflow-hidden bg-[#30363E] p-5 xl:p-10"
    >
      <motion.div
        variants={ideasContainerVariants}
        initial={'hidden'}
        animate={'open'}
        className="mx-auto grid grid-cols-1  gap-10 lg:grid-cols-3 lg:px-10  "
      >
        {[1, 2, 3].map((item, index) => (
          <IdeaCard key={index} />
        ))}
      </motion.div>
    </motion.div>
  )
}

const ideasContainerVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      staggerChildren: 0.35,
      delayChildren: 1,
    },
  },
  exit: { opacity: 0 },
}