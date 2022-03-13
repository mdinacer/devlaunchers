import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  children: ReactNode
  title: string
  description: string
}

const Layout = ({ children, title, description }: Props): JSX.Element => {
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <main className={styles.mainContainer}>
        {/* <Header /> */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
            className={styles.childrenContainer}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

const styles = {
  mainContainer: `bg-lightBg dark:bg-darkBg relative min-h-screen w-full`,
  childrenContainer: `w-ful h-full`,
}

export default Layout

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
}
