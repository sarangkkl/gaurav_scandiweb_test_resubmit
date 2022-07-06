import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    currencyState:"",
    currencySymbol:"",
    currencyActive:false,
}

export const currencyReducer = createSlice({
    name:"currencyState",
    initialState,
    reducers:{
        toggleCurrency:(state,action)=>{
            let temp = action.payload.split('+')
            
            state.currencyState = temp[0]
            state.currencySymbol = temp[1]
        },changeCurrencystate:(state)=>{
            console.log(state.currencyActive)
            console.log("change currency state is activated")
            state.currencyActive = !state.currencyActive
        }
    }

})


export const {toggleCurrency,changeCurrencystate} = currencyReducer.actions;

export default currencyReducer.reducer;