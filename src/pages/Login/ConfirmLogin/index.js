import React, { Component } from 'react'
import Style from '../LoginUser/login.module.css'
import Logo from '../../../assets/Group 1158.svg'
import ButtonPrimary from '../../../components/buttonPrimary'
export class Login extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
        // console.log(this.state.email);
    }
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
                        <input type="text" name="mail" id="mail" placeholder="Email" className={`form-control ${Style.mail}`} onChange={e => this.setState({ email : e.target.value })}/>
                        <input type="text" name="pass" id="pass" placeholder="Password" className={`form-control ${Style.mail}`} onChange={e => this.setState({ password : e.target.value })}/>
                        <ButtonPrimary destination='home' type='login' data={this.state} role='customer'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
