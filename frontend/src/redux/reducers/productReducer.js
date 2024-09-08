import db from './../../database'

const initialState = {
    products:[...db.products]
}

const productReducer =(state=initialState, action)=>{
    return state
}

export default productReducer;