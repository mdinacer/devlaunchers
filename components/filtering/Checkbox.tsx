import React from 'react'
import styled from 'styled-components'

interface Props {
  id: string
  checked: boolean
  className?: string
  checkedBg?: string
  uncheckedBg?: string
  strokeColor?: string
  width?: number | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({
  id,
  checked,
  className,
  strokeColor = '#000',
  checkedBg = '#FFF',
  uncheckedBg = '#FFF',
  width = undefined,
  onChange,
}: Props) {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} onChange={onChange} id={id} />
      <StyledCheckbox
        checked={checked}
        checkedBg={checkedBg}
        uncheckedBg={uncheckedBg}
        width={width}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" stroke={strokeColor} />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

interface StyledCheckboxProps {
  checked: boolean
  checkedBg: string
  uncheckedBg: string
  width?: number | undefined
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: ${({ width }) => (width ? `${width}em` : '16px')};
  width: ${({ width }) => (width ? `${width}em` : '16px')};
  background: ${(props) =>
    props.checked ? props.checkedBg : props.uncheckedBg};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${(props) => props.checkedBg};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
