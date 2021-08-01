import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import SellingProduct from './pages/profileSeller/ProfileSelling'
import ProfileMyProduct from './pages/profileSeller/ProfileMyProduct'
import ProfileUpdateProduct from './pages/profileSeller/ProfileUpdateProduct'
import Product from './pages/Products'
import LoginCustomer from './pages/Login/LoginUser'
import LoginSeller from './pages/Login/LoginSeller'
import SignUpUser from './pages/Login/SignUpUser'
import SignUpSeller from './pages/Login/SIgnUpSeller'
import ResetPass from './pages/Login/ResetPass'
import NewPass from './pages/Login/ChangePass'
import ConfirmLogin from './pages/Login/ConfirmLogin'
import MyBag from './pages/MyBag'
import Checkout from './pages/Checkout'
import Search from './pages/Search'
import ProfileCustomer from './pages/profileUser/profile'
import ProfileAddress from './pages/profileUser/profileAddress'
import ProfileOrder from './pages/profileUser/profileOrder'
import ProfileSeller from './pages/profileSeller/profile'
class App extends Component{
  constructor(props){
    super(props)
    console.log('ini method costructor');
    this.state={
    }
  }
  componentDidMount(){
    console.log('ini method compoenntDIdMount');
  }
  componentDidUpdate(){
    console.log('ini method componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('ini method componentWillUnmount');
  }
  render(){
    console.log('ini method render');
    return(
      <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile-seller-new-product" component={SellingProduct}/>
                <Route exact path="/profile-seller-my-product" component={ProfileMyProduct} />
                <Route exact path="/profile-seller-update-product/:id" component={ProfileUpdateProduct} />
                <Route exact path="/products/:id" component={Product} />
                <Route exact path="/login" component={LoginCustomer} />
                <Route exact path="/login-seller" component={LoginSeller} />
                <Route exact path="/signup" component={SignUpUser} />
                <Route exact path="/signup-seller" component={SignUpSeller} />
                <Route exact path="/reset-password" component={ResetPass} />
                <Route exact path="/new-password" component={NewPass} />
                <Route exact path="/confirm-login" component={ConfirmLogin} />
                <Route exact path="/my-bag" component={MyBag} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/profile" component={ProfileCustomer} />
                <Route exact path="/profile-address" component={ProfileAddress} />
                <Route exact path="/profile-order" component={ProfileOrder} />
                <Route exact path="/profile-seller" component={ProfileSeller} />
                {/* <Route exact path="/about" component={About} />
                <Route exact path="/home" component={HomePage} />
                <Route path="/product/:idproduct" component={Detail} />
                <Route path="/login" component={Login} />
                <Route path="/product" component={Product} /> */}
            </Switch>
        </BrowserRouter>
    )
  }

}
export default App 
