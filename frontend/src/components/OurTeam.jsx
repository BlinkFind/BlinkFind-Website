import Image from "next/image"; // Optimized image loading
import localFont from "next/font/local"; // Font local import if required
import React from "react"; // Import React
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Ansh Kumar",
    role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin:"/OurTeamImages/linkedin.jpg",
        instagram: "/OurTeamImages/instagram.jpg",
        facebook: "/OurTeamImages/facebook.jpg",
        github: "/OurTeamImages/github.jpg",
      },
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Ansh Kumar",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg",
      social: {
        linkedin: "/OurTeamImages/linkedin.jpg",
        instagarm: "/OurTeamImages/instagram.jpg",
        facebook: "/OurTeamImages/facebook.jpg",
        github: "/OurTeamImages/github.jpg",
  
      },
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Ansh Kumar",
    role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg",
      social: {
        linkedin: "/OurTeamImages/linkedin.jpg",
        instagarm: "/OurTeamImages/instagram.jpg",
        facebook: "/OurTeamImages/facebook.jpg",
        github: "/OurTeamImages/github.jpg",
      },
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
      {
        name: "Ansh Kumar",
        role: "UI/UX Designer",
        imageSrc: "/OurTeamImages/profile.jpg",
        social: {
          linkedin: "/OurTeamImages/linkedin.jpg",
          instagarm: "/OurTeamImages/instagram.jpg",
          facebook:"/OurTeamImages/facebook.jpg",
          github: "/OurTeamImages/github.jpg",
        },
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Ansh Kumar",
    role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg",
      social: {
        linkedin: "/OurTeamImages/profile.jpg",
        instagram: "/OurTeamImages/instagram.jpg",
        facebook:"/OurTeamImages/facebook.jpg",
        github: "/OurTeamImages/github.jpg",
      },
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Ansh Kumar",
    role: "UI/UX Designer",
    imageSrc: "/OurTeamImages/profile.jpg",
    social: {
      linkedin: "/OurTeamImages/profile.jpg",
      instagarm: "/OurTeamImages/instagram.jpg",
      facebook:"/OurTeamImages/facebook.jpg",
      github: "/OurTeamImages/github.jpg",
    },
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
  ];

  console.log("data",teamMembers)

  return (
    <section className="py-12 bg-white" id="our-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
        <h1 className="font-poppins text-[#51B504] my-8 4 text-sm lg:text-xl font-medium lg:font-semibold ">
          OUR TEAM
        </h1>
          <h4 className="mt-2 text-3xl font-extrabold text-gray-900">
            Meet The Team Driving Our Growth</h4>
            <h4 className="mt-2 text-3xl font-extrabold text-gray-900">
              And Customer Satisfaction
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col">
              {/* Image in the upper section */}
              <div className="w-74 h-64 relative">
                <Image
                  className="object-cover h-full w-full rounded-t-lg"  // Ensures image fills half the container
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
        
                  />
                </div>
                <div class="flex flex-wrap justify-center mt-12">
                <div className="h-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.description}</p>
                </div>
                <div className="p-4 bg-gray-50 flex justify-center space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="w-8 h-8">
              <Image
                 src={member.social.linkedin}
                alt="imagessrc"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="w-8 h-8">
              <Image
                 src={member.social.instagram}
                alt="imagessrc"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="w-8 h-8">
              <Image
                 src={member.social.facebook}
                alt="imagessrc"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <div className="w-8 h-8">
              <Image
                 src={member.social.github}
                alt="imagessrc"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default OurTeam;