import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Logo from '../../assets/Group 1158.svg'
import Style from './confirmation.module.css'
import { useParams, useHistory } from 'react-router'

const ConfirmationStatus = () => {
    const {id} = useParams()
    const history = useHistory()
    const [validate, setValidate] = useState(false)
    useEffect( () => {
        axios.get(`http://localhost:4000/v1/users/verification/${id}`)
        .then((res) =>{
            setValidate(true)
            setTimeout(() => {
                history.push('/login')
            }, 7000)
        })
        .catch((err) => {
            console.log(err)
        })
    })
    console.log(validate)
    return (
        <div>
            {validate ? <div className={Style.wrapper}>
                <img src={Logo} alt="Logo" />
                <h1>Thank you for registering</h1>
                <h2>Enjoy your shopping and selling experience with Blanja!</h2>
            </div> : <h1>FORBIDDEN, YOU DONT HAVE ACCESS TO THIS PAGE</h1>}
        </div>
    )
}

export default ConfirmationStatus
