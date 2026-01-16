import React from 'react';

const ManageCardSkeleton = () => {
    return (
        <div className="card rounded-xl overflow-hidden shadow bg-gray-50 border border-gray-200 animate-pulse">
            <div className="relative w-full h-[14.1rem] bg-gray-200" />

                <div className="p-4 flex-1 flex flex-col">
                    <div className="h-4 w-20 bg-gray-200 rounded-full mb-2" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-3" />
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="h-6 w-16 bg-gray-200 rounded" />
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-gray-200 rounded-full" />
                            <div className="h-4 w-8 bg-gray-200 rounded" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-4 mt-4">
                        <div className="w-1/2 h-10 bg-gray-200 rounded" />
                        <div className="w-1/2 h-10 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
};

export default ManageCardSkeleton;