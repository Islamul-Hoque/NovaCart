import BestSellingProducts from "@/Components/BestSellingProducts/BestSellingProducts";
import CoreValues from "@/Components/CoreValues/CoreValues";
import CustomerTestimonials from "@/Components/CustomerTestimonials/CustomerTestimonials";
import FeaturedCategories from "@/Components/FeaturedCategories/FeaturedCategories";
import Hero from "@/Components/Hero/Hero";
import LatestProducts from "@/Components/LatestProducts/LatestProducts";
import NewsletterCTA from "@/Components/NewsletterCTA/NewsletterCTA";
import Image from "next/image";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero/>
      <LatestProducts />
      <FeaturedCategories/>
      <BestSellingProducts/>
      <CustomerTestimonials />
      <CoreValues/>
      <NewsletterCTA />
    </div>
  );
}

export default Home;