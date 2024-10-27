import Image from "next/image";
import React from "react";

const ShowcaseProject = () => {
  return (
    <div id="Projects">
      <div className="pt-20 md:pt-16 lg:pt-24 ml-4 md:ml-10 lg:ml-28 mr-4 md:mr-10 lg:mr-28 ">
        <h1 className="font-poppins text-[#51B504] text-sm md:text-lg lg:text-xl font-medium lg:font-semibold">
          OUR PROJECTS
        </h1>
        <h2 className="hidden md:block font-bold text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 lg:mt-8">
          <span>We provide the Perfect Solution</span>
          <br />
          <span>to your business growth</span>
        </h2>

        <h2 className="md:hidden font-bold text-xl mt-4">
          We provide the Perfect solution to your business growth
        </h2>

        <Image
          className="hidden md:block mt-10 md:mt-8 lg:mt-16"
          src="/projectShowcase.png"
          height={600}
          width={1240}
          alt="Project Showcase Desktop"
        />
        <Image
          className="md:hidden mt-4"
          src="/projectShowcaseMobile.png"
          height={600}
          width={500}
          alt="Project Showcase Mobile"
        />

<h2 className="hidden md:block font-bold text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 lg:mt-8">
        Lost Your Car, Bike, or Even Loved One? What If You Could Find Them Faster?
        </h2>

        <p className="md:hidden text-sm mt-2 lg:mt-8">
         Developed a solution to revolutionise crime prevention and it could cut recovery time by 60% ! Faster. We all know how stressful it is when something important goes missing. Filing an FIR is the first step, but after that, it&apos;s a long wait filled with worry. That&apos;s where my new demo app steps in. It streamlines the process so that both you and the police can track and recover missing items and loved ones faster than ever before.

        </p>
        <p className="hidden md:block text-base md:text-lg lg:text-xl mt-6 md:mt-8 font-poppins">
        Developed a solution to revolutionise crime prevention  and it could cut recovery time by 60%! Faster. We all know how stressful it is when something important goes missing. Filing an FIR is the first step, but after that, it&apos;s a long wait filled with worry. That&apos;s where my new demo app steps in. It streamlines the process so that both you and the police can track and recover missing items and loved ones faster than ever before.
        </p>
      </div>
    </div>
  );
};

export default ShowcaseProject;
