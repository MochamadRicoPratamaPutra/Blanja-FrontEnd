const initialState = {
    item: 0,
    product: [],
    orderDetail: [],
    orderItems: [],
    total: 0,
    quantity: 0
}
const cartReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'CART' :
            return {
                ...state,
                item: state.item + 1,
                product: [...state.product, action.payload],
                total: state.total+action.payload.price
            }
        case 'ORDER_DETAIL' :
            return {
                ...state,
                orderDetail: action.payload
            }
        case 'ORDER_ITEM':
            return {
                ...state,
                orderItems: action.payload
            }
        case 'QUANTITY_PLUS' :
            return {
                ...state,
                quantity: state.quantity + action.payload
            }
        case 'QUANTITY_MINUS' :
            return {
                ...state,
                quantity: state.quantity - action.payload
            }
        case 'DELETE_CART' :
            return {
                ...state,
                item: action.payload,
                product: []
            }
        default:
            return state
    }
}
export default cartReducer