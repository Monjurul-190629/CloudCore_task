import React, { useMemo, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OrderModal from '../Order/OrderButton';

const ProductCard = ({ product }) => {

    const imageUrl = useMemo(() => `https://admin.refabry.com/storage/product/${product.image}`, [product.image]);

    return (
        <div className="bg-gray-100 shadow-xl rounded-2xl p-4">
            <div className="relative w-full h-48 mb-3">
                <Image
                    src={imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover rounded-xl"
                    priority
                />
            </div>


            <h3 className="text-xl font-semibold my-1">{product.name}</h3>
            <p className="text-sm text-gray-700 my-2  text-justify line-clamp-4">{product.short_desc}</p>
            <div className="flex justify-between items-center my-2">
                <span className="text-green-700 font-bold text-md">{product.price} tk</span>
                <span className="text-md font-semibold text-gray-800">{product.category?.name}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <div className="flex-1">
                    <OrderModal product={product} />
                </div>
                <Link
                    href={`/product/${product.id}`}
                    className="flex-1 text-center py-2 rounded-lg bg-gray-500 hover:bg-gray-700 text-white border border-gray-500 transition"
                >
                    View Details
                </Link>
            </div>


        </div>
    );
};

export default memo(ProductCard);
