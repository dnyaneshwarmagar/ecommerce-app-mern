import {configureStore} from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';
import userReducer from './reducers/userReducer';

 const store = configureStore(
    {
        reducer:{
            product:productReducer,
            cart:cartReducer,
            order:orderReducer,
            user:userReducer
        }
    }
)

export default store;