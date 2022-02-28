import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (currentIndex === 3 ? 0 : prev + 1))
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentIndex, setCurrentIndex])

  return (
    <nav className="fixed z-10 h-auto w-screen bg-[#1c1c1c]  text-[#ffffff] ">
      <div className="container mx-auto flex flex-row items-center justify-between px-5 py-2">
        {/* logo */}
        <Link href={'/'} passHref>
          <a className="relative flex flex-row items-center gap-x-3">
            <Image src={logoImg} width={50} height={50} />
            <p className=" font-Oswald text-3xl font-light capitalize">
              {logoText}
            </p>
          </a>
        </Link>

        {/* menu */}

        <ul className=" hidden list-none flex-row gap-x-5 lg:flex">
          {menuLinks.map((link) => (
            <li
              key={link.id}
              className=" list-item scale-100 transition-all duration-200 hover:scale-110 hover:text-orange-500"
            >
              <Link href={link.path} passHref>
                <a className="  font-Oswald text-xl font-thin uppercase">
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* SignIn button */}
        <div className="hidden lg:block">
          <Link href={'#'} passHref>
            <a className="rounded-lg py-1 px-3  text-orange-500 transition-all duration-200 hover:bg-orange-500 hover:text-[#ffffff]">
              <p className="font-Oswald text-xl font-thin uppercase">
                {loginText}
              </p>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden ">
          <button
            type="button"
            title="menuButton"
            className="flex items-center justify-center"
            onClick={() => setOpen((prev) => !prev)}
          >
            <MenuIcon className="my-auto h-8 w-8" />
          </button>
        </div>
      </div>
      <motion.div
        animate={{ backgroundColor: colors[currentIndex] }}
        className="h-1 w-full"
        transition={{ duration: 0.5 }}
        style={{
          filter: `drop-shadow(1px 1px 5px ${colors[currentIndex]})`,
        }}
      ></motion.div>

      {/* Mobile Menu */}
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 1,
              stiffness: 250,
            }}
            className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-[#1c1c1c] lg:hidden"
          >
            <button
              type="button"
              title="menuButton"
              className="absolute top-0 right-0 flex items-center justify-center p-10"
              onClick={() => setOpen(false)}
            >
              <XIcon className="my-auto h-8 w-8" />
            </button>
            <ul className=" flex list-none flex-col gap-y-5 lg:hidden">
              {menuLinks.map((link) => (
                <li
                  key={link.id}
                  className=" list-item scale-100 transition-all duration-200 hover:scale-110 hover:text-orange-500"
                >
                  <Link href={link.path} passHref>
                    <a
                      className="  font-Oswald text-4xl font-thin uppercase"
                      onClick={() => setOpen(false)}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <motion.div
              animate={{ backgroundColor: colors[currentIndex] }}
              className="absolute bottom-0 left-0 h-1 w-full"
              transition={{ duration: 0.5 }}
              style={{
                filter: `drop-shadow(1px 1px 5px ${colors[currentIndex]})`,
              }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const logoText = 'Dev Launchers'
const logoImg = '/assets/images/logo.png'
const loginText = 'Signin'

const menuLinks = [
  { id: 1, title: 'create', path: '#' },
  { id: 1, title: 'learn', path: '#' },
  { id: 1, title: 'support us', path: '#' },
  { id: 1, title: 'join', path: '#' },
]

const colors = ['#ff7f0f', '#ffab00', '#82c3d6', '#3a7ca4']
