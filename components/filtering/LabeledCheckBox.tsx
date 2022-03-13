import styled from 'styled-components'
import Checkbox from './Checkbox'

interface Props {
  id: string
  checked: boolean
  className?: string
  label: any
  checkedBg?: string
  uncheckedBg?: string
  strokeColor?: string
  width?: number | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function LabeledCheckBox({ label, ...props }: Props) {
  return (
    <Label htmlFor={props.id}>
      {label}
      <Checkbox {...props} />
    </Label>
  )
}

const Label = styled.label`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
