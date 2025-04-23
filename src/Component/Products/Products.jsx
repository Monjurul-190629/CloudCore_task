'use client'

import Error from '@/Error/Error';
import { fetchProducts } from '@/features/productsSlice';
import Loading from '@/Loading/Loading';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

    if(!isLoading && !isError && products.length > 0){
        content = <ul>
            {
                products.map(post => <li key = {post.id}>{post.name}</li>)
            }
        </ul>
    }


    return (
        <div className='text-black'>
            {content}
        </div>
    );
};

export default Products;