import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (currentIndex === 3 ? 0 : prev + 1))
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [currentIndex, setCurrentIndex])

  return (
    <nav className="fixed h-auto w-screen bg-[#1c1c1c]  text-[#ffffff] ">
      <div className="container mx-auto flex flex-row items-center justify-between py-2">
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

        <ul className=" flex list-none flex-row gap-x-5">
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
        <Link href={'#'} passHref>
          <a className="rounded-lg py-1 px-3  text-orange-500 transition-all duration-200 hover:bg-orange-500 hover:text-[#ffffff]">
            <p className="font-Oswald text-xl font-thin uppercase">
              {loginText}
            </p>
          </a>
        </Link>
      </div>
      <motion.div
        animate={{ backgroundColor: colors[currentIndex] }}
        className="h-1 w-full"
        style={{
          filter: `drop-shadow(1px 1px 5px ${colors[currentIndex]})`,
        }}
      ></motion.div>
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
