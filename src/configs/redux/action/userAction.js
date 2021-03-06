import axios from "axios"
import { store } from 'react-notifications-component'
export const login = (data, role) => async(dispatch) => {
    return new Promise ((resolve, reject)=>{
        const dataBody = { email: data.email, password: data.password }
        console.log(dataBody)
        return axios.post(`${process.env.REACT_APP_API_URL}v1/users/login`, dataBody)
        .then((res) => {
            const result = res.data.data
            console.log(result.role)
            console.log(result.status)
            if ((result.role === role || result.role === 'admin') && result.status === 1) {
                dispatch({ type: 'LOGIN_USER', payload: result })
                localStorage.setItem('token', result.token)
                resolve(result)
                return result
            } else if (result.status === 0) {
                reject(new Error(`your account has not been activated`))
            } else {
                reject(new Error(`Wrong role, make sure you login with ${role} account`))
            }
        })
        .catch((err)=>{
            reject(err.response.data.error.message)
        })
    })
}
export const signup = (data) => async(dispatch) => {
    return new Promise ((resolve, reject)=>{
        return axios.post(`${process.env.REACT_APP_API_URL}v1/users/register`, data)
        .then((res) => {
            const result = res.data.data
            console.log(result.role)
            console.log(result.status)
            dispatch({ type: 'SIGNUP_USER', payload: result })
            // localStorage.setItem('token', result.token)
            resolve(result)
            return result
        })
        .catch((err)=>{
            reject(err.response.data.error.message)
        })
    })
}

export const sendMail = (data) => async (dispatch) => {
    return new Promise ((resolve, reject) => {
        console.log(data)
        return axios.post(`${process.env.REACT_APP_API_URL}v1/users/confirm`, data)
        .then( (res) => {
            dispatch({type: 'FORGOT_USER', payload: data})
            resolve(res)
            return res
        })
        .catch((err)=>{
            reject(err.response.data.error.message)
        })
    })
}
export const renewPass = (data) => async (dispatch) => {
    return new Promise ((resolve, reject) => {
        const dataPass = {
            password: data.password
        }
        return axios.put(`${process.env.REACT_APP_API_URL}v1/users/forgot/${data.email}`, dataPass)
        .then((res) => {
            dispatch({type: 'RENEW_PASS', payload: {email: data.email, password: data.password}})
            resolve(res)
            return res
        })
        .catch((err)=>{
            reject(err.response.data.error.message)
        })
    })
}
export const editProfile = (data) => (dispatch) => {
    return new Promise ((resolve, reject)=>{
        console.log(data)
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('phoneNumber', data.phoneNumber)
        formData.append('gender', data.gender)
        formData.append('profilePicture', data.profilePicture[0], data.profilePicture[0].name)
        // console.log(formData)
        return axios.put(`${process.env.REACT_APP_API_URL}v1/users/${data.id}`, formData, config)
        .then((res) => {
            const result = res.data.data
            // console.log(result.role)
            // console.log(result.status)
            // dispatch({ type: 'UPDATE_USER', payload: result })
            // localStorage.setItem('token', result.token)
            store.addNotification({
                title: `Successfuly editing your account`,
                message: `Profile edited for ${result.name}`,
                type: 'success',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                    onScreen: true,
                },
            });
            resolve(result)
            return result
        })
        .catch((err)=>{
            console.log(err)
            reject(err.response)
        })
    })
}
// const dataResult = result.data
// console.log(dataResult);
// dispatch({ type: 'LOGIN_USER', payload: dataResult })
// localStorage.setItem('token', dataResult.token)
// const token = localStorage.getItem('token')
// console.log(token);
// history.push('/home')

  // console.log(data)
    // try {
    //     const dataBody = { email: data.email, password: data.password }
    //     const result = await axios.post('http://localhost:4000/v1/users/login', dataBody)
    //     const dataResult = result.data.data.data
    //     dispatch({ type: 'LOGIN_USER', payload: dataResult })
    //     console.log(dataResult);
    //     localStorage.setItem('token', dataResult.token)
    //     const token = localStorage.getItem('token')
    //     console.log(token);
    //     history.push('/home')
    // } catch (error) {
    //     console.log(error.response);
    //     dispatch({ type: 'LOGIN_USER_ERROR', payload: error.response.data.error.message})
    //     alert(error.response.data.error.message)
    // }