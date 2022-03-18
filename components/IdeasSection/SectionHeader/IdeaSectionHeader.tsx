export default function IdeaSectionHeader() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Join Us!</p>
      <p className={styles.subtitle}>Find a project to join!</p>
    </div>
  )
}

const styles = {
  wrapper: `mx-auto flex flex-col items-center justify-center gap-y-4 py-10  text-white`,
  title: `w-full max-w-lg border-b border-b-white pb-2 text-center text-7xl`,
  subtitle: `text-4xl`,
}
