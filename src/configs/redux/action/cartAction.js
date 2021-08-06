import axios from "axios"
export const cartBag = ( data ) => {
    const itemBuy = data
    console.log(itemBuy)
    return({ type:'CART', payload: itemBuy })
}
export const quantityPlus = () => {
    return({type:'QUANTITY_PLUS', payload: 1})
}
export const deleteCart = () => {
    return({type:'DELETE_CART', payload: 0})
}
export const quantityMinus = () => (dispatch, getState) => {
    const {cart} = getState()
    const quantityNow = cart.quantity
    console.log(quantityNow)
    if (quantityNow > 0) {
        dispatch({type:'QUANTITY_MINUS', payload: 1})
    } else {
        dispatch({type:'QUANTITY_MINUS', payload: 0})
    }
}
export const orderData = (data) => async(dispatch) => {
    return new Promise ((resolve, reject)=>{
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }   
        return axios.post(`${process.env.REACT_APP_API_URL}v1/order-detail`, data, config)
        .then((res) => {
            const result = res.data.data
            dispatch({ type: 'ORDER_DETAIL', payload: result })
            // localStorage.setItem('token', result.token)
            resolve(result)
            return result
        })
        .catch((err)=>{
            console.log(err.response)
            reject(err)
        })
    })
}
export const orderItems = (data) => async(dispatch) => {
    return new Promise ((resolve, reject)=>{
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }   
        return axios.post(`${process.env.REACT_APP_API_URL}v1/order-items/`, data, config)
        .then((res) => {
            const result = res.data.data
            console.log(result.role)
            console.log(result.status)
            dispatch({ type: 'ORDER_ITEM', payload: result })
            // localStorage.setItem('token', result.token)
            resolve(result)
            return result
        })
        .catch((err)=>{
            console.log(err.response)
            reject(err)
        })
    })
}