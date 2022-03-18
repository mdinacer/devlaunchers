import ProjectsListItem from '../ProjectsListItem'

export default function ProjectsList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {Array.from(Array(25).keys()).map((item, index) => (
          <ProjectsListItem key={index} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  wrapper: `overflow-y-auto overflow-x-hidden lg:max-h-[70vh]`,
  grid: `grid grid-flow-row gap-5 px-2 lg:px-10`,
}
