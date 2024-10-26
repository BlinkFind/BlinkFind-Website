import Image from "next/image";
import React from "react";

const ShowcaseProject = () => {
  return (
    <>
      <div className="lg:mt-24 lg:ml-28 mt-12 ml-4 mr-4 lg:mr-28 lg:mb-24">
        <h1 className="font-poppins text-[#51B504] text-sm lg:text-lg font-medium lg:font-semibold ">
          OUR PROJECTS
        </h1>
        <h2 className="hidden lg:block font-bold text-xl lg:text-3xl   lg:mt-8">
          <span mt-1> We provide the Perfect Solution</span> <br />
          <span className="lg:mt-2">to your business growth</span>
        </h2>

        <h2 className="lg:hidden font-bold text-xl lg:text-3xl   lg:mt-8">
          <span mt-1>
            {" "}
            We provide the Perfect solution to your business growth
          </span>
        </h2>

        <Image
          className="hidden lg:block mt-16"
          src="/showcase.png"
          height={600}
          width={1240}
        />

        <Image
          className="lg:hidden  mt-4"
          src="/showcasemobile.png"
          height={600}
          width={500}
        />

        <h1 className=" font-bold text-xl lg:text-[40px]  lg:mt-14 mt-4">
          Digital Marketing Agency Website
        </h1>

        <p className="lg:hidden text-sm mt-2 lg:mt-8">
          This is a website for a client who want to achieve their goals and
          meet their users needs while also increasing their reach. Accross all
          platforms. This is a website rebrand
        </p>
        <div className="hidden lg:block text-2xl mt-8 font-poppins">
          <p>This is a website for a client who want to achieve their</p>
          <p>goals and meet their users needs while also</p>
          <p>increasing their reach. Accross all platforms. This is a</p>
          <p>website rebrand</p>
        </div>
      </div>
    </>
  );
};

export default ShowcaseProject;
