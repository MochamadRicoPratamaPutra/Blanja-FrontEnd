import React, {useEffect} from 'react'
import Logo from '../../assets/Group 1158.svg'
import Style from '../ConfirmationStatus/confirmation.module.css'
import { useHistory } from 'react-router'
const ForbiddenPages = () => {
    const history = useHistory()
    useEffect( () => {
        setTimeout(() => {
            history.push('/')
        }, 7000)
    })
    return (
        <div>
            <div className={Style.wrapper}>
                <img src={Logo} alt="Logo" />
                <h1>FORBIDDEN, YOU DONT HAVE ACCESS TO THIS PAGE</h1>
            </div>
        </div>
    )
}

export default ForbiddenPages
