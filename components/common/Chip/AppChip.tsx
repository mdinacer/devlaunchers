import { XIcon } from '@heroicons/react/solid'

interface Props {
  title: string
  value: string
  onClose: (value: any) => void
}

export default function AppChip({ title, value, onClose }: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>
        <span>{`${title}: `}</span>
        <span>{value}</span>
      </p>
      <button
        type="button"
        title="remove filter"
        className={styles.button}
        onClick={() => onClose(value)}
      >
        <XIcon className={styles.buttonIcon} />
      </button>
    </div>
  )
}

const styles = {
  wrapper: `inline-flex items-center justify-between gap-x-1 rounded-[20px] bg-gray-500 pl-3 text-white  lg:gap-x-5`,
  label: `py-1 px-3`,
  button: `h-6 w-6`,
  buttonIcon: `h-4 w-4`,
}
