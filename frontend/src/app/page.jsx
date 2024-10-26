import OurTeam1 from "@/components/AnimatedOurTeam";
import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ShowcaseProject from "@/components/ShowcaseProject";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="pt-[80px] bg-[#F8FFF8]">
      
      <Hero />
      <Categories />
      <ShowcaseProject />
      <OurTeam1/>
      <ContactUs />  
      <Footer />
    </div>
    </>
  );
}
