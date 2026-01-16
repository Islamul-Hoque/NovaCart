"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaShoppingCart } from "react-icons/fa";

const heroImages = [
  { src: "https://i.ibb.co.com/LDPxhyS5/PCD-KV-Galaxy-Watch8-1440x640-pc.jpg", alt: "Smart Watch" },
  { src: "https://i.ibb.co.com/gL68nYjZ/Starmax-Product-Range-Summer-2024-2.png", alt: "Headphones" },
  { src: "https://i.ibb.co.com/LXp72pFB/DSLR-1camera.jpg", alt: "DSLR Camera" },
  { src: "https://i.blogs.es/e64415/mavic--1-/1366_2000.jpg", alt: "Drone" },
  { src: "https://i.pinimg.com/1200x/d8/68/4a/d8684ac44bbe6cb2864843c283d2a827.jpg", alt: "Backpack" },
  { src: "https://i.ibb.co.com/qF5Pm8w8/backpacks.jpg", alt: "Backpack" },
  { src: "https://i.ibb.co.com/5x61vpyY/Wristwatch-01.png", alt: "Watch" },
  { src: "https://i.pinimg.com/736x/7d/39/39/7d3939a449d49568723455058462e0c3.jpg", alt: "Keyboard" },
  // { src: "https://i.ibb.co.com/V0BjLwYK/Guitar.jpg", alt: "Guitar" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[65vh] paddingHorizontal overflow-hidden bg-gradient-to-br from-[#1b003a] via-[#330058] to-[#5b008d] text-white ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-10">
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4"> Explore <span className="text-[#b836fe]">NovaCart</span> — Your One‑Stop Marketplace </h1>
          <p className="md:text-md text-gray-300 mb-6 w-[95%]"> Discover premium products across Electronics, Home & Furniture, Audio & Music, Apparel, Photography, and Accessories. Shop smarter, faster, and easier with NovaCart. </p>
          <Link href="/all-products" className="btn-primary mb-16 relative z-10"> <FaShoppingCart /> Explore Products</Link>
        </div>

        <div className="md:w-full w-[85vw] mx-auto flex justify-center md:justify -start order-1 md:order-2">
        <Swiper className="overflow-hidden rounded-xl px-2"  loop autoplay={{ delay: 1200 }} pagination={{ clickable: true }} modules={[Autoplay, Pagination]}>
          {heroImages.map((item, i) => (
            <SwiperSlide key={i}>
              <img  src={item.src}  alt={item.alt}   className="w-full h-[12rem] sm:h-[14rem] md:h-[16rem] object-cover rounded-xl shadow-2xl" />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        </div>

      <div className="absolute bottom-0 pointer-events-none left-0 w-full overflow-hidden z-0 leading-none">
        <svg viewBox="0 24 150 28" preserveAspectRatio="none" className="w-full h-30">
          <defs> <linearGradient id="g1768574577801"> <stop stopColor="#8060a4" /> <stop offset="1" stopColor="#ba45b0" /> </linearGradient>
            <path id="w" d="M -160 40 Q -116 30 -72 40 Q -28 50 16 40 Q 60 30 104 40 Q 148 50 192 40 L 192 80 L -160 80 Z" />
          </defs> <g> <use href="#w" x="48" y="0" fill="url(#g1768574577801)" opacity="0.3" className="l0" />  <use href="#w" x="68" y="3" fill="url(#g1768574577801)" opacity="0.4" className="l1" />  </g>
        </svg>
      </div>
    </section>
  );
}