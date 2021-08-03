import React from 'react'
import Style from './cusel.module.css'
import { Link } from 'react-router-dom'

const CustomerSeller = ({roleAcc, destination}) => {
    return (
        <div>
            <div className={Style.cusel}>
                <Link to={`${destination}`}><button className={`${Style.buttonCustomer} ${roleAcc === 'customer' ? `${Style.buttonRed}` : `${Style.buttonSilver}`}`}>Customer</button></Link>
                <Link to={`${destination}-seller`}><button className={`${Style.buttonCustomer} ${roleAcc === 'customer' ? `${Style.buttonSilver}` : `${Style.buttonRed}`}`}>Seller</button></Link>
            </div>
        </div>
    )
}

export default CustomerSeller
