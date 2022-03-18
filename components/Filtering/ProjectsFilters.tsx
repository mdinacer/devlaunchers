import { useState } from 'react'
import AppChip from '../common/Chip/AppChip'
import Dropdown from '../common/DropDown/Dropdown'

export default function ProjectsFilters() {
  const [filters, setFilters] = useState<{
    platform: string[]
    position: string[]
    level: string[]
    commitment: string[]
  }>({
    platform: [],
    position: [],
    level: [],
    commitment: [],
  })

  const handleRemoveFilter = (type: string, value: any) => {
    switch (type) {
      case 'platform':
        setFilters({
          ...filters,
          platform: filters.platform.filter((f) => f !== value),
        })
        break
      case 'position':
        setFilters({
          ...filters,
          position: filters.position.filter((f) => f !== value),
        })
        break
      case 'level':
        setFilters({
          ...filters,
          level: filters.level.filter((f) => f !== value),
        })
        break
      case 'commitment':
        setFilters({
          ...filters,
          commitment: filters.commitment.filter((f) => f !== value),
        })
        break

      default:
        break
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Filters</p>
      <div className={styles.dropdownContainer}>
        <Dropdown
          title="Platform"
          onChange={(value) => setFilters({ ...filters, platform: value })}
          selectedItems={filters.platform}
        />
        <Dropdown
          title="Positions"
          onChange={(value) => setFilters({ ...filters, position: value })}
          selectedItems={filters.position}
        />
        <Dropdown
          title="Level"
          onChange={(value) => setFilters({ ...filters, level: value })}
          selectedItems={filters.level}
        />
        <Dropdown
          title="Commitment"
          onChange={(value) => setFilters({ ...filters, commitment: value })}
          selectedItems={filters.commitment}
        />
      </div>

      <div className={styles.chipsListContainer}>
        <ul className={styles.chipsList}>
          {filters.platform.length > 0 &&
            filters.platform.map((item, index) => (
              <li key={index}>
                <AppChip
                  title="Platform"
                  value={item}
                  onClose={(value) => handleRemoveFilter('platform', value)}
                />
              </li>
            ))}

          {filters.position.length > 0 &&
            filters.position.map((item, index) => (
              <li key={index}>
                <AppChip
                  title="Position"
                  value={item}
                  onClose={(value) => handleRemoveFilter('position', value)}
                />
              </li>
            ))}

          {filters.level.length > 0 &&
            filters.level.map((item, index) => (
              <li key={index}>
                <AppChip
                  title="Level"
                  value={item}
                  onClose={(value) => handleRemoveFilter('level', value)}
                />
              </li>
            ))}

          {filters.commitment.length > 0 &&
            filters.commitment.map((item, index) => (
              <li key={index}>
                <AppChip
                  title="Commitment"
                  value={item}
                  onClose={(value) => handleRemoveFilter('commitment', value)}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

const styles = {
  wrapper: `py-5 px-2 lg:px-10`,
  title: `pl-3 pb-5 text-2xl text-white`,
  dropdownContainer: `flex w-full flex-col items-center gap-x-4  gap-y-4 lg:flex-row`,
  chipsListContainer: `flex w-full flex-col items-center  gap-x-4 lg:flex-row`,
  chipsList: `mx-auto flex flex-row flex-wrap gap-5 py-5 lg:mx-0`,
}
