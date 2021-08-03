import React from 'react'
import { Link } from 'react-router-dom'
import Style from './button.module.css'
import Logo from '../../assets/Group 1158.svg'
import Lock from '../../assets/lock.svg'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import {login, signup, sendMail} from '../../configs/redux/action/userAction'
const ButtonPrimary = ({destination, modalCheck, role, type, data}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogin = async() => {
        console.log(data)
        dispatch(login(data, role))
        .then((res) => {
            history.push(`/${destination}`)
        })
        .catch((err) => {
            alert(err)
        })
    }
    const handleRegister = async() => {
        console.log(data)
        dispatch(signup(data))
        .then((res) => {
            history.push('/login')
        })
        .catch((err) => {
            alert(err)
        })
    }
    const handleResetPass = async() =>{
        dispatch(sendMail(data))
    }
    if (modalCheck === 'true' ) {
        return (
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class={`modal-body ${Style.boxBody} ml-auto mr-auto`}>
                                <img src={Logo} alt="Blanja" class={Style.logoModal}/>
                                <p class={Style.modalTextTitle}>Request to Reset Your Account Password</p>
                                <img src={Lock} alt=""/>
                                <p class={Style.modalTextSubtitle}>The following is the button for you to reset
                                    the password.</p>
                                <button class={Style.changePass} onClick={handleResetPass}>Change password</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={Style.button1} data-toggle="modal" data-target="#exampleModal">Primary</button>
            </div>
        )
    } else if (type === 'login') {
        return (
            <div>
                <button className={Style.button1} onClick={handleLogin}>Primary</button>
            </div>
        )
    } else if (type === 'register') {
        return (
            <div>
                <button className={Style.button1} onClick={handleRegister}>Primary</button>
            </div>
        )
    }
}

export default ButtonPrimary
