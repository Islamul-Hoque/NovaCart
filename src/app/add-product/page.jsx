"use client";

import React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus, FaSpinner } from "react-icons/fa";

const AddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const categories = ["Electronics", "Home & Furniture", "Audio & Music", "Apparel", "Photography", "Accessories"];

    useEffect(() => {
    const cookies = document.cookie.split("; ");
    const emailCookie = cookies.find(row => row.startsWith("userEmail="));
    if (emailCookie) {
        const value = emailCookie.split("=")[1];
        setUserEmail(value);
    }
    }, []);

    const handleSubmit = async(e) => {
    e.preventDefault();
    if (isLoading) return;  
    setIsLoading(true);

    const imageUrl = e.target.image.value.trim()
    const newProductData = {
        title: e.target.title.value,
        price: parseFloat(e.target.price.value),
        full_description: e.target.full_description.value,
        category: e.target.category.value,
        image: imageUrl ,
        brand: e.target.brand.value,
        stock: parseInt(e.target.stock.value),
        sku: e.target.sku.value,
        features: e.target.features.value.split(",").map(f => f.trim()),
        rating: 0,
        createdAt: new Date().toISOString(),
        userEmail: userEmail
    };

    try {
        const res = await fetch("https://nova-cart-api-server.vercel.app/all-products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProductData),
        });
        const data = await res.json();
        if (data.insertedId) { toast.success(`"${newProductData.title}" added successfully!`);
            e.target.reset();
        }
    } catch (err) { 
        toast.error(`Failed to add ${newProductData.title}. Try again!`) 
    } finally { 
        setIsLoading(false) 
    }
}

    return (
        
        <div className="py-20 px-6 md:px-16 bg-linear-to-r from-purple-50 to-indigo-50">
            <div className="mx-auto p-8 rounded-2xl shadow-sm bg-white border border-gray-200 py-16">
            <h2 className="text-[2rem] md:text-[2.8rem] font-bold text-center mb-8 mt-3 text-gray-900">Add <span className='text-gradient'>Product</span></h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <label className="label font-medium mb-1">Product Title</label>
                        <input type="text" name="title" placeholder="Enter product name" className="inputField" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                        <select name="category" className="select border-slate-300 rounded-[0.4rem] px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-400  w-full" required>
                            <option disabled>Select Category</option>
                            { categories.map((category, index) =>  <option key={index} value={category} >{category}</option> )}
                        </select>
                    </div>

                    <div>
                        <label className="label font-medium mb-1">Price ($)</label>
                        <input type="number" name="price" placeholder="Enter price" className="inputField" required />
                    </div>
                    <div>
                        <label className="label font-medium mb-1">Stock</label>
                        <input type="number" name="stock" placeholder="Enter stock quantity" className="inputField" required />
                    </div>
                    <div>
                        <label className="label font-medium mb-1">Brand</label>
                        <input type="text" name="brand" placeholder="Enter brand name" className="inputField" required />
                    </div>
                    <div>
                        <label className="label font-medium mb-1">SKU</label>
                        <input type="text" name="sku" placeholder="Enter product SKU" className="inputField" required />
                    </div>
                    <div className="md:col-span-2">
                        <label className="label font-semibold mb-1">Product Image URL</label>
                        <input 
                        // type="text"
                        type="url"
                        name="image"  placeholder="Enter image URL" className="inputField" required/>
                    </div>
                    <div className="md:col-span-2">
                        <label className="label font-semibold mb-1">Features (comma separated)</label>
                        <input type="text" name="features" placeholder="25 Liter Capacity, Multiple Power Settings, Easy Clean Interior" className="inputField" required />
                    </div>
                    <div className="md:col-span-2">
                        <label className="label font-semibold mb-1">Full Description</label>
                        <textarea name="full_description" placeholder="Enter full product details" 
                        className="textarea h-24" rows={3} required></textarea>
                    </div>
                </div>
                <div> <button disabled={isLoading} type="submit" className="btn-primary-w-full mt-4">
                    {isLoading ? 
                        ( <>  <FaSpinner className="animate-spin" />  Adding... </> ) 
                    : ( <> <FaPlus /> Add Product </>  )}
                    </button> </div>
            </form>
        </div>
        <Toaster />
        </div>
    );    
};

export default AddProduct;