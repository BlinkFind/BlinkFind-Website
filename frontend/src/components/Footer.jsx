import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#D8FFD0] py-12 px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-center gap-x-8 space-y-8 md:space-y-0">
        {/* First column: Logo, Social Icons, and Text */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-0">
            <img src="/logo.svg" alt="QuickFinds Logo" className="w-14" />
            <h3 className="text-2xl font-extrabold text-[#052d55]">
              Quick<span className="text-green-600 font-bold">Finds</span>
            </h3>
          </div>
          <p className="mt-4 text-gray-700 font-normal text-center md:text-left">
            Empowering change through <br />
            innovative solutions that <br />
            shape a better future.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/people/QuickFind/61566368033281/" className='bg-[#51B504] p-[11px] rounded-full'>
              <img src="/FooterImages/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://x.com/QucikFind" className='bg-[#51B504] p-[11px] rounded-full'>
              <img src="/FooterImages/twitter.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/quickfinding" className='bg-[#51B504] p-[11px] rounded-full'>
              <img src="/FooterImages/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/quick_find_app" className='bg-[#51B504] p-[11px] rounded-full'>
              <img src="/FooterImages/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            {/* <a href="https://www.youtube.com/@QuickFinding" className='bg-[#51B504] p-[11px] rounded-full'>
              <img src="/FooterImages/instagram.svg" alt="Youtube" className="w-5 h-5" />
            </a> */}
          </div>
          <p className="mt-16 text-gray-700 text-center md:text-left">
            © 2024 QuickFinds. All rights reserved.
          </p>
        </div>
        {/* Second column: Quick Links */}
        <div className="flex-1 flex flex-col lg:pl-48 items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#Home" className="text-gray-700 hover:underline">Home</a></li>
            <li><a href="/aboutus" className="text-gray-700 hover:underline">About Us</a></li>
            <li><a href="#Services" className="text-gray-700 hover:underline">Our Expertise</a></li>
            <li><a href="#Projects" className="text-gray-700 hover:underline">Our Projects</a></li>
            <li><a href="#Contact Us" className="text-gray-700 hover:underline">Contact Us</a></li>
          </ul>
        </div>
        {/* Third column: Address */}
        <div className="flex-1 flex flex-col items-center md:items-start lg:pl-4">
          <h3 className="text-xl font-bold mb-4">Address</h3>



          <p className="text-gray-700 text-center md:text-left">
          QuickFinds Head Office
            <br />
            Near Ryan International School
            <br />
            India
          </p>
          <div className="mt-32 text-gray-700">
            <a href="#" className="hover:underline">Privacy</a>{" "}
            |
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
