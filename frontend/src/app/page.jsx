import Categories1 from "@/components/AnimatedCategories";
import OurTeam1 from "@/components/AnimatedOurTeam";
import Categories from "@/components/OldCategories";
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
      <Categories1/>
      
      <ShowcaseProject />
      <OurTeam1/>
      <ContactUs />  
      
      <Footer />
    </div>
    </>
  );
}
