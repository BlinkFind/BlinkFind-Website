'use client'
import React, { useState }  from 'react'
import Link from 'next/link';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('Home');

    const handleItemClick = (item) => {
      setActiveItem(item);
    };
  
  return (
    <div className='bg-[#D1FFD1] w-screen'>
    <nav className="flex justify-between items-center h-[80px] w-[80vw] xs:w-[90vw] mx-auto ">
    <div className="flex items-center relative">
      <img src="HeroImages/img/Logo.png" alt="" />
      <span className="font-poppins text-lg font-bold leading-[30px] text-left" style={{ color: "rgb(2, 46, 80)" }}>
        Quick
      </span>
      <span className="text-[#51B504] font-poppins text-lg font-bold leading-[30px] text-left">
        Finds
      </span>
    </div>
    <ul className="flex lg:gap-[30px] items-center h-[44px] font-poppins font-[500] leading-[24x] lg:text-lg sm:text-[12px] sm:gap-[5px] sm:leading-[18x] xs:hidden cursor-pointer">
      {['Home', 'About Us', 'Services', 'Projects','Contact Us'].map((item) => (
       <li key={item} className={`lg:p-[10px] sm:p-[6px] ${activeItem === item ? 'bg-[#51B504] text-[#FFFFFF] rounded-[10px]' : ''}`} onClick={() => handleItemClick(item)}>
       <Link href={`#${item}`} scroll={true}>
         {item}
       </Link>
     </li>
      ))}
      <li>
      </li>
    </ul>
    <div className="hidden xs:block">
      <img src="/HeroImages/img/Vector.png" alt="" />
    </div>
  </nav>
  </div>
  )
}

export default Navbar