import React from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Software Developer',
    bio: 'Experienced in building scalable web applications.',
    image: '/OurTeamImages/profile.jpg',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    bio: 'Passionate about creating intuitive user experiences.',
    image: '/OurTeamImages/profile.jpg',
    linkedin: 'https://linkedin.com/in/janesmith',
    github: 'https://github.com/janesmith',
  }, {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    bio: 'Passionate about creating intuitive user experiences.',
    image: '/OurTeamImages/profile.jpg',
    linkedin: 'https://linkedin.com/in/janesmith',
    github: 'https://github.com/janesmith',
  },
  // Add more team members as needed
]

const AboutUs = () => {
  return (
    <div className="bg-[#F8FFF8] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#052d55] mb-12"><span className='text-black font-semibold'>About</span> Quick<span className='text-[#51B504]'>Finds</span></h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#51B504] mb-4">Overview</h2>
            <p className="text-[#4A5568] mb-4">
              QuickFinds is transforming into a cutting-edge startup dedicated to identifying and solving real-world problems through innovative solutions. Our focus is on addressing challenges faced by users, businesses, and communities by developing faster, more secure, and optimized applications, websites, AI-driven solutions, and more.
            </p>
            <p className="text-[#4A5568] mb-4">
              At QuickFinds, we are committed to rapidly finding, fixing, and improving solutions, whether through technology, design, or creative problem-solving. Our platform empowers users to tackle everyday inefficiencies and bring transformative ideas to life, while also creating opportunities in software development, tech innovation, and job creation.
            </p>
            <p className="text-[#4A5568]">
              With a future-focused approach, QuickFinds is not just solving problems—we&apos;re building a smarter, more efficient world. Our agile team is ready to collaborate, innovate, and redefine how real-world challenges are tackled.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/aboutus.jpeg"
              alt="QuickFinds Innovation"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#51B504] mb-4">Vision</h2>
            <p className="text-[#4A5568]">
              To become a global leader in innovative solutions by transforming real-world challenges into opportunities for growth, technological advancement, and efficiency. We aim to build a smarter, faster, and more connected world, empowering individuals and businesses to overcome inefficiencies and embrace progress through cutting-edge technology and creative problem-solving.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#51B504] mb-4">Mission</h2>
            <p className="text-[#4A5568]">
              At QuickFinds, our mission is to identify and solve real-world problems through the power of technology, design, and innovation. We are dedicated to creating optimized, secure, and scalable solutions that drive positive impact for users, businesses, and communities. By continuously improving and evolving, we strive to deliver faster, smarter, and more accessible applications, websites, and AI-driven solutions, all while fostering a culture of collaboration, creativity, and growth in the tech ecosystem.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#51B504] mb-4">Our Team</h2>
          <p className="text-[#4A5568] mb-8">
            Our team at QuickFinds consists of talented, creative, and solution-driven individuals who are the backbone of our innovation. We bring together experts from software development, design, AI, and more to tackle real-world challenges with dedication and passion. Get to know the people behind the scenes!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-[#130F26] mb-1">{member.name}</h3>
                <p className="text-sm text-center text-[#51B504] mb-2">{member.role}</p>
                <p className="text-sm text-center text-[#4A5568] mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#51B504] hover:text-[#45A003]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-[#51B504] hover:text-[#45A003]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-24 h-24 relative">
            <Image
              src="/logo.svg"
              alt="QuickFinds Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs