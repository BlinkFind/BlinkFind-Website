'use client'

import React from 'react'

const Hero = () => {
 
 
  return (
    <>
      <div className="bg-[#D1FFD1]" id="Home">
        {/* Nav Bar */}
       
        {/* Hero Section */}
        <div className="w-[80vw] mx-auto xs:flex-col-reverse sm:flex mt-10 xs:mt-0 sm:mt-0">
          {/* img for mobile : xs */}
          <div className="">
            <div className="justify-center hidden xs:flex">
              <img
                className="w-[672px] h-[504px] lg:w-[347.64px] lg:h-[291.77px] sm:w-[300px] sm:h-[300px] xs:w-[350px] xs:h-[250px] xs:mb-[10px]"
                src="HeroImages/img/heroImage2.png"
                alt=""
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center xs:items-center">
            <h1 className="lg:text-5xl sm:text-2xl xs:text-2xl font-bold font-poppins w-[40vw] xs:w-[100vw] xs:text-center xs:hidden">
              Innovative solutions
            </h1>
            <h1 className="lg:text-5xl sm:text-2xl xs:text-2xl font-bold font-poppins w-[40vw] pb-[10px] xs:w-[100vw] xs:text-center xs:hidden">
              for a better world!
            </h1>
            {/* New heading for mobile : xs */}
            <h1 className="lg:text-5xl sm:text-2xl xs:text-2xl font-bold font-poppins w-[40vw] xs:w-[100vw] xs:text-center hidden xs:block">
              Innovative solutions for a
            </h1>
            <h1 className="lg:text-5xl sm:text-2xl xs:text-2xl font-bold font-poppins w-[40vw]  pb-[10px] xs:w-[100vw] xs:text-center hidden xs:block">
              better world!
            </h1>
            <p className="font-poppins md:w-[30vw] xl:text-base lg:text-sm sm:text-xs xs:w-[70vw] xs:text-center xs:text-[12px]">
              We help businesses like yours earn more customers,standout from
              competitors, make more money
            </p>

            <span className="">
              <a href='#Contact Us' className="hidden lg:block w-44 bg-[#51B504] text-[#FFFFFF] lg:pt-[20px] lg:pr-[26px] lg:pb-[20px] lg:pl-[30px] lg:rounded-[16px] lg:text-lg lg:mt-[10px] xs:mt-[7px] font-bold sm:pt-[2px] sm:pb-[2px] sm:pr-[10px] sm:pl-[10px] sm:rounded-[5px] sm:text-[12px] xs:text-[12px] xs:pt-[2px] xs:pb-[2px] xs:pr-[10px] xs:pl-[10px] xs:rounded-[5px] xs:font-[400]">
                Get Started
              </a>
            </span>
          </div>
          <div className="">
            <div className="flex justify-center xs:hidden">
              <img
                className="lg:w-[672px] lg:h-[504px] sm:w-[400px] sm:h-[260px] xs:w-[250px] xs:h-[200px]"
                src="HeroImages/img/heroImage2.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Animation */}
        <div className="logo-animation bg-[#F8FFF8] lg:pt-[30px] lg:pb-[30px] overflow-hidden xs:mt-[10px] xs:pt-[0px] xs:pb-[0px] sm:pt-[15px] sm:pb-[15px]">
          <div className="logo-slide flex items-center  gap-[30px] whitespace-nowrap lg:h-[10vh] md:h-[5vh] xs: h-[7vh]">
            <span className="lg:text-3xl xs:text-lg font-bold mr-[40px] sm:text-xl">
              True Design is Invisible
            </span>
            <div className="flex items-center relative mr-[40px]">
              <img src="logo.svg" alt="logo" />
              <span
                className="font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] text-left"
                style={{ color: "rgb(2, 46, 80)" }}
              >
                Blink
              </span>
              <span className="text-[#51B504] font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] mr-[40px] text-left">
                Find
              </span>
            </div>
            <span className="lg:text-3xl xs:text-lg sm:text-xl font-bold mr-[40px]">
              We Make Solutions Simple
            </span>
            {/* Replicating the animation */}
            <span className="lg:text-3xl xs:text-lg font-bold mr-[40px] sm:text-xl">
              True Design is Invisible
            </span>
            <div className="flex items-center relative mr-[40px]">
              <img src="logo.svg" alt="logo" />
              <span
                className="font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] text-left"
                style={{ color: "rgb(2, 46, 80)" }}
              >
                Blink
              </span>
              <span className="text-[#51B504] font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] mr-[40px] text-left">
                Find
              </span>
            </div>
            <span className="lg:text-3xl xs:text-lg sm:text-xl font-bold mr-[40px]">
              We Make Solutions Simple
            </span>{" "}
            <span className="lg:text-3xl xs:text-lg font-bold mr-[40px] sm:text-xl">
              True Design is Invisible
            </span>
            <div className="flex items-center relative mr-[40px]">
              <img src="logo.svg" alt="logo" />
              <span
                className="font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] text-left"
                style={{ color: "rgb(2, 46, 80)" }}
              >
                Blink
              </span>
              <span className="text-[#51B504] font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] mr-[40px] text-left">
                Find
              </span>
            </div>
            <span className="lg:text-3xl xs:text-lg sm:text-xl font-bold mr-[40px]">
              We Make Solutions Simple
            </span>{" "}
            <span className="lg:text-3xl xs:text-lg font-bold mr-[40px] sm:text-xl">
              True Design is Invisible
            </span>
            <div className="flex items-center relative mr-[40px]">
              <img src="logo.svg" alt="" />
              <span
                className="font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] text-left"
                style={{ color: "rgb(2, 46, 80)" }}
              >
                Blink
              </span>
              <span className="text-[#51B504] font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] mr-[40px] text-left">
                Find
              </span>
            </div>
            <span className="lg:text-3xl xs:text-lg sm:text-xl font-bold mr-[40px]">
              We Make Solutions Simple
            </span>{" "}
            <span className="lg:text-3xl xs:text-lg font-bold mr-[40px] sm:text-xl">
              True Design is Invisible
            </span>
            <div className="flex items-center relative mr-[40px]">
              <img src="HeroImages/img/Logo.png" alt="" />
              <span
                className="font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] text-left"
                style={{ color: "rgb(2, 46, 80)" }}
              >
                Blink
              </span>
              <span className="text-[#51B504] font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] mr-[40px] text-left">
                Find
              </span>
            </div>
            <span className="lg:text-3xl xs:text-lg sm:text-xl font-bold mr-[40px]">
              We Make Solutions Simple
            </span>{" "}
            <span className="lg:text-3xl xs:text-lg font-bold mr-[40px] sm:text-xl">
              True Design is Invisible
            </span>
            <div className="flex items-center relative mr-[40px]">
              <img src="logo.svg" alt="logo" />
              <span
                className="font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] text-left"
                style={{ color: "rgb(2, 46, 80)" }}
              >
                Blink
              </span>
              <span className="text-[#51B504] font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] mr-[40px] text-left">
                Find
              </span>
            </div>
            <span className="lg:text-3xl xs:text-lg sm:text-xl font-bold mr-[40px]">
              We Make Solutions Simple
            </span>{" "}
            <span className="lg:text-3xl xs:text-lg font-bold mr-[40px] sm:text-xl">
              True Design is Invisible
            </span>
            <div className="flex items-center relative mr-[40px]">
              <img src="logo.svg" alt="logo" />
              <span
                className="font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] text-left"
                style={{ color: "rgb(2, 46, 80)" }}
              >
                Blink
              </span>
              <span className="text-[#51B504] font-poppins lg:text-3xl xs:text-lg sm:text-xl font-bold leading-[30px] mr-[40px] text-left">
                Find
              </span>
            </div>
            <span className="lg:text-3xl xs:text-lg sm:text-xl font-bold mr-[40px]">
              We Make Solutions Simple
            </span>
          </div>
        </div>
      </div>
      <div className="h-[5vh] bg-[#D1FFD1]"></div>
    </>
  );
}


export default Hero;