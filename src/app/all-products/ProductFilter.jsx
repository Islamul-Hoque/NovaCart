// "use client";
// import { useEffect, useState } from "react";

// import ProductCard from "./ProductCard";

//     const ProductFilter = ({ products, categories }) => {
//     const [search, setSearch] = useState("");
//     const [category, setCategory] = useState("");
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//   setLoading(false); 
// }, [products]);


//     const filtered = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()) && (category ? product.category === category : true));

//     return (
//         <div>
//             <div className="text-center mb-10 -mt-2">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Explore Our <span className="text-gradient">Exclusive Products</span> </h1>
//                 <p className="text-md lg:text-lg text-gray-600 w-[90%] text-center mx-auto"> Find your perfect match. Filter by category or use the search bar to explore our entire catalog.</p>
//             </div>
//             <div className="mb-12 flex justify-center gap-8">
//                 <label className="input w-[12.1rem] md:w-[20rem] flex items-center gap-2">
//                     <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"> <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /> </g> </svg>
//                     <input type="search"  value={search}  onChange={(e) => setSearch(e.target.value)} placeholder="Search product" className="outline-none bg-transparent w-full" />
//                 </label>

//                 <select value={category}  onChange={(e) => setCategory(e.target.value)} className="select w-[12rem] md:w-[20rem]" >
//                     <option disabled={true} value="">Pick a Category</option>
//                     { categories.map((category, index) =>  <option key={index}>{category}</option> )}
//                 </select>
//             </div>

//             <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
//                 {loading ? (
//           Array.from({ length: 8 }).map((_, i) => ( 
//                   <div key={i} className="card rounded-xl overflow-hidden shadow bg-gray-50 border border-gray-200 animate-pulse">
//   {/* Image skeleton */}
//   <div className="relative w-full h-[18.1rem] bg-gray-200"></div>

//   <div className="p-4 flex-1 flex flex-col">
//     {/* Category + Date skeleton */}
//     <div className="flex justify-between items-center mb-2">
//       <span className="h-4 w-20 bg-gray-200 rounded-full"></span>
//       <div className="h-4 w-16 bg-gray-200 rounded"></div>
//     </div>

//     {/* Title skeleton */}
//     <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>

//     {/* Description skeleton */}
//     <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
//     <div className="h-4 w-5/6 bg-gray-200 rounded"></div>

//     {/* Price + Rating skeleton */}
//     <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
//       <div className="h-6 w-20 bg-gray-200 rounded"></div>
//       <div className="h-4 w-12 bg-gray-200 rounded"></div>
//     </div>

//     {/* Button skeleton */}
//     <div className="mt-4 h-10 w-full bg-gray-200 rounded"></div>
//   </div>
// </div>))
//         ) : filtered.length === 0 ? (
//                 <div className="col-span-full text-center py-20">
//                     <h2 className="text-2xl font-bold text-gray-800">No products found</h2>
//                     <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
//                 </div>
//                 ) : (
//                 filtered.map((product) => (
//                     <ProductCard key={product._id} product={product} />

                
//                 )))}
//             </div>
//     </div>
//     );
// }

// export default ProductFilter;



"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { IoIosSearch } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const ProductFilter = ({ products, categories }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  
  const loading = products.length === 0;

  const filtered = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? product.category === category : true)
  );

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-10 -mt-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Explore Our <span className="text-gradient">Exclusive Products</span>
        </h1>
        <p className="text-md lg:text-lg text-gray-600 w-[90%] text-center mx-auto">
          Find your perfect match. Filter by category or use the search bar to
          explore our entire catalog.
        </p>
      </div>

      {/* Search + Category */}
      <div className="mb-12 flex justify-center gap-8">
        {/* <label className="input w-[12.1rem] md:w-[20rem] flex items-center gap-2">
          <IoIosSearch />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product"
            className="inputField "
          />
        </label> */}

<label className="relative w-[12.1rem] md:w-[20rem]">
  {/* Icon */}
  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" />

  {/* Input */}
  <input
    type="search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search product"
    className="w-full pl-10 pr-4 py-2 rounded-md border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder:text-gray-400"
  />
</label>







        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select w-[12rem] md:w-[20rem]"
        >
          <option disabled value="">
            Pick a Category
          </option>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>


        
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {loading ? (
          // Skeleton Loader
          Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="card rounded-xl overflow-hidden shadow bg-gray-50 border border-gray-200 animate-pulse"
            >
              <div className="relative w-full h-[18.1rem] bg-gray-200"></div>
              <div className="p-4 flex-1 flex flex-col gap-2">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-6 w-24 bg-gray-200 rounded mt-2"></div>
                <div className="h-10 w-full bg-gray-200 rounded mt-2"></div>
              </div>
            </div>
          ))
        ) : filtered.length === 0 ? (
          // No Products Found
          <div className="col-span-full text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800">No products found</h2>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or category filter.
            </p>
          </div>
        ) : (
          // Product Cards
          filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductFilter;