'use client'
import { fetchProducts } from '@/features/productsSlice';
import Loading from '@/Loading/Loading';
import Error from '@/Error/Error';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SingleProduct = ({ id }) => {

    const dispatch = useDispatch();
    const { products, isLoading, isError, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const product = products.find(p => p.id === id);

    if (isLoading) return <Loading />;
    if (isError) return <Error message={error} />;
    if (!product) return <Loading />; 

    const {name, image, short_desc, price, code, discount_amount, pre_order, stock, unique_id} = product;

    const imageUrl = `https://admin.refabry.com/storage/product/${image}`;

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 p-6 md:p-10">
                    <div>
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md"
                        />
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">{name}</h1>
                            <p className="text-gray-700 mb-4 leading-relaxed text-justify">{short_desc}</p>

                            <div className=" space-y-1 text-gray-700 text-base">
                                <p><strong>Product Code:</strong> {code}</p>
                                <p><strong>Unique ID:</strong> {unique_id}</p>
                                <p><strong>Price:</strong> <span className="text-green-600 font-semibold">{price} tk</span></p>
                                {discount_amount > 0 && (
                                    <p><strong>Discount:</strong> <span className="text-red-600">{discount_amount} tk</span></p>
                                )}
                                <p><strong>Stock:</strong> {stock > 0 ? stock : <span className="text-red-600">Out of Stock</span>}</p>
                                {pre_order && <p className="text-orange-600 font-semibold">Pre-order Available</p>}
                            </div>
                        </div>

                        <div className="mt-4 flex gap-4">
                            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
