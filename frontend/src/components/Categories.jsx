import React from 'react'

const Categories = () => {
  return (
    <>
    <div className="container mx-auto">
  <div className="m-2 p-5">
    <h1 className="text-[#51B504] text-left text-xl font-medium my-8 mt-14 our-Expertise">
      OUR EXPERTISE
    </h1>
    <p className="text-left font-semibold sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl sm:pr-0 md:pr-12 lg:pr-12 xl:pr-12  mb-10 sm:w-full md:w-full lg:w-3/4 xl:w-2/4 antialiased">
      Solving real-world challenges with smart, life-enhancing solutions
    </p>
    {/* Expertise Grid */}
    <div className="grid gap-10 gap-y-5 border-solid border-green-600 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
      {/* Android Development Card */}
      <div className="bg-[#EFF8E9] mb-4 pb-6 px-6 pt-10 text-left hover:shadow-xl transition h-auto w-auto rounded-[30px]">
        <div className="bg-[#D1FFD1] p-4 rounded-[15px] w-[90px]">
          <img
            src="./CategoriesImages/icons/catppuccin_android.svg"
            alt="Android Icon"
            className="icon m-2 h-10"
          />
        </div>
        <h3 className="text-2xl font-semibold my-2 text-left pt-2 ">
          Android Development
        </h3>
        <p className="mb-[3rem] text-left text-lg pt-3 ">
          Custom Android apps that boost user engagement and accelerate client
          growth.
        </p>
        <button className="text-black hover:text-white mt-10 px-5 p-4 rounded-lg flex items-center hover:bg-blue-500 transition text-lg hover:shadow-lg hover:shadow-blue-500/50">
          Learn More
          <img
            src="./CategoriesImages/next.png"
            alt="arrow-right"
            className="arrow-right w-6 ml-2 mt-1 align-middle"
          />
        </button>
      </div>
      {/* Web Development Card */}
      <div className="bg-[#EFF8E9] mb-4 pb-6 px-6 pt-10 text-left hover:shadow-xl transition h-auto w-auto rounded-[30px]">
        <div className="bg-[#D1FFD1] p-4 rounded-[15px] w-[90px]">
          <img
            src="./CategoriesImages/icons/Vector.svg"
            alt="WebDev Icon"
            className="icon m-2 h-10"
          />
        </div>
        <h3 className="text-2xl font-semibold my-2 text-left pt-2 ">
          Web Development
        </h3>
        <p className="mb-[3rem] text-left text-lg pt-3">
          Delivering dynamic websites that drive client success and user
          satisfaction.
        </p>
        <button className="text-black hover:text-white mt-10 px-5 p-4 rounded-lg flex items-center hover:bg-blue-500 transition text-lg hover:shadow-lg hover:shadow-blue-500/50">
          Learn More
          <img
            src="./CategoriesImages/next.png"
            alt="arrow-right"
            className="arrow-right w-6 ml-2 mt-1 align-middle"
          />
        </button>
      </div>
      {/* UI/UX Design Card */}
      <div className="bg-[#EFF8E9] mb-4 pb-6 px-6 pt-10 text-left hover:shadow-xl transition h-auto w-auto rounded-[30px]">
        <div className="bg-[#D1FFD1] p-4 rounded-[15px] w-[90px]">
          <img
            src="./CategoriesImages/icons/bx_edit.svg"
            alt="UI/UX Icon"
            className="icon m-2 h-10"
          />
        </div>
        <h3 className="text-2xl font-semibold my-2 text-left pt-2 ">
          UI/UX Design
        </h3>
        <p className="mb-[3rem] text-left text-lg pt-3">
          Delivering dynamic websites that drive client success and user
          satisfaction.
        </p>
        <button className="text-black hover:text-white mt-10 px-5 p-4 rounded-lg flex items-center hover:bg-blue-500 transition text-lg hover:shadow-lg hover:shadow-blue-500/50">
          Learn More
          <img
            src="./CategoriesImages/next.png"
            alt="arrow-right"
            className="arrow-right w-6 ml-2 mt-1 align-middle"
          />
        </button>
      </div>
      {/* Artificial Intelligence Card */}
      <div className="bg-[#EFF8E9] mb-4 pb-6 px-6 pt-10 text-left hover:shadow-xl transition h-auto w-auto rounded-[30px]">
        <div className="bg-[#D1FFD1] p-4 rounded-[15px] w-[90px]">
          <img
            src="./CategoriesImages/icons/ph_open-ai-logo.svg"
            alt="AI Icon"
            className="icon m-2 h-10"
          />
        </div>
        <h3 className="text-2xl font-semibold my-2 text-left pt-2 ">
          Artificial Intelligence
        </h3>
        <p className="mb-[3rem] text-left text-lg pt-3">
          Delivering dynamic websites that drive client success and user
          satisfaction.
        </p>
        <button className="text-black hover:text-white mt-10 px-5 p-4 rounded-lg flex items-center hover:bg-blue-500 transition text-lg hover:shadow-lg hover:shadow-blue-500/50">
          Learn More
          <img
            src="./CategoriesImages/next.png"
            alt="arrow-right"
            className="arrow-right w-6 ml-2 mt-1 align-middle"
          />
        </button>
      </div>
      {/* Blockchain Solutions Card */}
      <div className="bg-[#EFF8E9] mb-4 pb-6 px-6 pt-10 text-left hover:shadow-xl transition h-auto w-auto rounded-[30px]">
        <div className="bg-[#D1FFD1] p-4 rounded-[15px] w-[90px]">
          <img
            src="./CategoriesImages/icons/clarity_block-solid.svg"
            alt="BlockChain Icon"
            className="icon m-2 h-10"
          />
        </div>
        <h3 className="text-2xl font-semibold my-2 text-left pt-2">
          Blockchain Solutions
        </h3>
        <p className="mb-[3rem] text-left text-lg pt-3">
          Offering blockchain solutions that secure and streamline client
          transactions.
        </p>
        <button className="text-black hover:text-white mt-10 px-5 p-4 rounded-lg flex items-center hover:bg-blue-500 transition text-lg hover:shadow-lg hover:shadow-blue-500/50">
          Learn More
          <img
            src="./CategoriesImages/next.png"
            alt="arrow-right"
            className="arrow-right w-6 ml-2 mt-1 align-middle"
          />
        </button>
      </div>
      {/* Cyber Security Card */}
      <div className="bg-[#EFF8E9] mb-4 pb-6 px-6 pt-10 text-left hover:shadow-xl transition h-auto w-auto rounded-[30px]">
        <div className="bg-[#D1FFD1] p-4 rounded-[15px] w-[90px]">
          <img
            src="./CategoriesImages/icons/ic_sharp-security.svg"
            alt="Android Icon"
            className="icon m-2 h-10"
          />
        </div>
        <h3 className="text-2xl font-semibold my-2 text-left pt-2">
          Cyber Security
        </h3>
        <p className="mb-[3rem] text-left text-lg pt-3">
          Offering blockchain solutions that secure and streamline client
          transactions.
        </p>
        <button className="text-black hover:text-white mt-10 px-5 p-4 rounded-lg flex items-center hover:bg-blue-500 transition text-lg hover:shadow-lg hover:shadow-blue-500/50">
          Learn More
          <img
            src="./CategoriesImages/next.png"
            alt="arrow-right"
            className="arrow-right w-6 ml-2 mt-1 align-middle"
          />
        </button>
      </div>
    </div>
  </div>
</div>
{/* //mobile view */}


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
</>

  )
}

export default Categories