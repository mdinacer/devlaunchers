import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useState } from 'react'
import AppCheckbox from '../components/common/Checkbox/AppCheckbox'
import Dropdown from '../components/common/DropDown/Dropdown'
import ProjectsFilters from '../components/Filtering/ProjectsFilters'
import IdeaCardsList from '../components/IdeasSection/IdeaCards/IdeaCardsList'
import IdeaSectionHeader from '../components/IdeasSection/SectionHeader/IdeaSectionHeader'
import Layout from '../components/Layout'
import ProjectsList from '../components/Projects/ProjectsList/ProjectsList'

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="Join Us">
      <div className=" h-full min-h-screen w-screen bg-[#454D58] pt-20">
        <div className="py-10">
          <IdeaSectionHeader />

          <IdeaCardsList />

          <div className="">
            <ProjectsFilters />
          </div>
          <div className="">
            <ProjectsList />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
