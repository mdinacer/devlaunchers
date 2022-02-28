import type { NextPage } from 'next'
import ProjectsCards from '../components/JoinUs/ProjectsCards'
import ProjectsList from '../components/JoinUs/ProjectsList'
import SectionHeader from '../components/JoinUs/SectionHeader'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="Join Us">
      <div className=" mi-h-screen h-full w-screen bg-[#454d58] py-20  text-[#ffffff]">
        <div className=" mx-auto">
          <SectionHeader title="Join Us!" subTitle="Find a project to join" />
          <ProjectsCards />
          <ProjectsList />
        </div>
      </div>
    </Layout>
  )
}

export default Home
