"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam1 = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const teamMembers = [
    {
      name: "Faiz Ur Rehman",
      role: "Web Developer",
      imageSrc: "/OurTeamImages/avatar/faiz.jpg", // Replace with your local image
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
        "Hi, I’m a Full Stack Developer and freelancer, focused on delivering top-quality web solutions for clients.",
    },
    // Add more members as needed...
    {
      name: "Nitendra Singh",
      role: "Marketing Lead",
      imageSrc: "/OurTeamImages/avatar/nitendra.jpg", // Replace with your local image
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
        "Hi, I'm a Marketing lead at QuickFinds and a CSE final year student building my career in software development.",
    },
    {
      name: "Meeran Husain",
      role: "Front-end Web developer",
      imageSrc: "/OurTeamImages/avatar/meeran.jpg", // Replace with your local image
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
      imageSrc: "/OurTeamImages/avatar/abdullah.jpg", // Replace with your local image
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
        "As the founder of QuickFinds, I’m Abdullah, and I’ve turned my passion for technology into a mission to help businesses grow.",
    },
    {
      name: "Hamza Khan",
      role: "Penetration Tester",
      imageSrc: "/OurTeamImages/avatar/hamzah.jpg", // Replace with your local image
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
        "Experienced penetration tester committed to securing websites and applications through vulnerability analysis",
    },
    {
      name: "Abdul Arslan",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/avatar/arslan.png", // Replace with your local image
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
      role: "HR Manager",
      imageSrc: "/OurTeamImages/avatar/vajpayee.jpg", // Replace with your local image
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
      },
      socialLinks: {
        linkedin: "www.linkedin.com/in/mandavi-vajpayee",
      },
      description:
        "HR professional with experience in talent management, employee engagement, and communication training",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-[#F8FFF8]" id="our-team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="font-poppins text-[#51B504] text-sm my-8 mt-14 lg:text-xl font-medium lg:font-semibold">
            OUR TEAM
          </h2>
          <p className="text-left font-semibold sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl sm:pr-0 md:pr-12 lg:pr-12 xl:pr-12 mb-20 sm:w-full md:w-full lg:w-3/4 xl:w-2/4 antialiased">
            Meet The Team Driving Our Growth And Customer Satisfaction
          </p>
        </div>

        <Slider {...settings} className="team-carousel">
          {teamMembers.map((member, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-2xl flex flex-col h-full">
                <div className="w-full h-72 relative overflow-hidden">
                  <Image
                    className="object-cover object-top rounded-t-2xl"
                    src={member.imageSrc}
                    alt={member.name}
                    layout="fill"
                  />
                </div>

                <div className="flex flex-col justify-between p-4 rounded-b-2xl bg-[#EFF8E9] flex-grow">
                  <div>
                    <h3 className="text-2xl font-semibold text-black">
                      {member.name}
                    </h3>
                    <p className="text-black mt-2 font-semibold">
                      {member.role}
                    </p>
                    <p className="mt-1 text-black">{member.description}</p>
                  </div>

                  <div className="flex space-x-4 items-center mt-4">
                    {Object.entries(member.social).map(
                      ([platform, src]) =>
                        member.socialLinks[platform] && ( // Check if link is available
                          <a
                            key={platform}
                            href={member.socialLinks[platform]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7"
                          >
                            <Image
                              src={src}
                              alt={platform}
                              width={28}
                              height={28}
                              className="object-cover"
                            />
                          </a>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurTeam1;
