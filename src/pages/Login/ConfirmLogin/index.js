import React, { Component } from 'react'
import Style from '../LoginUser/login.module.css'
import Logo from '../../../assets/Group 1158.svg'
import ButtonPrimary from '../../../components/buttonPrimary'
export class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <header>
                        <img src={Logo} alt="Blanja" className={Style.logo}/>
                        <p>Reset Password</p>
                        <p className={Style.confirmLogin}>We have sent an email containing a password reset instruction to your email. please check your email.</p>
                    </header>
                    <div className={Style.login}>
                        <input type="text" name="mail" id="mail" placeholder="Email" className={`form-control ${Style.mail}`}/>
                        <input type="text" name="pass" id="pass" placeholder="Password" className={`form-control ${Style.mail}`}/>
                        <ButtonPrimary destination="home"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
