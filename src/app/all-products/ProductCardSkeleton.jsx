import React from 'react';

const ProductCardSkeleton = () => {
    return (
        <div className="card rounded-xl overflow-hidden shadow bg-gray-50 border border-gray-200 animate-pulse">
            <div className="relative w-full h-[15.1rem] bg-gray-200"></div>

            <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                    <span className="h-4 w-16 bg-gray-200 rounded-full"></span>
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="h-6 w-20 bg-gray-200 rounded"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="mt-4 h-10 w-full bg-gray-200 rounded"></div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;