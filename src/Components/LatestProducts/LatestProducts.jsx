"use client";

import ProductCard from "@/app/all-products/ProductCard";
import ProductCardSkeleton from "@/app/all-products/ProductCardSkeleton";
import { useEffect, useState } from "react";

const LatestProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(false); 

    useEffect(() => {
    const fetchLatest = async () => {
        try {
            const res = await fetch("https://nova-cart-api-server.vercel.app/latest-products");
            if (!res.ok) throw new Error("Network response was not ok");
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    fetchLatest();
    }, []);

    return (
        <div className="pt-16 paddingHorizontal bg-gradient">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3 text-center"> New <span className="text-gradient">Arrivals</span></h2>
            <p className="text-center text-gray-600 mb-8"> Shop the latest products, fresh in stock</p>

            {loading && (
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
                {[...Array(4)].map((_, i) => (
                    <ProductCardSkeleton key={i}  > </ProductCardSkeleton>
                ))}
                </div>
            )}

            {!loading && error && (
                <p className="text-center text-red-500">Failed to load products. Please try again later.</p>
            )}

            {!loading && !error && (
                <div className="grid Gap sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
                </div>
            )}
        </div>
    );
};

export default LatestProducts;