import React from 'react'
import Style from './cart.module.css'
import PlusMinus from '../PlusMinus'

const CartBox = ({name, img, price, type}) => {
    name = name.slice(0,20)
    return (
        <div>
            <div className={Style.item}>
                <input className={`${type === 'mybag' ? `${Style.formCheckItem}` : `${Style.check}`}`} type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                <img className={Style.itemImage} src={img} alt="ItemBag"/>
                <div className={Style.itemName}>
                    <p className={Style.itemTitle}>{name}</p>
                    <p className={Style.itemBrand}>Zalora Cloth</p>
                </div>
                <div className={`${type === 'mybag' ? `${Style.itemAmount}` : `${Style.check}`}`}>
                    <div className={`col ${Style.sizing}`}>
                        <PlusMinus/>                           
                    </div>
                </div>
                <p className={Style.itemPrice}>Rp. {price}</p>
            </div>
        </div>
    )
}

export default CartBox
