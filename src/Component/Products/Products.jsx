'use client'

import Error from '@/Error/Error';
import { fetchProducts } from '@/features/productsSlice';
import Loading from '@/Loading/Loading';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Products = () => {

    const {products, isLoading, isError, error} = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
    
    let content;

    if(isLoading){
        content = <Loading/>
    }

    if(!isLoading && isError){
        content = <Error message = {error}/>
    }

    if (!isLoading && !isError && products.length > 0) {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        );
    }


    return (
        <div className='text-black md:mt-20 mt-10 md:mx-2 lg:mx-16'>
            {content}
        </div>
    );
};

export default Products;