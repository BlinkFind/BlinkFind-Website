import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam";
import ShowcaseProject from "@/components/ShowcaseProject";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Categories/>
      <ShowcaseProject/>
      <OurTeam/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
