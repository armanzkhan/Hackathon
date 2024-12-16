import Aboutus from "@/components/Aboutus";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Category from "@/components/Category";
import ChefSection from "@/components/ChefSection";
import Client from "@/components/Client";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <Aboutus />
      <Category />
      <Client />
      <Menu />
      <ChefSection />
      <Testimonials />
      <Banner />
      <Blog />
    </div>
  );
}
