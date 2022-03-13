import { ChevronDownIcon } from '@heroicons/react/solid'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

interface Props {
  title: string
  items: { name: string; value: string | number }[]
  validate?: boolean
  onChange: (value: any) => void
  selectedValue: any
  addAllItem?: boolean
}

export default function Dropdown({
  title,
  items,
  validate = false,
  onChange,
  selectedValue,
}: Props) {
  const node = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<{
    name: string
    value: string | number
  } | null>(null)

  useEffect(() => {
    if (selectedValue && selectedItem == null) {
      const item = items.find((i) => i.name === selectedValue)
      setSelectedItem(item ? item : null)
    }
  }, [items, selectedItem, selectedValue])

  type ItemType = { name: string; value: string | number }

  const handleOnSelectItem = (item: ItemType) => {
    setSelectedItem(item)
    onChange(item.value)
    setIsOpen(false)
  }

  function useOutsideAlerter(ref: MutableRefObject<any>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useOutsideAlerter(node)

  return (
    <div
      ref={node}
      className={`
    ${validate && !selectedValue ? 'border-x-red-500' : 'border-x-white'}  
    relative rounded-3xl border-x-2 border-x-slate-200 bg-slate-200`}
    >
      <button
        type="button"
        className={
          'inline-flex w-full items-center justify-between px-5 pb-2 pt-3 font-Oswald font-thin'
        }
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedItem ? (
          <p
            className={
              'flex w-full flex-row items-center justify-between gap-x-5 text-lg lg:text-2xl'
            }
          >
            <span className="text-xl  capitalize  text-gray-500 ">
              {title}{' '}
            </span>
            <span className="uppercase text-inherit">{selectedItem.name}</span>
          </p>
        ) : (
          <p className={'text-lg text-gray-400 lg:text-2xl'}>{title}</p>
        )}
        <ChevronDownIcon className={'ml-2 h-8 w-8 text-inherit'} />
      </button>

      <div
        className={`${
          isOpen ? 'block ' : 'hidden'
        }  absolute z-50 my-4 w-full list-none divide-y divide-gray-100  rounded bg-white px-5 text-base  shadow drop-shadow-md`}
        id="dropdown"
      >
        <ul
          className={'flex list-none flex-col gap-y-2 py-5 font-Montserrat'}
          aria-labelledby="dropdown"
        >
          {items.map((item) => (
            <li
              key={item.value}
              value={item.value}
              onClick={() => handleOnSelectItem(item)}
              className={
                'cursor-pointer text-left font-Montserrat text-lg font-thin text-black'
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
