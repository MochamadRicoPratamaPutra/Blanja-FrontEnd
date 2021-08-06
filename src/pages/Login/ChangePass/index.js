import React, { Component } from 'react'
import Style from '../LoginUser/login.module.css'
import Logo from '../../../assets/Group 1158.svg'
import ButtonPrimary from '../../../components/buttonPrimary'
import { withRouter } from "react-router";
export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: props.match.params.email,
            password: '',
            confirm: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        //this.setState({ value: event.target.value });
        console.log(this.state.email);
    }
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
                        <input type="text" name="NewPass" id="newPass" placeholder="Password" className={`form-control ${Style.mail}`} onChange={e => this.setState({ password : e.target.value })}/>
                        <input type="text" name="ConfirmPass" id="confirmPass" placeholder="Confirmation New Password" className={`form-control ${Style.mail}`} onChange={e => this.setState({ confirm : e.target.value })}/>
                        <ButtonPrimary destination="confirm-login" type='resetPass' data={this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
