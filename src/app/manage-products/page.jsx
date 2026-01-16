"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ProductCard from "./ProductCard";
import Link from "next/link";
import ManageCardSkeleton from "./ManageCardSkeleton";
import { FaPlus } from "react-icons/fa";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
    const cookies = document.cookie.split("; ");
    const emailCookie = cookies.find(row => row.startsWith("userEmail="));
    if (emailCookie) {
        const value = emailCookie.split("=")[1];
        setUserEmail(value);
        console.log("manage", value);

        setFetching(true);
        fetch(`https://nova-cart-api-server.vercel.app/manage-products?email=${value}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFetching(false);
        })
        .catch(() => setFetching(false));
    } else {
        setFetching(false);
        }
    }, []);

const handleDeleteProduct = (id, title) => {
    Swal.fire({
        title: "Are you sure?",
        text: `You are about to delete "${title}"!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(result => {
    if (result.isConfirmed) {
        fetch(`https://nova-cart-api-server.vercel.app/manage-products/${id}?email=${userEmail}`, {   method: "DELETE", })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                Swal.fire("Deleted!", `"${title}" has been deleted successfully! 🗑️`, "success");
                setProducts(prev => prev.filter(p => p._id !== id));
            } else {
                Swal.fire("Failed!", "Product not found or already deleted.", "error");
            }
        })
        .catch(() => Swal.fire("Error!", "Failed to delete product.", "error"));
        }
    });
};

    return (
        <div className="py-20 paddingHorizontal bg-gradient max-w-7xl mx-auto ">
            
            <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-12"> Manage <span className="text-gradient">Products</span> </h1>

            <div className="grid Gap sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {fetching ? (
                Array.from({ length: 8 }).map((_, i) => (
                    <ManageCardSkeleton key={i} />
                ))
                ) : 
                    products.length === 0 ? (
                
                    <div className="col-span-full flex flex-col items-center justify-center py-20" >
                        <h2 className="text-2xl font-bold text-gray-600">No products found</h2>
                        <p className="text-gray-500 mt-2">Start by adding your first product.</p>
                        <Link href="/add-product" className="mt-4 btn-primary"> <FaPlus className="text-white" /> Add Product </Link>
                    </div> ) 
                    :
                
                (
                    products.map(product => (
                    <ProductCard key={product._id} product={product} onDelete={handleDeleteProduct} />
                )))}
            </div>
        </div>
    );
}

export default ManageProducts ;