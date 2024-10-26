import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-100 py-12 px-8 md:px-20">
  <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
    {/* First column: Logo, Social Icons, and Text */}
    <div className="flex-1">
      <div className="flex items-center space-x-3">
        <img src="logo.png" alt="QuickFinds Logo" className="w-12" />
        <h3 className="text-2xl font-bold">
          Quick<span className="text-green-600">Finds</span>
        </h3>
      </div>
      {/* Text split into three lines with Poppins font */}
      <p className="mt-4 text-gray-700 font-normal">
        Empowering change through <br />
        innovative solutions that <br />
        shape a better future.
      </p>
      {/* Social Media Icons with #51B504 color */}
      <div className="flex space-x-4 mt-4">
        <a href="#">
          <img
            src="https://img.icons8.com/ios-filled/50/51B504/facebook.png"
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>
        <a href="#">
          <img
            src="https://img.icons8.com/ios-filled/50/51B504/twitter.png"
            alt="Twitter"
            className="w-8 h-8"
          />
        </a>
        <a href="#">
          <img
            src="https://img.icons8.com/ios-filled/50/51B504/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
        <a href="#">
          <img
            src="https://img.icons8.com/ios-filled/50/51B504/instagram-new.png"
            alt="Instagram"
            className="w-8 h-8"
          />
        </a>
      </div>
      {/* Copyright text directly below QuickFinds */}
      <p className="mt-16 text-gray-700">
        © 2024 QuickFinds. All rights reserved.
      </p>
    </div>
    {/* Second column: Quick Links */}
    <div className="flex-1">
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-3">
        <li>
          <a href="#" className="text-gray-700 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:underline">
            Our Expertise
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:underline">
            Our Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:underline">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    {/* Third column: Address */}
    <div className="flex-1">
      <h3 className="text-xl font-bold mb-4">Address</h3>
      <p className="text-gray-700">
        Design Agency Head Office
        <br />
        Airport Road
        <br />
        United Arab Emirates
      </p>
      {/* Privacy Terms aligned directly under Address */}
      <div className="mt-32 text-gray-700">
        <a href="#" className="hover:underline">
          Privacy
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          Terms
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer