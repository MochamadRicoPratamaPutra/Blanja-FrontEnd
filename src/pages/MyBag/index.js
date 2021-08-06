import React from 'react'
import { Link } from 'react-router-dom'
import Style from './bag.module.css'
import CartBox from '../../components/CartBox'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../../configs/redux/action/cartAction'
const Bag = () => {
    const {product, totalPrice} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteCart())
    }
    return (
        <div>
            <main className="container">
                <p className={Style.titleBag}>My Bag</p>
                <section className={Style.containerShop}>
                    <div className={Style.itemBag}>
                        <div className={Style.selected}>
                            <div className={Style.selectedOne}>
                                <input className={Style.formCheckInput} type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                <p className={Style.selectedItem}>Select all items<span className={Style.selectedTotalItem}> (2 items selected)</span></p>
                            </div>
                            <button className={Style.selectedDelete} onClick={handleDelete}>Delete</button>
                        </div>
                        {product.map((item) => 
                            <CartBox name={item.name} img={item.imgUrl} price={item.price} type='mybag'/>
                        )}
                    </div>
                    <div className={Style.summary}>
                        <div className={`${Style.summaryBox} ${Style.summaryItem}`}>
                            <p className={`${Style.selectedItem} ${Style.summaryItem}`}>Shopping Summary</p>
                            <div className={`${Style.price} ${Style.summaryItem}`}>
                                <p className={Style.selectedTotalItem}>Total Price</p>
                                <p className={Style.itemPrice}>Rp. {totalPrice}</p>
                            </div>
                            <Link to="checkout" className={`${Style.summaryConfirmation} ${Style.summaryItem}`}>Buy</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Bag
