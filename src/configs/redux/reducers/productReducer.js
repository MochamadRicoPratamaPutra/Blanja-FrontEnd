// reducer user
const initialState = {
    productDeleted:[],
    inputedProduct:{},
    productUpdate:{},
    productID:{}
}
const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'DELETE_DATA':
            return {
                ...state,
                productDeleted: [...state.productDeleted, action.payload]
            }
        case 'UPDATE_DATA':
            return {
                ...state,
                productUpdate: action.payload
            }
        case 'CHANGE_VALUE_PRODUCT':
            return {
                ...state,
                productID: {
                    ...state.productID,
                    ...action.payload
                }
        }
        case 'GET_PRODUCT_ID':
            return {
                ...state,
                productID: action.payload
            }
        default:
            return state
    }
}
export default productReducer