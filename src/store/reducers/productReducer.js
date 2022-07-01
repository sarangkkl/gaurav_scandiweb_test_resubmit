import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    category:"",
}



export const productReducer = createSlice({
    name:"productState",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            let temp = action.payload
            state.category = temp
        }
    }

})


export const {setProducts} = productReducer.actions;

export default productReducer.reducer;