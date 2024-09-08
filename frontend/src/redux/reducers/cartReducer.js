import { ADD_TO_CART, CHANGE_QUANTITY } from "../actions";

const initialCartState = {
    items: []
}

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.items.find((item) => item.id === action.payload.id)) {
                return state
            }
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
        case CHANGE_QUANTITY:
            const oldItem = state.items.find((item) => item.id === action.payload.item.id);
            const index = state.items.indexOf(oldItem);
            const newItemsArray = [...state.items];
            newItemsArray[index] = {...action.payload.item, quantity:action.payload.quantity};
            return { ...state, items: newItemsArray }
        default:
            return state;
    }
}

export default cartReducer;