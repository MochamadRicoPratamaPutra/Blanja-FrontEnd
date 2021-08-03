import React, { Component } from 'react'
import Style from '../LoginUser/login.module.css'
import Logo from '../../../assets/Group 1158.svg'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../../../components/buttonPrimary'
export class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: ''
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
                        <p>Reset password</p>
                    </header>
                    <div className={Style.login}>
                        <input type="text" name="email" id="mail" placeholder="Email" className={`form-control ${Style.mail}`} onChange={e => this.setState({ email : e.target.value })}/>
                        <Link className={Style.forgot} to="reset-password">Forgot Password?</Link>
                        <ButtonPrimary destination='new-password' modalCheck='true' data={this.state}/>
                        <p>Dont have a Tokopedia Account? <span><Link className={Style.linkRegister} to='signup'>Register</Link></span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
