import axios from "axios"
export const deleteProduct = (data) => async(dispatch) => {
    return new Promise ((resolve, reject)=>{
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        return axios.delete(`${process.env.REACT_APP_API_URL}v1/products/${data.id}`, config)
        .then(() => {
            dispatch({type:'DELETED_DATA', payload: data})
            alert(`Success deleting data with name ${data.name}`)
        })
        .catch((err)=>{
            console.log(err.response)
            reject(err.response)
        })
    })
}
export const productId = (data) => async(dispatch) => {
    return new Promise ((resolve, reject)=>{
        return axios.get(`${process.env.REACT_APP_API_URL}v1/products/${data}`)
        .then((res) => {
            const dataState = res.data.data[0]
            console.log(dataState)
            dispatch({type: "GET_PRODUCT_ID", payload: dataState})
            resolve(res)
        })
        .catch((err) => {
            console.log(err.response)
            reject(err.response)
        })
    })
}
export const updateProduct = (data) => async(dispatch) => {
    return new Promise ((resolve, reject)=>{
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('description', data.description)
        formData.append('imgUrl', data.imgUrl[0], data.imgUrl[0].name)
        formData.append('categoryID', data.categoryID)
        return axios.put(`${process.env.REACT_APP_API_URL}v1/products/${data.id}`, formData, config)
        .then((res) => {
            const result = res.data.data
            dispatch({type:'UPDATE_DATA', payload: result})
            resolve(res)
        })
        .catch((err)=>{
            console.log(err.response)
            reject(err.response)
        })
    })
}