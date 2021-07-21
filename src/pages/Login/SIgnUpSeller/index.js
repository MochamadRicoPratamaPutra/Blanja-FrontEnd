import React, { Component } from 'react'
import Style from '../LoginUser/login.module.css'
import Logo from '../../../assets/Group 1158.svg'
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <header>
                        <img src={Logo} alt="Blanja" className={Style.logo}/>
                        <p>Please sign up with your account</p>
                        <div className={Style.cusel}>
                            <Link to="signup"><button className={Style.buttonSeller}>Customer</button></Link>
                            <Link to="#"><button className={Style.buttonCustomer}>Seller</button></Link>
                        </div>
                    </header>
                    <div className={Style.login}>
                    <input type="text" name="Name" id="name" placeholder="Name" className={`form-control ${Style.mail}`}/>
                        <input type="text" name="Email" id="mail" placeholder="Email" className={`form-control ${Style.mail}`}/>
                        <input type="text" name="PhoneNumber" id="phoneNumber" placeholder="Phone Number" className={`form-control ${Style.mail}`}/>
                        <input type="text" name="StoreName" id="storeName" placeholder="Store Name" className={`form-control ${Style.mail}`}/>
                        <input type="text" name="Password" id="pass" placeholder="Password" className={`form-control ${Style.mail}`}/>
                        <Link to="home"><button className={Style.button1}>Primary</button></Link>
                        <p>Already have a Tokopedia account?<span><Link className={Style.linkRegister} to='login-seller'>Login</Link></span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
