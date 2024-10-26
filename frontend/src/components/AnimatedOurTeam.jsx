'use client'

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teamMembers = [
    {
      name: "Ansh Kumar",
      role: "UI/UX Designer",
      imageSrc: "/OurTeamImages/profile.jpg",
      social: {
        linkedin: "/OurTeamImages/linkedin.svg",
        instagram: "/OurTeamImages/instagram.svg",
        facebook: "/OurTeamImages/facebook.svg",
        github: "/OurTeamImages/github.svg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor eiusmod tempor.",
    },
    // ... (repeat for all 6 team members)
    {
        name: "arsalan",
        role: "UI/UX Designer",
        imageSrc: "/OurTeamImages/profile.jpg",
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
        name: "AMeeran",
        role: "UI/UX Designer",
        imageSrc: "/OurTeamImages/profile.jpg",
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
        name: "Faiz",
        role: "UI/UX Designer",
        imageSrc: "/OurTeamImages/profile.jpg",
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
        name: "Abdullah",
        role: "UI/UX Designer",
        imageSrc: "/OurTeamImages/profile.jpg",
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
        name: "Saddique",
        role: "UI/UX Designer",
        imageSrc: "/OurTeamImages/profile.jpg",
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
        name: "Jasim",
        role: "UI/UX Designer",
        imageSrc: "/OurTeamImages/profile.jpg",
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
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
                    <p className="text-black mt-2 font-semibold">{member.role}</p>
                    <p className="mt-1 text-black">{member.description}</p>
                  </div>

                  <div className="flex space-x-4 items-center mt-4">
                    {Object.entries(member.social).map(([platform, src]) => (
                      <a
                        key={platform}
                        href={`https://${platform}.com`}
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
                    ))}
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