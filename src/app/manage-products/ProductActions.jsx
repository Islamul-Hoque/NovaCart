"use client";
import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";

const ProductActions = ({ productId, productTitle, onDelete }) => {
    return (
        <div className="flex justify-between items-center gap-4 mt-4">
            <div className="w-1/2">
                <Link href={`/all-products/${productId}`} className="btn-primary-w-full"> <Eye size={18} /> Details </Link>
            </div>
            <div className="w-1/2">
                <button onClick={() => onDelete(productId, productTitle)} className="btn w-full btn-error text-white" > <Trash2 size={18} /> Delete </button>
            </div>
        </div>
    );
}

export default ProductActions;