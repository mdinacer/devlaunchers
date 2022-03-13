import type { NextPage } from 'next'
import { useState } from 'react'
import Checkbox from '../components/filtering/Checkbox'
import CheckboxDropdown from '../components/filtering/CheckboxDropdown'
import LabeledCheckBox from '../components/filtering/LabeledCheckBox'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false)
  const [labelChecked, setLabelChecked] = useState(false)
  return (
    <Layout title="Home" description="Join Us">
      <div className=" h-full min-h-screen w-screen bg-[#454D58] py-20  text-[#ffffff]">
        <div className=" mx-auto">
          <div className="flex flex-row gap-x-10 p-20">
            <CheckboxDropdown
              title="Platform"
              onChange={(value) => console.log(value)}
              items={positions}
            />
            <CheckboxDropdown
              title="Position"
              onChange={(value) => console.log(value)}
              items={positions}
            />
            <CheckboxDropdown
              title="Level"
              onChange={(value) => console.log(value)}
              items={positions}
            />
            <CheckboxDropdown
              title="Commitment"
              onChange={(value) => console.log(value)}
              items={positions}
            />

            <div className="p-2">
              <Checkbox
                id="2"
                checked={checked}
                onChange={(value) => setChecked((prev) => !prev)}
              />
            </div>

            <LabeledCheckBox
              label="test labeled"
              id="1"
              checked={labelChecked}
              onChange={(value) => setLabelChecked((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

const positions = [
  'Backend Developer',
  'Frontend Developer',
  'React Developer',
  'UX Designer',
  'UI Designer',
  'Marketing',
]
