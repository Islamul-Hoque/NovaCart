"use client";
import React, {  useEffect, useState } from "react"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

import { HiOutlineBookOpen, HiOutlineHome, HiOutlineInformationCircle, HiOutlineMail, HiOutlineShoppingBag, HiOutlineShoppingCart, HiOutlineViewGrid } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBoxOpen, FaChalkboardTeacher, FaPlusCircle } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
export default function Navbar() {
  
  const router = useRouter();
  const pathname = usePathname();
  const activeClass = (href) =>
    pathname === href ? "font-bold pb-1 text-[#632ee3] border-b-2 border-[#632ee3] transition-colors duration-200"  : "text-gray-700 hover:text-[#632ee3] transition-colors duration-200";
  
  const [isAuth, setIsAuth] = useState(null);
  
useEffect(() => {
  const cookies = document.cookie.split("; ");
  const authCookie = cookies.find(row => row.startsWith("auth="));
  if (authCookie) {
    const value = authCookie.split("=")[1];
    setIsAuth(value === "true"); 
  } else {
    setIsAuth(false);
  }
}, []);



const handleLogout = () => {
  document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  toast.success("You've been successfully logged out!");
  setIsAuth(false);
  router.push("/login")

//   setTimeout(() => {
//     window.location.href = "/login"; 
//   }, 1000);
};


    const links = <>
        <li><Link href="/" className={activeClass("/")}> <HiOutlineHome/> Home</Link></li>
        <li><Link prefetch={false} href="/all-products"className={activeClass("/all-products")}>
        
        <MdOutlineProductionQuantityLimits />
        ALL Products</Link></li>
        <li><Link href="/about"className={activeClass("/about")}><HiOutlineInformationCircle />About</Link></li>
        <li><Link href="/contact" className={activeClass("/contact")}><HiOutlineMail/>Contact</Link></li>

        { isAuth  && <li><Link href="/add-product"><FaPlusCircle />Add Product</Link></li>  }
    </>

    return (
      <div className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto ">   

      
        <div className="navbar paddingHorizontal  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"> {links} </ul>
                </div>

                <Link href="/" className="flex items-center gap-2"> <h1 className="text-[1.3rem] text-black font-bold"> Nova<span className="text-gradient">Cart</span> </h1>   </Link>
            </div>

           <div className="navbar-center hidden md:flex">  <ul className="font-semibold menu menu-horizontal px-1 gap-2"> {links} </ul> </div>

          <div className="navbar-end gap-3">

          { isAuth  ? (
              <div onClick={handleLogout} className="btn-primary">Logout</div>
            ) : (
              <Link href="/login" className="btn-primary">Login</Link>
          )}
        </div>
        <Toaster />
        </div> 
        </div>
      </div>
    );
}