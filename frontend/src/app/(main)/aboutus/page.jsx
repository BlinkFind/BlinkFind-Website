import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Abdullah Khan",
    role: "Founder & CEO",
    bio: "As the founder of BlinkFind, I’m Abdullah, and I’ve turned my passion for technology into a mission to help businesses grow.",
    image: "/OurTeamImages/avatar/abdullah.jpg",
    linkedin: "https://www.linkedin.com/in/abdullahkhanspn/",
    github: "https://github.com/Abdullahkhanspn",
  },

  // Add more team members as needed
];

const AboutUs = () => {
  return (
    <div className="bg-[#F8FFF8] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#052d55] mb-12">
          <span className="text-black font-semibold">About</span> Quick
          <span className="text-[#51B504]">Finds</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#51B504] mb-4">
              Overview
            </h2>
            <p className="text-[#4A5568] mb-4">
            BlinkFind is transforming into a cutting-edge startup dedicated
              to identifying and solving real-world problems through innovative
              solutions. Our focus is on addressing challenges faced by users,
              businesses, and communities by developing faster, more secure, and
              optimized applications, websites, AI-driven solutions, and more.
            </p>
            <p className="text-[#4A5568] mb-4">
              At BlinkFind, we are committed to rapidly finding, fixing, and
              improving solutions, whether through technology, design, or
              creative problem-solving. Our platform empowers users to tackle
              everyday inefficiencies and bring transformative ideas to life,
              while also creating opportunities in software development, tech
              innovation, and job creation.
            </p>
            <p className="text-[#4A5568]">
              With a future-focused approach, BlinkFind is not just solving
              problems—we&apos;re building a smarter, more efficient world. Our
              agile team is ready to collaborate, innovate, and redefine how
              real-world challenges are tackled.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/aboutus.jpeg"
              alt="BlinkFind Innovation"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#51B504] mb-4">
              Vision
            </h2>
            <p className="text-[#4A5568]">
              To become a global leader in innovative solutions by transforming
              real-world challenges into opportunities for growth, technological
              advancement, and efficiency. We aim to build a smarter, faster,
              and more connected world, empowering individuals and businesses to
              overcome inefficiencies and embrace progress through cutting-edge
              technology and creative problem-solving.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#51B504] mb-4">
              Mission
            </h2>
            <p className="text-[#4A5568]">
              At BlinkFind, our mission is to identify and solve real-world
              problems through the power of technology, design, and innovation.
              We are dedicated to creating optimized, secure, and scalable
              solutions that drive positive impact for users, businesses, and
              communities. By continuously improving and evolving, we strive to
              deliver faster, smarter, and more accessible applications,
              websites, and AI-driven solutions, all while fostering a culture
              of collaboration, creativity, and growth in the tech ecosystem.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#51B504] mb-4 text-center">
            Our Founder
          </h2>
          <p className="text-[#4A5568] mb-8 text-center">
            Meet the visionary behind BlinkFind, a creative and solution-driven
            individual at the core of our innovations. Their expertise in
            software development, design, and AI drives our mission to solve
            real-world challenges with dedication and passion.
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
              <div className="flex justify-center mb-4">
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-[#130F26] mb-1">
                {teamMembers[0].name}
              </h3>
              <p className="text-sm text-center text-[#51B504] mb-2">
                {teamMembers[0].role}
              </p>
              <p className="text-sm text-center text-[#4A5568] mb-4">
                {teamMembers[0].bio}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href={teamMembers[0].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#51B504] hover:text-[#45A003]"
                >
                  {/* LinkedIn Icon */}
                </a>
                <a
                  href={teamMembers[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#51B504] hover:text-[#45A003]"
                >
                  {/* GitHub Icon */}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-24 h-24 relative">
            <Image
              src="/logo.svg"
              alt="BlinkFind Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
