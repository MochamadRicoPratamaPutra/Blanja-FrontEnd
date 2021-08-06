import React from 'react'
import {Route} from 'react-router-dom'
import NavbarUser from '../../../components/navbarUser'
import Navbar from '../../../components/navbar'
const CommonRoute = ({ component: Component, ...rest}) => {
    const isAuth = localStorage.getItem('token')
    return (
    <Route {...rest} render={(props)=>{
        return(
            isAuth ? (
            <>
                <NavbarUser/>
                <Component {...props}/> 
            </>
            ):
            <>
                <Navbar/>
                <Component {...props}/> 
            </>
            )
        }}/>
    )
}

export default CommonRoute