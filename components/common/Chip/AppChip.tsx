import { XIcon } from '@heroicons/react/solid'

interface Props {
  title: string
  value: string
  onClose: (value: any) => void
}

export default function AppChip({ title, value, onClose }: Props) {
  return (
    <div className=" inline-flex items-center justify-between gap-x-1 rounded-[20px] bg-gray-500 pl-3 text-white  lg:gap-x-5">
      <p className="py-1 px-3">
        <span>{`${title}: `}</span>
        <span>{value}</span>
      </p>
      <button
        type="button"
        title="remove filter"
        className=" h-6 w-6"
        onClick={() => onClose(value)}
      >
        <XIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
