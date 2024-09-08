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
            return { ...state, items: action.payload }
        default:
            return state;
    }
}

export default orderReducer;