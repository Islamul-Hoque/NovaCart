import React from 'react';

const ProductDetailsSkeleton = () => {

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 space-y-8 animate-pulse">
      <div className="h-10 w-3/4 bg-gray-200 rounded mx-auto"></div>
      <div className="h-6 w-40 bg-gray-200 rounded"></div>

      <div className="card rounded-xl overflow-hidden shadow bg-gray-50 border border-gray-200">
        <div className="w-full h-[18.1rem] md:h-[30.49rem] bg-gray-200"></div>

        <div className="card-body p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="h-8 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>

          <div className="flex justify-between items-center">
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>

          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 w-32 bg-gray-200 rounded"></div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>

          <div className="space-y-2 mt-4">
            <div className="h-5 w-32 bg-gray-200 rounded"></div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-4 w-3/4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;