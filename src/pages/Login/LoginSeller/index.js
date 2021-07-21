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
                        <p>Please login with your account</p>
                        <div className={Style.cusel}>
                            <Link to="login"><button className={Style.buttonSeller}>Customer</button></Link>
                            <Link to="#"><button className={Style.buttonCustomer}>Seller</button></Link>
                        </div>
                    </header>
                    <div className={Style.login}>
                        <input type="text" name="Email" id="mail" placeholder="Email" className={`form-control ${Style.mail}`}/>
                        <input type="text" name="Password" id="pass" placeholder="Password" className={`form-control ${Style.mail}`}/>
                        <Link className={Style.forgot} to="reset-password">Forgot Password?</Link>
                        <Link to="home"><button className={Style.button1}>Primary</button></Link>
                        <p>Dont have a Tokopedia Account? <span><Link className={Style.linkRegister} to='signup-seller'>Register</Link></span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
