import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../../pages'
// import Detail from '../../pages/Detail'
// import About from '../../pages/About'
// import Login from '../../pages/Login'
// import HomePage from '../../pages/HomePage'
// import Product from '../../pages/Product'
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/about" component={About} />
                <Route exact path="/home" component={HomePage} />
                <Route path="/product/:idproduct" component={Detail} />
                <Route path="/login" component={Login} />
                <Route path="/product" component={Product} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Router
