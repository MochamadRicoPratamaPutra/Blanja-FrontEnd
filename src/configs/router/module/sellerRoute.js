import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import NavbarUser from '../../../components/navbarUser'
import { useSelector } from 'react-redux'
const SellerRoute = ({ component: Component, ...rest}) => {
    const isAuth = localStorage.getItem('token')
    const user = useSelector(state => state.user.profile)
    console.log(user.role)
    return (
    <Route {...rest} render={(props)=>{
        return(
            isAuth ? ( (user.role === 'seller') || (user.role === 'admin') ? 
            (<>
                <NavbarUser />
                <Component {...props}/> 
            </>)
            : <Redirect to="/forbidden"/>
            ): <Redirect to="/login" />
            )
        }}/>
    )
}

export default SellerRoute
