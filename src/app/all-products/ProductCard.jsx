import React from 'react';
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { format } from "date-fns";
import { Eye } from 'lucide-react';

const ProductCard = ({product}) => {
    return (
        <div className="card rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-[1.02] group bg-gray-50 border border-gray-200" >
            <div className="relative w-full h-[15.1rem] bg-gray-100 overflow-hidden">
                <img src={product.image}  alt={product.title} className="w-full h-full object-cover transition duration-300 hover:scale-105" />
            </div>

            <div className="p-4 flex-1 flex flex-col ">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full w-fit">{product.category} </span>
                    <div className="flex items-center gap-1 text-xs text-gray-600 "> <MdOutlineDateRange className=" text-sm" /> {format(new Date(product.createdAt), "dd/MM/yyyy")} </div>
                </div>
                <h2 className="font-bold grow text- lg tru ncate text-gray-900 mb-1">{product.title}</h2>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                    <p className="font-extrabold text-xl text-purple-700"> ${Number(product.price).toFixed(2)} </p>
                    <div className="flex items-center text-sm font-medium text-gray-700"><FaStar size={14} className="text-yellow-500 mr-1" />{" "}<span>{product.rating}</span></div>
                </div>
                <Link href={`/all-products/${product._id}`} className="mt-4 btn-primary-w-full" > <Eye size={18} /> Details </Link>
            </div>
        </div>
    );
};

export default ProductCard;