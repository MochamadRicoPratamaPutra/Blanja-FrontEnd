import React from 'react'
import { Link } from 'react-router-dom'
import Style from './profile.module.css'
import Pen from '../../../assets/pen-profile.png'
import Collapse from '../../../assets/colapseLogo.svg'
import Home from '../../../assets/home.svg'
import Product from '../../../assets/product.svg'
import Cart from '../../../assets/shopping-cart-seller.svg'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
const ProfileSeller = () => {
    const user = useSelector(state => state.user.profile)
    const history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }
    return (
        <div>
            <div class="row no-gutter mt-0 nav-vertical ml-0 mr-0">
                <div className={`col-md-3 ${Style.backgroundNavVer} mt-2 pr-3 pt-4`}>
                    <ul className="nav flex-column ml-3 mb-5">
                        <li className={Style.navItem}>
                            <div className={`nav-link mb-5 ${Style.profileNav}`} aria-current="page">
                                <img className={Style.profileImage} src={user.profilePicture} alt=""/>
                                <div className={Style.profileName}>
                                    <Link className={`${Style.navVerticalTitle} ${Style.activePage}`} to={`/profile-seller/${user.id}`}>{user.name}</Link>
                                    <div className={Style.editingProfile}>
                                        <img src={Pen} alt=""/>
                                        <Link to={`/profile-seller/${user.id}`} className={Style.editProfile}>Ubah profile</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${Style.navItem} ${Style.active}`}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox1}`} src={Home} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle} ${Style.activePage}`} to={`/profile-seller/${user.id}`}>Store</Link>
                                </div>                        
                                <div className={Style.collapseBoxSub}>
                                    <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseUser" aria-expanded="false" aria-controls="collapseUser">
                                        <img src={Collapse} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div className="collapse" id="collapseUser">
                                <Link to={`/profile-seller/${user.id}`} className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle} ${Style.activePage}`}>Store Profile</Link>
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
                        <li className={Style.navItem}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox3}`} src={Cart} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle}`} to={`/profile-seller-order/${user.id}`} tabindex="-1" aria-disabled="true">Order</Link>
                                </div>
                                <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseOrder" aria-expanded="false" aria-controls="collapseOrder">
                                    <img src={Collapse} alt=""/>
                                </button>
                            </div>
                            <div className="collapse" id="collapseOrder">
                                <Link to={`/profile-seller-order/${user.id}`} className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>My order</Link>
                                <Link to={`/profile-seller-order-cancel/${user.id}`} className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>Order cancel</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class={`col-md-9 ${Style.mainPage}`}>
                    <main class={Style.mainProfile}>
                        <p class={Style.mainProfileTitle}>My Profile</p>
                        <p class={Style.mainProfileSubTitle}>Manage your profile information</p>
                        <hr class={Style.hrMargin}/>
                        <section class={Style.mainProfileData}>
                            <section class={Style.biodata}>
                                <div class="row mb-4">
                                    <div class="col">
                                        <label class={Style.mainProfileSubTitle} for="name">Store Name</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" name="storeName" id="name" placeholder="Name" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col">
                                        <label class={Style.mainProfileSubTitle} for="name">Email</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" name="email" id="name" placeholder="Email" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col">
                                        <label class={Style.mainProfileSubTitle} for="name">Phone Number</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" name="phoneNumber" id="name" placeholder="Phone number" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-6">
                                        <p class={Style.mainProfileSubTitle}>Store Description</p>
                                    </div>
                                    <div class={`col-6 ${Style.gender}`}>
                                        <textarea class="form-control" type="text" name="storeDescription" id="lakiLaki"/>
                                    </div>
                                </div>
                                <button type="button" class={`${Style.saveProfile} mr-auto ml-auto mt-5`}>Save</button>
                            </section>
                            <section class={Style.photoProfile}>
                                <img src={user.profilePicture} alt=""/>
                                <button type="button" class={`${Style.mainProfileSubTitle} ${Style.selectingImage}`}>Select image</button>
                            </section>
                        </section>
                    </main>
                    <div>
                        <button type="button" class={`${Style.saveProfile} ml-5 mt-5`} onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSeller
