import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    category:"",
    products:[],
}



export const productReducer = createSlice({
    name:"productState",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            let temp = action.payload
            state.products = temp
        },setCategories:(state,action)=>{
            let temp = action.payload
            state.category = temp
        }
    }

})


export const {setProducts,setCategories} = productReducer.actions;

export default productReducer.reducer;