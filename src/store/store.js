import { configureStore } from '@reduxjs/toolkit';
import currencyReducers from './reducers/currencyReducers';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
export const store = configureStore({
    reducer:{
        currency:currencyReducers,
        product:productReducer,
        cart:cartReducer,
    }
})