import React from 'react'

const CategoriesMobile = () => {
  return (
    <div className='flex items-center justify-center mt-'>
    <div className='sm:hidden  '>
      <section className="text-center">
        {/* Header Section */}
        <h1 className="text-[#51B504] text-left text-sm font-medium mb-px">
          OUR EXPERTISE
        </h1>
        <p className="text-[#000000] text-left font-semibold leading-[23px] text-base mb-4 pr-12">
          Solving real-world challenges with smart life-enhancing solutions
        </p>
      </section>
      {/* Expertise Grid */}
      <div className="w-[345px] h-[289px]">
        <div className="grid grid-cols-3 gap-3 gap-y-2 place-items-center">
          {/* Android Development Card */}
          <div className="bg-[#EFF8E9] rounded-[9.6px] text-left h-[107px] w-[112px] hover:shadow-xl">
            <div className="bg-[#D1FFD1] rounded-[6.37px] m-[6px] gap-[3.18px] p-[9.55px] h-[29.3px] w-[29.61px]">
              <img src="./CategoriesImages/icons/catppuccin_android.svg" alt="Andriod icon" />
            </div>
            <h3 className="text-xs font-semibold ml-[6px]">Android Development</h3>
            <button className="text-[10px] text-left flex pt-1.5 text-black items-center rounded-[3.18px] gap-[3.18px] m-[6px] h-[18.55px] w-[77.65px]  ">
              <a href="#" target="_blank">
                Learn More
              </a>
              <img
                src="./CategoriesImages/next.png"
                alt="arrow-right"
                className="align-middle w-[7.09px] h-[6.46px]"
              />
            </button>
          </div>
          {/* Web Development Card  */}
          <div className="bg-[#EFF8E9] rounded-[9.6px] text-left h-[107px] w-[112px] hover:shadow-xl">
            <div className="bg-[#D1FFD1] rounded-[6.37px] m-[6px] gap-[3.18px] p-[9.55px] h-[29.3px] w-[29.61px]">
              <img src="./CategoriesImages/icons/Vector.svg" alt="WebDev Icon" />
            </div>
            <h3 className="text-xs font-semibold ml-[6px]">Web Development</h3>
            <button className="text-[10px] text-left flex pt-1.5 text-black items-center rounded-[3.18px] gap-[3.18px] m-[6px] h-[18.55px] w-[77.65px]  ">
              <a href="#" target="_blank">
                Learn More
              </a>
              <img
                src="./CategoriesImages/next.png"
                alt="arrow-right"
                className="align-middle w-[7.09px] h-[6.46px]"
              />
            </button>
          </div>
          {/* UI/UX Design Card */}
          <div className="bg-[#EFF8E9] rounded-[9.6px] text-left h-[107px] w-[112px] hover:shadow-xl">
            <div className="bg-[#D1FFD1] rounded-[6.37px] m-[6px] gap-[3.18px] p-[9.55px] h-[29.3px] w-[29.61px]">
              <img src="./CategoriesImages/icons/bx_edit.svg" alt="UI/UX Icon" />
            </div>
            <h3 className="text-xs font-semibold ml-[6px]">
              UI/UX <p>Design</p>
            </h3>
            <button className="text-[10px] text-left flex pt-1.5 text-black items-center rounded-[3.18px] gap-[3.18px] m-[6px] h-[18.55px] w-[77.65px]  ">
              <a href="#" target="_blank">
                Learn More
              </a>
              <img
                src="./CategoriesImages/next.png"
                alt="arrow-right"
                className="align-middle w-[7.09px] h-[6.46px]"
              />
            </button>
          </div>
          {/* Artificial Intelligence Card */}
          <div className="bg-[#EFF8E9] rounded-[9.6px] text-left h-[107px] w-[112px] hover:shadow-xl">
            <div className="bg-[#D1FFD1] rounded-[6.37px] m-[6px] gap-[3.18px] p-[9.55px] h-[29.3px] w-[29.61px]">
              <img src="./CategoriesImages/icons/ph_open-ai-logo.svg" alt="AI Icon" />
            </div>
            <h3 className="text-xs font-semibold ml-[6px]">
              Artificial Intelligence
            </h3>
            <button className="text-[10px] text-left flex pt-1.5 text-black items-center rounded-[3.18px] gap-[3.18px] m-[6px] h-[18.55px] w-[77.65px] ">
              <a href="#" target="_blank">
                Learn More
              </a>
              <img
                src="./CategoriesImages/next.png"
                alt="arrow-right"
                className="align-middle w-[7.09px] h-[6.46px]"
              />
            </button>
          </div>
          {/* Blockchain Solutions Card */}
          <div className="bg-[#EFF8E9] rounded-[9.6px] text-left h-[107px] w-[112px] hover:shadow-xl">
            <div className="bg-[#D1FFD1] rounded-[6.37px] m-[6px] gap-[3.18px] p-[9.55px] h-[29.3px] w-[29.61px]">
              <img
                src="./CategoriesImages/icons/clarity_block-solid.svg"
                alt="BlockChain Icon"
              />
            </div>
            <h3 className="text-xs font-semibold ml-[6px]">Blockchain Solutions</h3>
            <button className="text-[10px] text-left flex pt-1.5 text-black items-center rounded-[3.18px] gap-[3.18px] m-[6px] h-[18.55px] w-[77.65px] ">
              <a href="#" target="_blank">
                Learn More
              </a>
              <img
                src="./CategoriesImages/next.png"
                alt="arrow-right"
                className="align-middle w-[7.09px] h-[6.46px]"
              />
            </button>
          </div>
          {/* Cyber Security Card */}
          <div className="bg-[#EFF8E9] rounded-[9.6px] text-left h-[107px] w-[112px] hover:shadow-xl">
            <div className="bg-[#D1FFD1] rounded-[6.37px] m-[6px] gap-[3.18px] p-[9.55px] h-[29.3px] w-[29.61px]">
              <img src="./CategoriesImages/icons/ic_sharp-security.svg" alt="Android Icon" />
            </div>
            <h3 className="text-xs font-semibold ml-[6px]">
              Cyber <p>Security</p>
            </h3>
            <button className="text-[10px] text-left flex pt-1.5 text-black items-center rounded-[3.18px] gap-[3.18px] m-[6px] h-[18.55px] w-[77.65px] ">
              <a href="#" target="_blank">
                Learn More
              </a>
              <img
                src="/CategoriesImages/next.png"
                alt="arrow-right"
                className="align-middle w-[7.09px] h-[6.46px]"
              />
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default CategoriesMobile