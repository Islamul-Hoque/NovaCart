// import React from "react";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section className="relative flex items-center justify-center min-h-[70vh] md:min-h-[65vh] px-6 md:px-16 overflow-hidden bg-linear-to-br from-[#1b003a] via-[#330058] to-[#5b008d]">
//       <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

//       <div className="absolute top-[5%] left-[5%] w-48 h-48 md:w-96 md:h-96 bg-[#9347d4] rounded-full mix-blend-lighten filter blur-4xl opacity-10 animate-blob z-30"></div>
//       <div className="absolute bottom-[10%] right-[5%] w-64 h-64 md:w-[450px] md:h-[450px] bg-[#673ab7] rounded-full mix-blend-lighten filter blur-4xl opacity-10 animate-blob animation-delay-2000 z-30"></div>
//       <div className="absolute top-[20%] right-[15%] w-36 h-36 md:w-72 md:h-72 bg-[#b39ddb] rounded-full mix-blend-lighten filter blur-4xl opacity-10 animate-blob animation-delay-4000 z-30"></div>
//       <div className="absolute bottom-[0%] left-[20%] w-28 h-28 md:w-64 md:h-64 bg-[#7e57c2] rounded-full mix-blend-lighten filter blur-4xl opacity-20 animate-blob animation-delay-6000 z-30"></div>

//       <div className="relative z-40 text-center max-w-4xl text-white"> 
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-md animate-fade-in-up">
//           Welcome to <span className="text-gradient">NovaCart</span>
//         </h1>
//         <p className="sm:text-lg md:text-xl text-white mb-10 px-4 md:px-0 opacity-90 animate-fade-in-up animation-delay-300">  Discover cutting-edge products, manage your cart effortlessly, and experience a seamless shopping journey. Your next favorite item awaits! </p>

//         <Link href="/all-products" className="btn shadow-none text-white border-none bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] hover:opacity-90" > Browse Products </Link>
//       </div>
//     </section>
//   );
// }

// export default Hero;

"use client";
import Link from "next/link";
import { FaShoppingCart, FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[65vh] paddingHorizontal overflow-hidden bg-gradient-to-br from-[#1b003a] via-[#330058] to-[#5b008d] text-white ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-10">
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4"> Explore <span className="text-[#b836fe]">NovaCart</span> — Your One‑Stop Marketplace </h1>
          <p className="md:text-md text-gray-300 mb-6 w-[95%]"> Discover premium products across Electronics, Home & Furniture, Audio & Music, Apparel, Photography, and Accessories. Shop smarter, faster, and easier with NovaCart. </p>
          <Link href="/all-products" className="btn-primary mb-16 relative z-100"> <FaShoppingCart /> Explore Products</Link>
        </div>

        <div className="flex justify-center md:justify-start order-1 md:order-2">
          <img src="https://i.ibb.co.com/cXvpWk4K/img1.png" alt="Premium Heater"  className=" w-full  md:h-[16rem] rounded-xl shadow-2xl" />
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