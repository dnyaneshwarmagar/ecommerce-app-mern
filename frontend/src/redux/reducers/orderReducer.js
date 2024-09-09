import { UPDATE_ORDER_ITEMS } from "../actions";

const initialOrderState = {
    items: [],
    shipping_charges: 50,
    discount_in_percent: 10,
    shipping_address: '',
    total_items: 0,
    total_cost: 0,
}

const orderReducer = (state = initialOrderState, action) => {
    switch (action.type) {
        case UPDATE_ORDER_ITEMS:
            const items = action.payload;
            const total_items = items.reduce((total,item)=>total + parseInt(item.quantity),0);
            const total_cost = items.reduce((total,item)=>total + item.price * item.quantity,0);

            return { ...state, items: action.payload ,total_cost,total_items}
        default:
            return state;
    }
}

export default orderReducer;