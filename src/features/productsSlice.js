const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    products : [],
    isLoading : false,
    isError : false,
    error : ''
}



const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers: {},
    
})