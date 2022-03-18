import { motion } from 'framer-motion'
import Projects from '../../../data/projects'
import IdeaCard from '../IdeaCardsItem/IdeaCard'

export default function IdeaCardsList() {
  return (
    <motion.div
      variants={ideasContainerVariants}
      initial={'hidden'}
      animate={'open'}
      className={styles.wrapper}
    >
      <motion.div
        variants={ideasContainerVariants}
        initial={'hidden'}
        animate={'open'}
        className={styles.grid}
      >
        {Projects.map((project) => (
          <IdeaCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.div>
  )
}

const styles = {
  wrapper: `h-auto overflow-hidden bg-[#30363E] p-5 xl:p-10`,
  grid: `mx-auto grid grid-cols-1  gap-10 lg:grid-cols-3 lg:px-10`,
}

const ideasContainerVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
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
