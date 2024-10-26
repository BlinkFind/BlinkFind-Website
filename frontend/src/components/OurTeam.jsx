import Image from "next/image"; // Optimized image loading
import React from "react"; // Import React

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Ansh Kumar",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
        github: "/OurTeamImages/github.svg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor eiusmod tempor.",
    },
    // Add more members as needed...
    {
      name: "Ansh Kumar",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
        github: "/OurTeamImages/github.svg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor eiusmod tempor.",
    },
    {
      name: "Ansh Kumar",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
        github: "/OurTeamImages/github.svg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor eiusmod tempor.",
    },
    {
      name: "Ansh Kumar",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
        github: "/OurTeamImages/github.svg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor eiusmod tempor.",
    },
    {
      name: "Ansh Kumar",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
        github: "/OurTeamImages/github.svg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor eiusmod tempor.",
    },
    {
      name: "Ansh Kumar",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
        github: "/OurTeamImages/github.svg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor eiusmod tempor.",
    },
  ];

  return (
    <section className="py-12 bg-[#F8FFF8]" id="our-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="font-poppins text-[#51B504] text-sm my-8 mt-14 lg:text-xl font-medium lg:font-semibold">
            OUR TEAM
          </h1>
          <p className="text-left font-semibold sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl sm:pr-0 md:pr-12 lg:pr-12 xl:pr-12 mb-20 sm:w-full md:w-full lg:w-3/4 xl:w-2/4 antialiased">
            Meet The Team Driving Our Growth And Customer Satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl flex flex-col">
              {/* Image in the upper section */}
              <div className="w-74 h-72 relative overflow-hidden">
                <Image
                  className="object-cover object-top h-full w-full rounded-t-2xl"
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                />
              </div>

              <div className="flex flex-wrap justify-between p-4 rounded-b-2xl bg-[#EFF8E9]">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-black mt-2 font-semibold">{member.role}</p>
                  <p className="mt-1 text-black">{member.description}</p>
                </div>

                {/* Social Icons Section */}
                <div className="flex space-x-4 items-center mb-2 mt-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-7 h-7">
                      <Image
                        src={member.social.linkedin}
                        alt="LinkedIn"
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-7 h-7">
                      <Image
                        src={member.social.instagram}
                        alt="Instagram"
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-7 h-7">
                      <Image
                        src={member.social.facebook}
                        alt="Facebook"
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8">
                      <Image
                        src={member.social.github}
                        alt="GitHub"
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

export default OurTeam;
