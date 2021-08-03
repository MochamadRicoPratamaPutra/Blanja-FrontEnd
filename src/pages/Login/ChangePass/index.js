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
                        <p className={Style.confirmPassword}>You need to change your password to activate your account</p>
                    </header>
                    <div className={Style.login}>
                        <input type="text" name="NewPass" id="newPass" placeholder="Password" className={`form-control ${Style.mail}`}/>
                        <input type="text" name="ConfirmPass" id="confirmPass" placeholder="Confirmation New Password" className={`form-control ${Style.mail}`}/>
                        <ButtonPrimary destination="confirm-login"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
