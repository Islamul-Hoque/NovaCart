"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { FaSearch } from "react-icons/fa";
import ProductCardSkeleton from "./ProductCardSkeleton";

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
      <div className="text-center mb-10 -mt-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"> Explore Our <span className="text-gradient">Exclusive Products</span> </h1>
        <p className="text-md lg:text-lg text-gray-600 w-[90%] text-center mx-auto"> Find your perfect match. Filter by category or use the search bar to explore our entire catalog. </p>
      </div>

      <div className="mb-12 flex justify-center gap-8">
        <label className="relative w-[12.1rem] md:w-[20rem]">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" />
          <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search product"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder:text-gray-400"  />
        </label>

        <select value={category} onChange={(e) => setCategory(e.target.value)}
          className="select w-[12rem] md:w-[20rem] border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400 " >
          <option value="">All Categories</option>
          {categories.map((category, index) => (  <option key={index}  >{category}</option>  ))}
        </select>
      </div>

      <div className="grid Gap sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} > </ProductCardSkeleton>
          ))
        ) : filtered.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800">No products found</h2>
            <p className="text-gray-500 mt-2"> Try adjusting your search or category filter. </p>
          </div>
        ) : (
          filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductFilter;