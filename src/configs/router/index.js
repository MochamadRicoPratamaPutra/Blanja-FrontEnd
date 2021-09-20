import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import SellingProduct from '../../pages/profileSeller/ProfileSelling'
import ProfileMyProduct from '../../pages/profileSeller/ProfileMyProduct'
import ProfileUpdateProduct from '../../pages/profileSeller/ProfileUpdateProduct'
import ProfileOrderItemSeller from '../../pages/profileSeller/ProfileItemOrderSeller'
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
import ProfileOrderItem from '../../pages/profileUser/profileItemOrder'
import ProfileSeller from '../../pages/profileSeller/profile'
import ProfileSellerMyOrder from '../../pages/profileSeller/profileMyOrder'
import PublicRoute from './module/publicRoute'
import PrivateRoute from './module/privateRoute'
import CommonRoute from './module/commonRoute'
import CustomerRoute from './module/customerRoute'
import SellerRoute from './module/sellerRoute'
import ConfirmationStatus from '../../pages/ConfirmationStatus'
import ForbiddenPages from '../../pages/ForbiddenPages'
import Category from '../../pages/Category'
import New from '../../pages/New'
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CommonRoute exact path="/" component={Home} />
                <CommonRoute exact path="/home" component={Home} />
                <CommonRoute exact path="/category/:id" component={Category} />
                <CommonRoute exact path="/new" component={New} />
                <SellerRoute exact path="/profile-seller/:id" component={ProfileSeller} />
                <SellerRoute exact path="/profile-seller-new-product/:id" component={SellingProduct}/>
                <SellerRoute exact path="/profile-seller-my-product/:id" component={ProfileMyProduct} />
                <SellerRoute exact path="/profile-seller-update-product/:id" component={ProfileUpdateProduct} />
                <SellerRoute exact path="/profile-seller-order/:id" component={ProfileSellerMyOrder} />
                <SellerRoute exact path="/profile-seller-order-item/:id" component={ProfileOrderItemSeller} />
                <CommonRoute exact path="/products/:id" component={Product} />
                <PublicRoute exact path="/login" component={LoginCustomer} />
                <PublicRoute exact path="/login-seller" component={LoginSeller} />
                <PublicRoute exact path="/signup" component={SignUpUser} />
                <PublicRoute exact path="/signup-seller" component={SignUpSeller} />
                <PublicRoute exact path="/reset-password" component={ResetPass} />
                <PublicRoute exact path="/new-password/:email" component={NewPass} />
                <PublicRoute exact path="/confirm-login" component={ConfirmLogin} />
                <PrivateRoute exact path="/my-bag" component={MyBag} />
                <PrivateRoute exact path="/checkout" component={Checkout} />
                <CommonRoute exact path="/search" component={Search} />
                <CustomerRoute exact path="/profile/:id" component={ProfileCustomer} />
                <CustomerRoute exact path="/profile-address/:id" component={ProfileAddress} />
                <CustomerRoute exact path="/profile-order/:id" component={ProfileOrder} />
                <CustomerRoute exact path="/profile-item/:id" component={ProfileOrderItem} />
                <Route exact path="/verification/:id" component={ConfirmationStatus} />
                <Route exact path="/forbidden" component={ForbiddenPages} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
