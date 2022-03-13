import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import LabeledCheckBox from './LabeledCheckBox'

interface Props {
  title: string
  items: any[]
  onChange: (value: any) => void
}

export default function CheckboxDropdown({ title, items, onChange }: Props) {
  const node = useRef(null)
  const [addedItems, setAddedItems] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleOnSelectItem = (item: any) => {
    let items = [...addedItems]
    if (items.includes(item)) {
      items = items.filter((i) => i !== item)
    } else {
      items = [...items, item]
    }
    setAddedItems(items)
    onChange(items)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  useOutsideAlerter(node, handleCloseMenu)

  return (
    <Wrapper ref={node}>
      <Toggle type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <p>{title}</p>
        <Icon viewBox="0 0 24 24" height={24} width={24}>
          <polyline
            points={isOpen ? '6 15 12 9 18 15' : '6 9 12 15 18 9'}
            stroke="black"
          ></polyline>
        </Icon>
      </Toggle>

      <ListContainer isOpen={isOpen}>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} value={item}>
              <LabeledCheckBox
                label={item}
                id={`${title}${item}${index}`}
                checked={addedItems.includes(item)}
                onChange={(event) => handleOnSelectItem(item)}
                checkedBg="#C3C0C0"
              />
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </Wrapper>
  )
}

function useOutsideAlerter(ref: MutableRefObject<any>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback, ref])
}

interface DropdownProps {
  isOpen: boolean
}

const Wrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  color: #000000;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 24rem;
`

const Icon = styled.svg`
  fill: none;
  stroke: 'black';
  stroke-width: 2px;
  stroke-linecap: 'round';
  stroke-linejoin: 'round';
`

const Toggle = styled.button`
  display: inline-flex;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 0.5rem;
  padding-top: 0.75rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.75rem;
`

const ListContainer = styled.div<DropdownProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 5;
  margin: 1rem 0;
  padding: 1rem 1.25rem;
  background-color: rgb(91 96 104);
  color: white;
  width: 100%;
  border-radius: 1.5rem;
  overflow: hidden;
`

const List = styled.ul`
  display: flex;
  padding: 1.25rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
