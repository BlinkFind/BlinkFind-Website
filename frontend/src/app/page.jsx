import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurTeam from "@/components/OurTeam";
import ShowcaseProject from "@/components/ShowcaseProject";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="pt-[80px]">
      
      <Hero />
      <Categories />
      <ShowcaseProject />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
    </>
  );
}
