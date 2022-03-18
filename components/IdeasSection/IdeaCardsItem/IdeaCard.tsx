import { motion } from 'framer-motion'
import { Project } from '../../../data/projects'

interface Props {
  project: Project
}

export default function IdeaCard({ project }: Props) {
  return (
    <motion.div variants={ideasItemVariants} className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>{project.title}</p>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.body}>
        <div className={styles.section}>
          <p className={styles.sectionTitleText}>Type</p>
          <p className={styles.sectionBodyText}>{project.type}</p>
        </div>
        <div className={`${styles.section} ${styles.positionSection}`}>
          <p className={styles.sectionTitleText}>Positions Available</p>
          <ul className={styles.positionsList}>
            {project.positions.map((position, index) => (
              <li key={index} className={styles.positionsListItem}>
                <p className={styles.sectionBodyText}>{position}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitleText}>Time Commitment</p>
          <p
            className={styles.sectionBodyText}
          >{`${project.commitment} Hours/Week`}</p>
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

const styles = {
  wrapper: `mx-auto h-auto w-full overflow-hidden rounded-[20px] bg-[#C4C4C4] lg:w-[30vw] lg:rounded-[40px]`,
  header: `w-full rounded-[20px] bg-[#59687B] p-3 text-white lg:rounded-[40px]`,
  title: `pb-2 text-center text-4xl`,
  description: `text-center text-lg min-h-[4rem]`,
  body: `mx-auto flex w-full flex-col justify-evenly gap-y-5 px-5 py-5 lg:flex-row`,
  section: `flex flex-col items-center justify-start gap-y-3`,
  sectionTitleText: `text-lg font-bold`,
  sectionBodyText: `text-lg`,
  positionSection: `border-y-2 border-x-0 border-[#454D58] border-opacity-50 py-5 lg:border-y-0 lg:border-x-2 lg:py-0 lg:px-5`,
  positionSectionTitle: `text-lg font-bold`,
  positionsList: `list-disc`,
  positionsListItem: `list-item`,
}
