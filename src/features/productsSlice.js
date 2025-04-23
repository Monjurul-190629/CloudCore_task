import { productApi } from "@/lib/productApi"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")


const initialState = {
    products : [],
    isLoading : false,
    isError : false,
    error : ''
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const result = await productApi();
    const products = result.data.data;
    return products;
})


const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers: {},
    
})