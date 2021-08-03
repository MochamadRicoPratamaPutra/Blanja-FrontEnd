import React, { Component } from 'react'
import Style from './login.module.css'
import Logo from '../../../assets/Group 1158.svg'
import { Link } from 'react-router-dom'
import CustomerSeller from '../../../components/customerSeller'
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
                        <p>Please login with your account</p>
                        <CustomerSeller roleAcc="customer" destination="login"/>
                    </header>
                    <div className={Style.login}>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="email" id="mail" placeholder="Email" className={`form-control ${Style.mail}`} onChange={e => this.setState({ email : e.target.value })}/>
                            <input type="password" name="password" id="pass" placeholder="Password" className={`form-control ${Style.mail}`} onChange={e => this.setState({ password : e.target.value })}/>
                        </form>
                        <Link className={Style.forgot} to="reset-password">Forgot Password?</Link>
                        {/* <p>{this.props}</p> */}
                        <ButtonPrimary destination='home' type='login' data={this.state} role='customer'/>
                        <p>Dont have a Tokopedia Account? <span><Link className={Style.linkRegister} to='signup'>Register</Link></span></p>
                    </div>
                </div>
            </div>
        )
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleIncremen: () => {
//             dispatch(increment())
//         }
//     }
// }

export default Login
