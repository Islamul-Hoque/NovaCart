"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="bg-gradient paddingHorizontal pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay Updated with <span className="text-gradient"> NovaCart</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter and get exclusive deals, product updates, and shopping tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center" >
            <div className="join w-full md:w-2/3">

          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your email"
            className="rounded-l-full  px-4 py-6 join-item  input border-slate-300 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            
            />
          <button  type="submit"
           className="btn join-item rounded-r-full px-6 py-6 bg-purple-600 text-white  hover:bg-purple-700 transition"
           >
            Subscribe
          </button>
              </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;
