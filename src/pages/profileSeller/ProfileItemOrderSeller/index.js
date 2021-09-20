import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Style from './profile.module.css'
import Pen from '../../../assets/pen-profile.png'
import Collapse from '../../../assets/colapseLogo.svg'
import Home from '../../../assets/home.svg'
import Product from '../../../assets/product.svg'
import Cart from '../../../assets/shopping-cart-seller.svg'
import { useSelector } from 'react-redux'
import CartBox from '../../../components/CartBox'
import axios from 'axios'
import { useParams } from 'react-router'
const ProfileOrderItemSeller = () => {
    const user = useSelector(state => state.user.profile)
    const {id} = useParams()
    const [product, setProduct] = useState([])
    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}v1/order-items/${id}`, {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }})
      .then((res) => {
          setProduct(res.data.data)
      })
      .catch((err) => {
      })
  }, [id])
    return (
        <div>
            <div class="row no-gutter mt-0 nav-vertical ml-0 mr-0">
            <div className={`col-md-3 ${Style.backgroundNavVer} mt-2 pr-3 pt-4`}>
                    <ul className="nav flex-column ml-3 mb-5">
                        <li className={Style.navItem}>
                            <div className={`nav-link mb-5 ${Style.profileNav}`} aria-current="page">
                                <img className={Style.profileImage} src={user.profilePicture} alt=""/>
                                <div className={Style.profileName}>
                                    <Link className={`${Style.navVerticalTitle} ${Style.activePage}`} to={`/profile-seller/${user.id}`}>{user.name.slice(0, 13)}</Link>
                                    <div className={Style.editingProfile}>
                                        <img src={Pen} alt=""/>
                                        <Link to={`/profile-seller/${user.id}`} className={Style.editProfile}>Ubah profile</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${Style.navItem}`}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox1}`} src={Home} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle} `} to={`/profile-seller/${user.id}`}>Store</Link>
                                </div>                        
                                <div className={Style.collapseBoxSub}>
                                    <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseUser" aria-expanded="false" aria-controls="collapseUser">
                                        <img src={Collapse} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div className="collapse" id="collapseUser">
                                <Link to={`/profile-seller/${user.id}`} className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle} `}>Store Profile</Link>
                            </div>
                        </li>
                        <li className={Style.navItem}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox2}`} src={Product} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle}`} to={`/profile-seller-my-product/${user.id}`}>Product</Link>    
                                </div>
                                <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseProduct" aria-expanded="false" aria-controls="collapseProduct">
                                    <img src={Collapse} alt=""/>
                                </button>
                            </div>
                            <div className="collapse" id="collapseProduct">
                                <Link to={`/profile-seller-my-product/${user.id}`} className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>My product</Link>
                                <Link to={`/profile-seller-new-product/${user.id}`} className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle} `}>Selling product</Link>
                            </div>
                        </li>
                        <li className={`${Style.navItem} ${Style.active}`}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox3}`} src={Cart} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle} ${Style.activePage}`} to={`/profile-seller-order/${user.id}`} tabindex="-1" aria-disabled="true">Order</Link>
                                </div>
                                <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseOrder" aria-expanded="false" aria-controls="collapseOrder">
                                    <img src={Collapse} alt=""/>
                                </button>
                            </div>
                            <div className="collapse" id="collapseOrder">
                                <Link to={`/profile-seller-order/${user.id}`} className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle} ${Style.activePage}`}>My order</Link>
                                <Link to={`/profile-seller-order-cancel/${user.id}`} className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>Order cancel</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class={`col-md-9 ${Style.mainPage}`}>
                    <div class={Style.mainProfile}>
                      {product.map((item)=>
                      <div className={Style.itemContainer}>
                        <CartBox name={item.name} img={item.imgUrl} price={item.price} type='checkout'/>
                        <h1>x{item.quantity}</h1>
                      </div>
                      )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileOrderItemSeller