import React from 'react'

const ContactUs = () => {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 w-full bg-[#F8FFF8]' id='Contact Us'>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="font-poppins text-[#51B504] text-sm lg:text-lg font-semibold uppercase tracking-wide mb-2">
            Contact Us
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#130F26] mb-4">
            We&apos;d love to hear from you
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Have a question or want to know more? Fill out the form below and we&apos;ll get back to you shortly.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-[#344054]">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-[#51B504] focus:border-[#51B504] sm:text-sm"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-[#344054]">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  autoComplete="family-name"
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-[#51B504] focus:border-[#51B504] sm:text-sm"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#344054]">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-[#51B504] focus:border-[#51B504] sm:text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-[#344054]">
                Phone number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <select
                    id="country-code"
                    name="country-code"
                    className="h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-[#344054] sm:text-sm rounded-md focus:ring-[#51B504] focus:border-[#51B504]"
                  >
                    <option>IND</option>
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full pl-24 px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-[#51B504] focus:border-[#51B504] sm:text-sm"
                  placeholder="96080-85106"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-[#344054]">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-[#51B504] focus:border-[#51B504] sm:text-sm"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <input
                  id="privacy-policy"
                  name="privacy-policy"
                  type="checkbox"
                  className="h-4 w-4 text-[#51B504] border-gray-300 rounded focus:ring-[#51B504]"
                  required
                />
                <label htmlFor="privacy-policy" className="ml-2 block text-sm text-[#4A5568]">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-medium text-[#51B504] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#51B504] hover:bg-[#45A003] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#51B504] transition duration-150 ease-in-out"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs