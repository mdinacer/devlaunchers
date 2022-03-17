import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import AppCheckbox from '../Checkbox/AppCheckbox'

interface Props {
  title: string
  onChange: (value: any[]) => void
  selectedItems?: any[]
}

export default function Dropdown({ title, onChange, selectedItems }: Props) {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<any[]>([])

  const handleChecked = (item: any, checked: boolean) => {
    let list = []
    if (!checked) {
      list = [...items.filter((i) => i !== item)]
    } else {
      list = [...items, item]
    }
    setItems(list)
    onChange(list)
  }

  useEffect(() => {
    if (selectedItems && selectedItems.length > 0) {
      setItems(selectedItems)
    }
  }, [selectedItems])

  const checkExists = (item: any) => {
    return selectedItems ? selectedItems.includes(item) : items.includes(item)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  useOutsideClick(ref, handleCloseMenu)

  return (
    <div ref={ref} className="relative w-full lg:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className=" inline-flex w-full items-center justify-between  gap-x-5 rounded-[40px] bg-white pl-5 pr-2 drop-shadow-md lg:w-auto"
      >
        <p className="text-lg">{title}</p>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6" />
        ) : (
          <ChevronDownIcon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate={'open'}
            exit="exit"
            style={{ transformOrigin: 'top' }}
            className={`absolute left-0  z-10 w-full  min-w-[18rem] p-2`}
          >
            <ul className=" flex  w-full max-w-sm list-none flex-col gap-y-2 overflow-hidden rounded-[10px] bg-white px-5 py-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <li key={item} className=" list-item">
                  <AppCheckbox
                    isChecked={checkExists(`Filter ${item}`)}
                    onChange={(value) => handleChecked(`Filter ${item}`, value)}
                    label={`Filter ${item}`}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const listVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  open: {
    opacity: 1,
    scaleY: 1,

    transition: {
      y: { duration: 1 },
    },
  },
  exit: { opacity: 0, scaleY: 0 },
}

function useOutsideClick(ref: MutableRefObject<any>, callback: () => void) {
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
