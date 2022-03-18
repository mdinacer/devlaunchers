import type { NextPage } from 'next'
import ProjectsFilters from '../components/Filtering'
import IdeaCardsList from '../components/IdeasSection/IdeaCards'
import IdeaSectionHeader from '../components/IdeasSection/SectionHeader'
import Layout from '../components/Layout'
import ProjectsList from '../components/Projects/ProjectsList'

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="Join Us">
      <div className=" h-full min-h-screen w-screen bg-[#454D58] pt-20 text-black">
        <div className="py-10">
          <IdeaSectionHeader />

          <IdeaCardsList />

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
