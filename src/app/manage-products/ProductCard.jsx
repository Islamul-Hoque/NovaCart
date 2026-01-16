"use client";
import { FaStar } from "react-icons/fa";
import ProductActions from "./ProductActions";

const ProductCard = ({ product, onDelete })  =>  {
  return (
    <div className="card rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-[1.02] group bg-gray-50 border border-gray-200">
      <div className="relative w-full h-[14.1rem] bg-gray-100 overflow-hidden">
        <img src={product.image} alt={product.title}  className="w-full h-full object-cover transition duration-300 hover:scale-105"  />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <span className="text-xs font-semibold tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full w-fit mb-2">
          {product.category}
        </span>
        <h2 className="font-bold text-lg  text-gray-900 mb-1">{product.title}</h2>

        <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
          <p className="font-extrabold text-xl text-purple-700">
            ${Number(product.price).toFixed(2)}
          </p>
          <div className="flex items-center text-sm font-medium text-gray-700">
            <FaStar size={14} className="text-yellow-500 mr-1" /> <span>{product.rating}</span>
          </div>
        </div>

        <ProductActions productId={product._id} productTitle={product.title} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default ProductCard;