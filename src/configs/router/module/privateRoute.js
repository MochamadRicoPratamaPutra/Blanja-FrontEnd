import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import NavbarUser from '../../../components/navbarUser'
const PrivateRoute = ({ component: Component, ...rest}) => {
    const isAuth = localStorage.getItem('token')
    return (
    <Route {...rest} render={(props)=>{
        return(
            isAuth ? (
            <>
                <NavbarUser />
                <Component {...props}/> 
            </>
            ): <Redirect to="/login" />
            )
        }}/>
    )
}

export default PrivateRoute
