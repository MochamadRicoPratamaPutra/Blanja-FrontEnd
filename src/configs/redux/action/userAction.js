import axios from "axios"

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