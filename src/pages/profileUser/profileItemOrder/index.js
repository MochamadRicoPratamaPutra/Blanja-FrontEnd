import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Style from './profile.module.css'
import Pen from '../../../assets/pen-profile.png'
import User from '../../../assets/user 1.svg'
import Map from '../../../assets/map-pin (3) 1.svg'
import Clipboard from '../../../assets/clipboard 1.svg'
import { useSelector } from 'react-redux'
import CartBox from '../../../components/CartBox'
import axios from 'axios'
import { useParams } from 'react-router'
const ProfileOrderItem = () => {
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
                <div class={`col-md-3 ${Style.backgroundNavVer} mt-2 pr-3 pt-4`}>
                    <ul class={`nav flex-column ml-3 mb-5`}>
                        <li class={Style.navItem}>
                            <div class={`nav-link mb-5 ${Style.profileNav}`} aria-current="page">
                                <img class={Style.profileImage} src={user.profilePicture} alt=""/>
                                <div class={Style.profileName}>
                                    <Link class={`${Style.navVerticalTitle} ${Style.activePage}`} to={`/profile/${user.id}`}>{user.name.slice(0, 13)}</Link>
                                    <div class={Style.editingProfile}>
                                        <img src={Pen} alt=""/>
                                        <Link to={`/profile/${user.id}`} class={Style.editProfile}>Ubah profile</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class={`${Style.navItem} `}>
                            <div class={Style.boxSubNaver}>
                                <img class={`${Style.boxImageProfile} ${Style.colorBox1}`} src={User} alt=""/>
                                <Link class={`nav-link ${Style.navVerticalTitle} `} to={`/profile/${user.id}`}>My Account</Link>
                            </div>
                        </li>
                        <li class={`${Style.navItem}`}>
                            <div class={Style.boxSubNaver}>
                                <img class={`${Style.boxImageProfile} ${Style.colorBox2}`} src={Map} alt=""/>
                                <Link class={`nav-link ${Style.navVerticalTitle} `} to={`/profile-address/${user.id}`}>Shipping & address</Link>
                            </div>
                        </li>
                        <li class={`${Style.navItem}  ${Style.active}`}>
                            <div class={Style.boxSubNaver}>
                                <img class={`${Style.boxImageProfile} ${Style.colorBox3}`} src={Clipboard} alt=""/>
                                <Link class={`nav-link ${Style.navVerticalTitle} ${Style.activePage}`} to={`/profile-order/${user.id}`} tabindex="-1" aria-disabled="true">My order</Link>
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

export default ProfileOrderItem