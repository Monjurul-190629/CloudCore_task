import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")



const initialState = {
    isPlacing: false,
    isSuccess: false,
    error: null,
    orderResponse: null,
}

// Async thunk to place order
export const placeOrder = createAsyncThunk(
    'order/placeOrder',
    async (orderData, { rejectWithValue }) => {
      try {
        //console.log('Posting to API with data:', orderData); 
  
        const response = await axios.post(
          'https://admin.refabry.com/api/public/order/create',
          orderData
        );
  
        //console.log('API Response:', response.data); 
        return response.data;
      } 
      catch (error) {
        //console.error('API Error:', error.response?.data || error.message);
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        resetOrderState: () => initialState
    },
    extraReducers: (builder) => {

        builder.addCase(placeOrder.pending, (state) => {
            state.isPlacing = true;
            state.error = null;
            state.isSuccess = false;
        })
        builder.addCase(placeOrder.fulfilled, (state, action) => {
            state.isPlacing = false;
            state.isSuccess = true;
            state.orderResponse = action.payload;
        })
        builder.addCase(placeOrder.rejected, (state, action) => {
            state.isPlacing = false;
            state.error = action.payload;
            state.isSuccess = false;
        });
    }
})

export const { resetOrderState } = orderSlice.actions;

export default orderSlice.reducer;