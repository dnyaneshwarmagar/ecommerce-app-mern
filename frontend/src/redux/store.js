import {configureStore} from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

 const store = configureStore(
    {
        reducer:{
            product:productReducer,
            cart:cartReducer,
            order:orderReducer
        }
    }
)

export default store;