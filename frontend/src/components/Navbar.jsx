'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleItemClick = (item) => {
    setActiveItem(item)
    setIsSidebarOpen(false)
  }

  const navItems = ['Home', 'About Us', 'Services', 'Projects', 'Contact Us']

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 639) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const Sidebar = () => (
    <div 
      className={`fixed top-0 left-0 h-full w-[250px] bg-[#D1FFD1] transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4">
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="text-[#022E50] font-bold text-xl mb-4"
        >
          &times;
        </button>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`p-2 rounded-[10px] ${
                activeItem === item ? 'bg-[#51B504] text-[#FFFFFF]' : 'text-[#022E50]'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )

  return (
    <div className='bg-[#D1FFD1] w-screen fixed z-10'>
      <nav className="flex justify-between items-center h-[80px] w-[80vw] xs:w-[90vw] mx-auto">
        <div className="flex items-center relative">
          <img src="/HeroImages/img/Logo.png" alt="Logo" />
          <span className="font-poppins text-lg font-bold leading-[30px] text-left text-[#022E50]">
            Quick
          </span>
          <span className="text-[#51B504] font-poppins text-lg font-bold leading-[30px] text-left">
            Finds
          </span>
        </div>
        <ul className="flex lg:gap-[30px] items-center h-[44px] font-poppins font-[500] leading-[24px] lg:text-lg sm:text-[12px] sm:gap-[5px] sm:leading-[18px] xs:hidden cursor-pointer">
          {navItems.map((item) => (
            <li
              key={item}
              className={`lg:p-[10px] sm:p-[6px] ${
                activeItem === item ? 'bg-[#51B504] text-[#FFFFFF] rounded-[10px]' : ''
              }`}
              onClick={() => handleItemClick(item)}
            >
              <Link href={`#${item}`} scroll={true}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden xs:block">
          <button onClick={() => setIsSidebarOpen(true)} className="focus:outline-none">
            <img src="/HeroImages/img/Vector.png" alt="Menu" />
          </button>
        </div>
      </nav>
      <Sidebar />
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Navbar