import React from 'react'

const ContactUs = () => {
  return (
    <div className='py-[60px] px-[2rem] w-full flex items-center justify-center mb-8' id='Contact Us'>
      <div className="w-full max-w-md mx-2">
        <div>
          <h1 className="font-poppins text-[#51B504] text-sm lg:text-xl font-medium lg:font-semibold text-center my-8">
            CONTACT US
          </h1>
          <h2 className="flex w-full text-center text-[#130F26] text-[24px] font-medium mb-1 leading-[32px] sm:text-4xl sm:leading-[36px] sm:font-semibold">
            We&apos;d love to hear from you
          </h2>
          <h2 className="text-center text-[#130F26] text-[24px] font-medium sm:mb-[44px] mb-[24px] leading-[32px] sm:text-4xl sm:leading-[36px] sm:font-semibold">
            Please fill out this form
          </h2>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-[2.6rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem] sm:gap-8">
              <div>
                <label htmlFor="first-name" className="block poppins-thin text-[#344054] text-sm font-medium ">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="First name"
                  autoComplete="given-name"
                  className="mt-1 block w-full px-4 pt-4 pb-[12px] bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#51B504] sm:text-sm placeholder-[#667085] placeholder:text-[16px] placeholder:font-normal"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block poppins-thin text-[#344054] text-sm font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Last name"
                  autoComplete="family-name"
                  className="mt-1 block w-full px-4 pt-4 pb-[12px] bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#51B504] sm:text-sm placeholder-[#667085] placeholder:text-[16px] placeholder:font-normal"
                  required=""
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block poppins-thin text-[#344054] text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                className="mt-1 block w-full px-4 pt-4 pb-[12px] bg-white border border-gray-300 focus:outline-none rounded-lg focus:border-[#51B504] sm:text-sm placeholder-[#667085] placeholder:text-[16px] placeholder:font-normal"
                required=""
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium poppins-thin text-[#344054] mb-1">
                Phone number
              </label>
              <div className="flex border border-gray-300 rounded-md focus-within:border-[#51B504]">
                <select
                  id="country-code"
                  className="bg-white border border-r-0 rounded-l-md pl-2 text-md text-[#344054] focus:outline-none border-none font-normal"
                >
                  <option value={+91}>IND</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 96080-85106"
                  className="block w-full px-4 pt-4 pb-[12px] bg-white border border-l-0 rounded-r-md sm:text-sm focus:outline-none border-none placeholder-[#667085] placeholder:text-[16px] placeholder:font-normal"
                  required=""
                />
              </div>
            </div>
            <div>
              <label htmlFor="about" className="block text-sm font-medium text-[#344054] poppins-thin">
                Message
              </label>
              <textarea
                id="about"
                name="about"
                rows={20}
                cols={50}
                className="mt-1 block w-full h-[128px] px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-[#51B504] sm:text-sm resize-none"
                defaultValue=""
              />
            </div>
            <div className="flex items-center pt-0">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 text-[#51B504] border-gray-300 rounded"
              />
              <label
                htmlFor="comments"
                className="ml-3 text-md font-medium text-[#344054] cursor-pointer poppins-thin"
              >
                You agree to our friendly
                <a href="#" className="text-[#344054] underline poppins-thin font-light pl-1">
                  privacy policy
                </a>
              </label>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="w-full bg-[#51B504] text-white px-6 py-3 rounded-md shadow-sm font-normal hover:bg-[#51B504] poppins-thin"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
