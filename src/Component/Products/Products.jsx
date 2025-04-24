'use client'

import Error from '@/Error/Error';
import { fetchProducts } from '@/features/productsSlice';
import Loading from '@/Loading/Loading';
import React, { useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Products = () => {

    const dispatch = useDispatch();

    const { products, isLoading, isError, error } = useSelector((state) => state.products, shallowEqual);

    
    // dispatch when products.length is 0
    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    const content = useMemo(() => {
        if (isLoading) return <Loading />;
        if (isError) return <Error message={error} />;
        if (products.length > 0) {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            );
        }
        return null;
    }, [products, isLoading, isError, error]);


    return (
        <div className='text-black md:mt-20 mt-10 md:mx-2 lg:mx-16'>
            {content}
        </div>
    );
};

export default Products;