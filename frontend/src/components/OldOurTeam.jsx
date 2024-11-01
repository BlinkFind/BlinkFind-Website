import Image from "next/image"; // Optimized image loading
import React from "react"; // Import React

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Faiz Ur Rehman",
      role: "Lead Web Developer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/faiz-ur-rehman-400b36247",
        instagram: "https://www.instagram.com/iamfaiiizzzz/",
        facebook: "https://m.facebook.com/100069625092320/",
      },
      description:
        "Hi, I’m Faiz Ur Rehman, a Full Stack Developer and freelancer, focused on delivering top-quality web solutions for clients.",
    },
    // Add more members as needed...
    {
      name: "Nitendra Singh",
      role: "Marketing Leadr",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/nitendra-singh-66018225b",
        instagram:
          "https://www.instagram.com/nitendra__here___?igsh=YzljYTk1ODg3Zg==",
        facebook:
          "https://www.facebook.com/share/nF5RyqiTx4qQjCVS/?mibextid=qi2Omg",
      },
      description:
        "Hi, I'm Nitendra Singh, currently working as a Marketing lead at BlinkFind apart from that I am CSE final student currently building my career in software development.",
    },
    {
      name: "Meeran Husain",
      role: "Front-end Web developer lead",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/meeran-husain/",
        instagram:
          "https://www.instagram.com/sk_meeran07?igsh=MWZtMXM5bXhmcnMyOQ==",
      },
      description:
        "I’m a front-end web developer who enjoys crafting engaging and user-friendly websites.",
    },
    {
      name: "Abdullah Khan",
      role: "Android Lead",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
        github: "/OurTeamImages/github.svg",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/abdullahkhanspn/",
        instagram: "https://www.instagram.com/abdullahkhanspn4",
        facebook: "https://www.facebook.com/profile.php?id=100006949605682",
        github: "https://github.com/Abdullahkhanspn",
      },

      description:
        "As the founder of BlinkFind, I’m Abdullah, and I’ve turned my passion for technology into a mission to help businesses grow.",
    },
    {
      name: "Hamza Khan",
      role: "Penetration Tester",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
      },
      socialLinks: {
        linkedin: "www.linkedin.com/in/hamzakhanspn",
        instagram: "https://www.instagram.com/hamzakhan7437/",
        facebook: "https://www.facebook.com/profile.php?id=100014188171817",
      },
      description:
        "Experienced penetration tester committed to securing websites and applications through expert bug discovery and vulnerability analysis",
    },
    {
      name: "Abdul Arslan",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/abdul-arslan-9014b7227/",
      },
      description:
        "Final-year student with 1.5 years of UX/UI design experience from internships, personal projects, and freelance work",
    },
    {
      name: "Mandavi Vajpayee",
      role: "LEAD HR MANAGER",
      imageSrc: "/OurTeamImages/profile.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
      },
      socialLinks: {
        linkedin: "www.linkedin.com/in/mandavi-vajpayee",
      },
      description:
        "Results-driven HR professional with experience in talent management, employee engagement, and communication training",
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

                <div className="flex space-x-4 items-center mb-2 mt-4">
                  {member.social.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={member.social.linkedin}
                        alt="LinkedIn"
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={member.social.instagram}
                        alt="Instagram"
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={member.social.facebook}
                        alt="Facebook"
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={member.social.github}
                        alt="GitHub"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </a>
                  )}
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
