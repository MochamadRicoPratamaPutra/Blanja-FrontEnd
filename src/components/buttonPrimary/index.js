import React from 'react'
import Style from './button.module.css'
import Logo from '../../assets/Group 1158.svg'
import Lock from '../../assets/lock.svg'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import {login, signup, sendMail, renewPass} from '../../configs/redux/action/userAction'
import { store } from "react-notifications-component"
const ButtonPrimary = ({destination, modalCheck, role, type, data}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogin = async() => {
        console.log(data)
        dispatch(login(data, role))
        .then((res) => {
            store.addNotification({
                title: `Successfuly login`,
                message: `welcome ${res.name}`,
                type: 'success',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                    onScreen: true,
                },
            });
            history.push(`/${destination}`)
        })
        .catch((err) => {
            store.addNotification({
                title: `Error`,
                message: `${err}`,
                type: 'danger',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                    onScreen: true,
                },
            });
        })
    }
    const handleRegister = async() => {
        console.log(data)
        if (data.email === '' || data.name === '' || data.password === '') {
            store.addNotification({
                title: `Error`,
                message: `Please fill out all the forms above`,
                type: 'danger',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                    onScreen: true,
                },
            });
        } else if (data.role === 'seller') {
            if (data.phoneNumber === '' || data.storeName === '') {
                store.addNotification({
                    title: `Error`,
                    message: `Please fill out all the forms above`,
                    type: 'danger',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
            } else {
                dispatch(signup(data))
                .then((res) => {
                    store.addNotification({
                        title: `Successfuly registering your account`,
                        message: `Please check your email for verification`,
                        type: 'success',
                        insert: 'top',
                        container: 'top-right',
                        animationIn: ['animate__animated', 'animate__fadeIn'],
                        animationOut: ['animate__animated', 'animate__fadeOut'],
                        dismiss: {
                            duration: 5000,
                            onScreen: true,
                        },
                    });
                    history.push(`${destination}`)
                })
                .catch((err) => {
                    store.addNotification({
                        title: `Error`,
                        message: `${err}`,
                        type: 'danger',
                        insert: 'top',
                        container: 'top-right',
                        animationIn: ['animate__animated', 'animate__fadeIn'],
                        animationOut: ['animate__animated', 'animate__fadeOut'],
                        dismiss: {
                            duration: 5000,
                            onScreen: true,
                        },
                    });
                })
            }
        } else {
            dispatch(signup(data))
            .then((res) => {
                store.addNotification({
                    title: `Successfuly registering your account`,
                    message: `Please check your email for verification`,
                    type: 'success',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
                history.push(`${destination}`)
            })
            .catch((err) => {
                store.addNotification({
                    title: `Error`,
                    message: `${err}`,
                    type: 'danger',
                    insert: 'top',
                    container: 'top-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
            })
        }
    }
    const handleSendMail = async() => {
        dispatch(sendMail(data))
    }
    const handleChangePass = async() => {
        if (data.password !== data.confirm) {
            alert("Password didn't match")
        } else {
            dispatch(renewPass(data))
            .then((res) => {
                history.push(`/${destination}`)
            })
            .catch((err) => {
                alert(err)
            })
        }
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
                                <button class={Style.changePass} onClick={handleSendMail}>Change password</button>
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
    } else if (type === 'resetPass') {
        return (
            <div>
                <button className={Style.button1} onClick={handleChangePass}>Primary</button>
            </div>
        )
    }
}

export default ButtonPrimary
