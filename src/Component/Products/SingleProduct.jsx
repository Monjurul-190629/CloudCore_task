'use client'
import { fetchProducts } from '@/features/productsSlice';
import Loading from '@/Loading/Loading';
import Error from '@/Error/Error';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderModal from '../Order/OrderButton';
import Image from 'next/image';

const SingleProduct = ({ id }) => {

    // get products from redux store using the thunk

    const dispatch = useDispatch();
    const { products, isLoading, isError, error } = useSelector(state => state.products);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);


    // match the product.id with the products

    const product = useMemo(() => {
        return products.find((p) => p.id === id);
    }, [products, id]);


    // if product is coming:

    if (isLoading) return <Loading />;
    if (isError) return <Error message={error} />;
    if (!product) return <Loading />;

    const { name, image, short_desc, price, code, discount_amount, pre_order, stock, unique_id } = product;

    const imageUrl = `https://admin.refabry.com/storage/product/${image}`;

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 p-6 md:p-10">

                    {/* Image section */}

                    <div>
                        <Image
                            src={imageUrl}
                            alt={name}
                            width={500}
                            height={400}
                            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md"
                            priority
                        />
                    </div>

                    <div className="flex flex-col justify-between">
                        {/* Main section */}

                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">{name}</h1>
                            <p className="text-gray-700 mb-4 leading-relaxed text-justify">{short_desc}</p>

                            <div className="space-y-1 text-gray-700 text-base">

                                {code && <p><strong>Product Code:</strong> {code}</p>}

                                {unique_id && <p><strong>Unique ID:</strong> {unique_id}</p>}

                                <p><strong>Price:</strong> <span className="text-green-600 font-semibold">{price} tk</span></p>
                                
                                {discount_amount > 0 && (
                                    <p><strong>Discount:</strong> <span className="text-red-600">{discount_amount} tk</span></p>
                                )}

                                <p><strong>Stock:</strong> {stock > 0 ? stock : <span className="text-red-600">Out of Stock</span>}</p>
                                {pre_order && <p className="text-orange-600 font-semibold">Pre-order Available</p>}
                            </div>
                        </div>

                        {/* Order Button */}

                        <div className="mt-4 flex gap-4">
                            <OrderModal product={product} />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
