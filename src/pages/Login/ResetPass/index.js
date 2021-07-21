import React, { Component } from 'react'
import Style from '../LoginUser/login.module.css'
import Logo from '../../../assets/Group 1158.svg'
import { Link } from 'react-router-dom'
import Lock from '../../../assets/lock.svg'

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <header>
                        <img src={Logo} alt="Blanja" className={Style.logo}/>
                        <p>Reset password</p>
                    </header>
                    <div className={Style.login}>
                        <input type="text" name="Email" id="mail" placeholder="Email" className={`form-control ${Style.mail}`}/>
                        <Link className={Style.forgot} to="reset-password">Forgot Password?</Link>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class={`modal-body ${Style.boxBody} ml-auto mr-auto`}>
                                        <img src={Logo} alt="Blanja" class={Style.logoModal}/>
                                        <p class={Style.modalTextTitle}>Request to Reset Your Account Password</p>
                                        <img src={Lock} alt=""/>
                                        <p class={Style.modalTextSubtitle}>The following is the button for you to reset
                                            the password.</p>
                                        <Link to="new-password" class={Style.changePass}>Change password</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={Style.button1} data-toggle="modal" data-target="#exampleModal">Primary</button>
                        <p>Dont have a Tokopedia Account? <span><Link className={Style.linkRegister} to='signup'>Register</Link></span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
