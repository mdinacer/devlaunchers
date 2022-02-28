import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ProjectTypes } from '../../data/projects'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export default function ProjectsFilters() {
  const [selected, setSelected] = useState({})
  return (
    <div className="container relative z-[2] mx-auto hidden select-none py-5 lg:block">
      <div className=" flex w-full flex-row items-center justify-between">
        <div className=" flex flex-row gap-4">
          {ProjectTypes.map((pType, index) => (
            <div
              key={index}
              className=" rounded-md bg-white py-1 px-2 text-black"
            >
              <p className=" font-Montserrat text-base uppercase">{pType}</p>
            </div>
          ))}
        </div>

        <div className=" flex flex-row gap-4">
          {filters.map((filter, index) => (
            <div
              key={index}
              className="rounded-md  bg-white py-1 px-2 text-black"
            >
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1 min-w-[10rem]">
                  <Listbox.Button className="relative w-full cursor-default py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block font-Montserrat text-sm font-thin uppercase">
                      {filter}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {/* {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-slate-100 text-slate-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))} */}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const filters = ['Project Nature', 'Position', 'Level', 'Commitment']

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]
