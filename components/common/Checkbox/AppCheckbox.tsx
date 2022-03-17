interface Props {
  isChecked: boolean
  label: string
  onChange: (value: boolean) => void
}

export default function AppCheckbox({ isChecked, label, onChange }: Props) {
  return (
    <label className="inline-flex w-full max-w-xs  items-center justify-between">
      {label}
      <input
        type="checkbox"
        className="h-6 w-6 rounded-md border-0 bg-slate-500 text-slate-500  focus:ring-0"
        checked={isChecked}
        onChange={({ target }) => onChange(target.checked)}
      />
    </label>
  )
}
