'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryCard = ({ iconSrc, title, description }) => (
    <div className="bg-[#EFF8E9] mb-4 pb-6 px-6 pt-10 text-left hover:shadow-xl transition h-auto rounded-[30px]">
      {/* Adjusted the icon container to align left */}
      <div className="bg-[#D1FFD1] p-4 rounded-[15px] w-[90px] flex justify-center items-center mb-4">
        <img src={iconSrc} alt={`${title} Icon`} className="icon m-2 h-10" />
      </div>
      <h3 className="text-2xl font-semibold my-2 text-left pt-2">{title}</h3>
      <p className="mb-[3rem] text-left text-lg pt-3">{description}</p>
      <button className="text-black hover:text-white mt-10 px-5 p-4 rounded-lg flex items-center hover:bg-blue-500 transition text-lg hover:shadow-lg hover:shadow-blue-500/50">
        Learn More
        <img
          src="./CategoriesImages/next.png"
          alt="arrow-right"
          className="arrow-right w-6 ml-2 mt-1 align-middle"
        />
      </button>
    </div>
  );
  
const Categories1 = () => {
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
  
  const categories = [
    {
      icon: './CategoriesImages/icons/catppuccin_android.svg',
      title: 'Android Development',
      description: 'Custom Android apps that boost user engagement and accelerate client growth.',
    },
    {
      icon: './CategoriesImages/icons/Vector.svg',
      title: 'Web Development',
      description: 'Delivering dynamic websites that drive client success and user satisfaction.',
    },
    {
      icon: './CategoriesImages/icons/bx_edit.svg',
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences for web and mobile applications.',
    },
    {
      icon: './CategoriesImages/icons/ph_open-ai-logo.svg',
      title: 'Artificial Intelligence',
      description: 'Implementing smart solutions that enhance decision-making and efficiency.',
    },
    {
      icon: './CategoriesImages/icons/clarity_block-solid.svg',
      title: 'Blockchain Solutions',
      description: 'Offering blockchain solutions that secure and streamline client transactions.',
    },
    {
      icon: './CategoriesImages/icons/ic_sharp-security.svg',
      title: 'Cyber Security',
      description: 'Providing robust security solutions to protect your digital assets and streamlinge client.',
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
    <div className="container mx-auto" id="Services">
      <div className="m-2 p-5">
        <h1 className="font-poppins text-[#51B504] text-sm my-8 mt-14 lg:text-xl font-medium lg:font-semibold">
          OUR EXPERTISE
        </h1>
        <p className="text-left font-semibold sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl mb-10 sm:w-full md:w-full lg:w-3/4 xl:w-2/4 antialiased">
          Solving real-world challenges with smart, life-enhancing solutions
        </p>
        {/* Expertise Slider */}
        <Slider {...settings} className="team-carousel">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              iconSrc={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories1;
