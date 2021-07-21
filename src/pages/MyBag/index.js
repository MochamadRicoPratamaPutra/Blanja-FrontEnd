import React from 'react'
import { Link } from 'react-router-dom'
import Style from './bag.module.css'
import Navbar from '../../components/navbar'
import PlusMinus from '../../components/PlusMinus'
import Item from '../../assets/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'

const Bag = () => {
    return (
        <div>
            <Navbar/>
            <main className="container">
                <p className={Style.titleBag}>My Bag</p>
                <section className={Style.containerShop}>
                    <div className={Style.itemBag}>
                        <div className={Style.selected}>
                            <div className={Style.selectedOne}>
                                <input className={Style.formCheckInput} type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                                <p className={Style.selectedItem}>Select all items<span className={Style.selectedTotalItem}> (2 items selected)</span></p>
                            </div>
                            <button className={Style.selectedDelete}>Delete</button>
                        </div>
                        <div className={Style.item}>
                            <input className={Style.formCheckItem} type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                            <img className={Style.itemImage} src={Item} alt="ItemBag"/>
                            <div className={Style.itemName}>
                                <p className={Style.itemTitle}>Men's formal suit - Black</p>
                                <p className={Style.itemBrand}>Zalora Cloth</p>
                            </div>
                            <div className={Style.itemAmount}>
                                <div className={`col ${Style.sizing}`}>
                                    <PlusMinus/>                           
                                </div>
                            </div>
                            <p className={Style.itemPrice}>$20.0</p>
                        </div>
                        <div className={Style.item}>
                            <input className={Style.formCheckItem} type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                            <img className={Style.itemImage} src={Item} alt="ItemBag"/>
                            <div className={Style.itemName}>
                                <p className={Style.itemTitle}>Men's formal suit - Black</p>
                                <p className={Style.itemBrand}>Zalora Cloth</p>
                            </div>
                            <div className={Style.itemAmount}>
                                <div className={`col ${Style.sizing}`}>
                                    <PlusMinus/>                           
                                </div>
                            </div>
                            <p className={Style.itemPrice}>$20.0</p>
                        </div>
                    </div>
                    <div className={Style.summary}>
                        <div className={`${Style.summaryBox} ${Style.summaryItem}`}>
                            <p className={`${Style.selectedItem} ${Style.summaryItem}`}>Shopping Summary</p>
                            <div className={`${Style.price} ${Style.summaryItem}`}>
                                <p className={Style.selectedTotalItem}>Total Price</p>
                                <p className={Style.itemPrice}>$40.0</p>
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
