import React from 'react'
import Style from './checkout.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Gopay from '../../assets/gopay.png'
import PosIndonesia from '../../assets/pos.png'
import MasterCard from '../../assets/mastercard.png'
import CartBox from '../../components/CartBox'
import { orderData, orderItems } from '../../configs/redux/action/cartAction'
const Checkout = () => {
    const dispatch = useDispatch()
    const {product, total, quantity} = useSelector(state => state.cart)
    const {id} = useSelector(state => state.user.profile)
    const userID = id
    const dataOrderDetail = {userID, total}
    console.log(product.id)
    console.log(dataOrderDetail)
    const handleSubmit = async() => {
        dispatch(orderData(dataOrderDetail))
        product.map((item) => {
            const user_id = userID
            const products_id = item.id
            const dataOrderItem = {user_id, products_id, quantity}
            console.log(dataOrderItem)
            dispatch(orderItems(dataOrderItem))
        })
    }
    return (
        <div>
            <main className={Style.content}>
                <p className={Style.title}>Checkout</p>
                <p className={Style.subTitle}>Shipping Address</p>
                <div className={Style.shoppingData}>
                    <section className={Style.checkoutItem}>
                        <div className={Style.addressUser}>
                            <p className={Style.titleBox}>Andreas Jane</p>
                            <p className={Style.addressDetail}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, 
                                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. 
                                Banyumas, 53181
                            </p>
                            <button type="button" className={`btn ${Style.btnAddressUser}`} data-toggle="modal" data-target="#modalAdress">
                                Choose another address
                            </button>                  
                        </div>
                        {product.map((item)=>
                            <CartBox name={item.name} img={item.imgUrl} price={item.price} type='checkout'/>
                        )}
                    </section>
                    <section className={Style.payment}>
                        <p className={Style.titlePaymentBox}>Shopping summary</p>
                        <div className={Style.orderDelivery}>
                            <p className={Style.orderOrDelivery}>Order</p>
                            <p className={Style.amountOfMoney}>Rp. {total}</p>
                        </div>
                        <div className={Style.orderDelivery}>
                            <p className={Style.orderOrDelivery}>Delivery</p>
                            <p className={Style.amountOfMoney}>Rp. 5000</p>
                        </div>
                        <div className={Style.summary}>
                            <p className={Style.shoppingSummary}>Shopping summary</p>
                            <p className={Style.total}>Rp. {total + 5000}</p>
                        </div>
                        <button type="button" className={`btn ${Style.btnPayment}`} data-toggle="modal" data-target="#modalPayment">
                            Select payment
                        </button>
                    </section>
                </div>
                <div className="modal fade" id="modalAdress" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className={`modal-title ${Style.modalCheckoutTitle}`} id="exampleModalLabel">Choose another address</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div className="modal-body">
                            <button type="button" className={Style.addingNewAddress}>Add new Address</button>
                            <div className={Style.addressUserOld}>
                                <p className={Style.titleBox}>Andreas Jane</p>
                                <p className={Style.addressDetail}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, 
                                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. 
                                Banyumas, 53181
                                </p>
                                <button type="button" className={`btn ${Style.btnAddressUserOld}`} data-toggle="modal" data-dismiss="modal" data-target="#modalAdressNew">
                                    Change address
                                </button>    
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalAdressNew" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className={`modal-title ${Style.modalCheckoutTitle}`} id="exampleModalLabel">Add new address</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="col">
                                    <div className="row-12">
                                        <form>
                                            <div className="form-group">
                                                <label className="label-form-modal" for="addressType">Save address as (ex : home address, office address)</label>
                                                <input type="text" className={`form-control ${Style.placeholderFormModal}`} id="addressType" aria-describedby="emailHelp" placeholder="Rumah"/>
                                            </div>
                                        </form>                              
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <div className="form-group">
                                                    <label className="label-form-modal" for="nameRecipient">Recipient’s name</label>
                                                    <input type="text" className={`form-control ${Style.placeholderFormModal}`} id="nameRecipient" aria-describedby="emailHelp" placeholder="Name"/>
                                                </div>
                                            </form> 
                                        </div>
                                        <div className="col">
                                            <form>
                                                <div className="form-group">
                                                    <label className="label-form-modal" for="phoneNumber">Recipient’s phone number</label>
                                                    <input type="text" className={`form-control ${Style.placeholderFormModal}`} id="phoneNumber" aria-describedby="emailHelp" placeholder="Phone number"/>
                                                </div>
                                            </form> 
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <div className="form-group">
                                                    <label className="label-form-modal" for="addressUser">Address</label>
                                                    <input type="text" className={`form-control ${Style.placeholderFormModal}`} id="addressUser" aria-describedby="emailHelp" placeholder="Address"/>
                                                </div>
                                            </form> 
                                        </div>
                                        <div className="col">
                                            <form>
                                                <div className="form-group">
                                                    <label className="label-form-modal" for="postalCode">Postal code</label>
                                                    <input type="text" className={`form-control ${Style.placeholderFormModal}`} id="postalCode" aria-describedby="emailHelp" placeholder="Postal code"/>
                                                </div>
                                            </form> 
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <form>
                                                <div className="form-group">
                                                    <label className="label-form-modal" for="placeUser">City or subdistrict</label>
                                                    <input type="text" className={`form-control ${Style.placeholderFormModal}`} id="placeUser" aria-describedby="emailHelp" placeholder="City or subdistrict"/>
                                                </div>
                                            </form>  
                                        </div>                            
                                    </div>
                                </div>
                                <input type="checkbox" id="primaryAddress" className={Style.checkboxModalAddress}/><label className={Style.labelPrimaryAddress} for="primaryAddress"> Make it the primary address</label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className={`btn ${Style.btnCancelNewAddress}`} data-dismiss="modal">Cancel</button>
                                <button type="button" className={`btn ${Style.btnSaveNewAddress}`}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalPayment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className={`modal-title ${Style.modalPaymentTitle}`} id="exampleModalLabel">Payment</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div className="modal-body">
                            <div className={Style.contentModal}>
                                <p className={Style.paymentTitle}>Payment method</p>
                                <div className="row mb-4">
                                    <div className="col"><img className={Style.imgPayment} src={Gopay} alt="Gopay"/></div>
                                    <div className="col"><p className={Style.namePayment}>Gopay</p></div>
                                    <div className="col"><input type="checkbox" name="gopay" id="gopay" className={Style.checkPayment}/></div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col"><img className={Style.imgPayment} src={PosIndonesia} alt="Pos Indonesia"/></div>
                                    <div className="col"><p className={Style.namePayment}>Pos Indonesia</p></div>
                                    <div className="col"><input type="checkbox" name="posIndonesia" id="posIndonesia" className={Style.checkPayment}/></div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col"><img className={Style.imgPayment} src={MasterCard} alt="MasterCard"/></div>
                                    <div className="col"><p className={Style.namePayment}>Mastercard</p></div>
                                    <div className="col"><input type="checkbox" name="mastercard" id="masterCard" className={Style.checkPayment}/></div>
                                </div>
                                <p className={Style.paymentTitle}>Shopping summary</p>
                                <div className={Style.orderDelivery}>
                                    <p className={Style.orderOrDelivery}>Order</p>
                                    <p className={Style.amountOfMoney}>Rp. {total}</p>
                                </div>
                                <div className={Style.orderDelivery}>
                                    <p className={Style.orderOrDelivery}>Delivery</p>
                                    <p className={Style.amountOfMoney}>Rp. 5000</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className={`footerSummary mr-auto ml-4`}>
                                <p className={Style.paymentTitle}>Shopping summary</p>
                                <p className={Style.total}>Rp. {total + 5000}</p>
                            </div>
                            <button type="button" className={`Style.btn ${Style.btnSaveNewAddress}`} onClick={handleSubmit} >Buy</button>
                        </div>
                        </div>
                    </div>
                </div>          
            </main>
        </div>
    )
}

export default Checkout
