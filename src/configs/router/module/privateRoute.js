import React from 'react'
import {Route, Redirect} from 'react-router-dom'
// import Navbar from '../../../components/module/Navbar'
const PrivateRoute = ({ component: Component, ...rest}) => {
    const isAuth = localStorage.getItem('token')
    return (
    <Route {...rest} render={(props)=>{
        return(
            isAuth ? (
            <>
                <Component {...props}/> 
            </>
            ): <Redirect to="/login" />
            )
        }}/>
    )
}

export default PrivateRoute
