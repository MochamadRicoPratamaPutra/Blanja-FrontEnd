import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import SellingProduct from '../../pages/profileSeller/ProfileSelling'
import ProfileMyProduct from '../../pages/profileSeller/ProfileMyProduct'
import ProfileUpdateProduct from '../../pages/profileSeller/ProfileUpdateProduct'
import Product from '../../pages/Products'
import LoginCustomer from '../../pages/Login/LoginUser'
import LoginSeller from '../../pages/Login/LoginSeller'
import SignUpUser from '../../pages/Login/SignUpUser'
import SignUpSeller from '../../pages/Login/SIgnUpSeller'
import ResetPass from '../../pages/Login/ResetPass'
import NewPass from '../../pages/Login/ChangePass'
import ConfirmLogin from '../../pages/Login/ConfirmLogin'
import MyBag from '../../pages/MyBag'
import Checkout from '../../pages/Checkout'
import Search from '../../pages/Search'
import ProfileCustomer from '../../pages/profileUser/profile'
import ProfileAddress from '../../pages/profileUser/profileAddress'
import ProfileOrder from '../../pages/profileUser/profileOrder'
import ProfileSeller from '../../pages/profileSeller/profile'
import ProfileSellerMyOrder from '../../pages/profileSeller/profileMyOrder'
import PublicRoute from './module/publicRoute'
import PrivateRoute from './module/privateRoute'
import ConfirmationStatus from '../../pages/ConfirmationStatus'
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile-seller-new-product" component={SellingProduct}/>
                <Route exact path="/profile-seller-my-product" component={ProfileMyProduct} />
                <Route exact path="/profile-seller-update-product/:id" component={ProfileUpdateProduct} />
                <Route exact path="/profile-seller-order" component={ProfileSellerMyOrder} />
                <Route exact path="/products/:id" component={Product} />
                <PublicRoute exact path="/login" component={LoginCustomer} />
                <PublicRoute exact path="/login-seller" component={LoginSeller} />
                <PublicRoute exact path="/signup" component={SignUpUser} />
                <PublicRoute exact path="/signup-seller" component={SignUpSeller} />
                <PublicRoute exact path="/reset-password" component={ResetPass} />
                <PublicRoute exact path="/new-password/:email" component={NewPass} />
                <PublicRoute exact path="/confirm-login" component={ConfirmLogin} />
                <PrivateRoute exact path="/my-bag" component={MyBag} />
                <PrivateRoute exact path="/checkout" component={Checkout} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/profile" component={ProfileCustomer} />
                <Route exact path="/profile-address" component={ProfileAddress} />
                <Route exact path="/profile-order" component={ProfileOrder} />
                <Route exact path="/profile-seller" component={ProfileSeller} />
                <Route exact path="/verification/:id" component={ConfirmationStatus} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
