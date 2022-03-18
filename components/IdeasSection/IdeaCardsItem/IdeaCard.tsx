import { motion } from 'framer-motion'

export default function IdeaCard() {
  return (
    <motion.div variants={ideasItemVariants} className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>Project Name</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          aliquid tempore ipsum nesciunt necessitatibus sapiente.
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.section}>
          <p className={styles.sectionTitleText}>Type</p>
          <p className={styles.sectionBodyText}>Product Platform</p>
        </div>
        <div className={`${styles.section} ${styles.positionSection}`}>
          <p className={styles.sectionTitleText}>Positions Available</p>
          <ul className={styles.positionsList}>
            <li className={styles.positionsListItem}>
              <p className={styles.sectionBodyText}>React Developer</p>
            </li>
            <li className={styles.positionsListItem}>
              <p className={styles.sectionBodyText}>Digital Artist</p>
            </li>
            <li className={styles.positionsListItem}>
              <p className={styles.sectionBodyText}>UX/UI</p>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitleText}>Time Commitment</p>
          <p className={styles.sectionBodyText}>3Hrs</p>
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
  description: `text-center text-lg`,
  body: `mx-auto flex w-full flex-col justify-evenly gap-y-5 px-5 py-5 lg:flex-row`,
  section: `flex flex-col items-center justify-start gap-y-3`,
  sectionTitleText: `text-lg font-bold`,
  sectionBodyText: `text-lg`,
  positionSection: `border-y-2 border-x-0 border-[#454D58] border-opacity-50 py-5 lg:border-y-0 lg:border-x-2 lg:py-0 lg:px-5`,
  positionSectionTitle: `text-lg font-bold`,
  positionsList: `list-disc`,
  positionsListItem: `list-item`,
}
