import BestSellingProducts from "@/Components/BestSellingProducts/BestSellingProducts";
import CustomerTestimonials from "@/Components/CustomerTestimonials/CustomerTestimonials";
import FeaturedCategories from "@/Components/FeaturedCategories/FeaturedCategories";
import Hero from "@/Components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero/>
      <FeaturedCategories/>
      <BestSellingProducts/>
      <CustomerTestimonials />
      {/* <CoreValues/> */}
    </div>
  );
}
