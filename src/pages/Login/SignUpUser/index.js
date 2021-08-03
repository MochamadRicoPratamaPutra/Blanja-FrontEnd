import React, { Component } from 'react'
import Style from '../LoginUser/login.module.css'
import Logo from '../../../assets/Group 1158.svg'
import { Link } from 'react-router-dom'
import CustomerSeller from '../../../components/customerSeller'
import ButtonPrimary from '../../../components/buttonPrimary'
export class Login extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            phoneNumber: 0,
            gender: 0,
            role: 'customer',
            storeName: '',
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
                        <p>Please sign up with your account</p>
                        <CustomerSeller roleAcc="customer" destination="signup"/>
                    </header>
                    <div className={Style.login}>
                        <input type="text" name="name" id="name" placeholder="Name" className={`form-control ${Style.mail}`} onChange={e => this.setState({ name : e.target.value })}/>
                        <input type="text" name="email" id="mail" placeholder="Email" className={`form-control ${Style.mail}`} onChange={e => this.setState({ email : e.target.value })}/>
                        <input type="password" name="password" id="pass" placeholder="Password" className={`form-control ${Style.mail}`} onChange={e => this.setState({ password : e.target.value })}/>
                        <ButtonPrimary destination='home' type='register' data={this.state}/>
                        <p>Already have a Tokopedia account?<span><Link className={Style.linkRegister} to='login'>Login</Link></span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
