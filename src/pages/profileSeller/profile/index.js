import React from 'react'
import { Link } from 'react-router-dom'
import Style from './profile.module.css'
import ProfileBig from '../../../assets/christian-buehner-DItYlc26zVI-unsplash 1.png'
import Pen from '../../../assets/pen-profile.png'
import Collapse from '../../../assets/colapseLogo.svg'
import Home from '../../../assets/home.svg'
import Product from '../../../assets/product.svg'
import Cart from '../../../assets/shopping-cart-seller.svg'
import Navbar from '../../../components/navbar'

const ProfileSeller = () => {
    return (
        <div>
            <Navbar/>
            <div class="row no-gutter mt-0 nav-vertical ml-0 mr-0">
                <div className={`col-md-3 ${Style.backgroundNavVer} mt-2 pr-3 pt-4`}>
                    <ul className="nav flex-column ml-3 mb-5">
                        <li className={Style.navItem}>
                            <div className={`nav-link mb-5 ${Style.profileNav}`} aria-current="page">
                                <img className={Style.profileImage} src={ProfileBig} alt=""/>
                                <div className={Style.profileName}>
                                    <Link className={`${Style.navVerticalTitle} ${Style.activePage}`} to="profile">Jonas Mikael</Link>
                                    <div className={Style.editingProfile}>
                                        <img src={Pen} alt=""/>
                                        <Link to="#" className={Style.editProfile}>Ubah profile</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${Style.navItem} ${Style.active}`}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox1}`} src={Home} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle} ${Style.activePage}`} to="profile-seller">Store</Link>
                                </div>                        
                                <div className={Style.collapseBoxSub}>
                                    <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseUser" aria-expanded="false" aria-controls="collapseUser">
                                        <img src={Collapse} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div className="collapse" id="collapseUser">
                                <Link to="profile-seller" className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle} ${Style.activePage}`}>Store Profile</Link>
                            </div>
                        </li>
                        <li className={Style.navItem}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox2}`} src={Product} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle}`} to="profile-seller-my-product">Product</Link>    
                                </div>
                                <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseProduct" aria-expanded="false" aria-controls="collapseProduct">
                                    <img src={Collapse} alt=""/>
                                </button>
                            </div>
                            <div className="collapse" id="collapseProduct">
                                <Link to="profile-seller-my-product" className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>My product</Link>
                                <Link to="profile-seller-new-product" className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle} `}>Selling product</Link>
                            </div>
                        </li>
                        <li className={Style.navItem}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox3}`} src={Cart} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle}`} to="profile-seller-order" tabindex="-1" aria-disabled="true">Order</Link>
                                </div>
                                <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseOrder" aria-expanded="false" aria-controls="collapseOrder">
                                    <img src={Collapse} alt=""/>
                                </button>
                            </div>
                            <div className="collapse" id="collapseOrder">
                                <Link to="profile-seller-order" className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>My order</Link>
                                <Link to="profile-seller-order-cancel" className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>Order cancel</Link>
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
                                        <label class={Style.mainProfileSubTitle} for="name">Name</label>
                                    </div>
                                    <div class="col">
                                        <input type="text" name="name" id="name" placeholder="Name" class="form-control"/>
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
                                        <p class={Style.mainProfileSubTitle}>Gender</p>
                                    </div>
                                    <div class="row ml-auto mr-auto">
                                        <div class={`col-6 ${Style.gender}`}>
                                            <input class={Style.formCheckInput} type="radio" name="gender-choices" id="lakiLaki"/>
                                            <label class={Style.formCheckLabel} for="lakiLaki">
                                                Laki-laki
                                            </label>
                                        </div>
                                        <div class={`col-6 ${Style.gender}`}>
                                            <input class={Style.formCheckInput} type="radio" name="gender-choices" id="perempuan"/>
                                            <label class={Style.formCheckLabel} for="perempuan">
                                                Perempuan
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p class={Style.mainProfileSubTitle}>Date of birth</p>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <select id="dateBirth" name="dateOfBirth">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>                                  
                                        </div>
                                        <div class="col">
                                            <select id="monthBirth" name="dateOfBirth">
                                                <option value="january">January</option>
                                                <option value="february">February</option>
                                                <option value="march">March</option>
                                                <option value="april">April</option>
                                                <option value="may">May</option>
                                                <option value="juny">Juny</option>
                                                <option value="july">July</option>
                                                <option value="august">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>
                                            </select>
                                        </div>
                                        <div class="col">
                                            <select id="yearBirth" name="dateOfBirth">
                                                <option value="1990">1990</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class={`${Style.saveProfile} mr-auto ml-auto mt-5`}>Save</button>
                            </section>
                            <section class={Style.photoProfile}>
                                <img src={ProfileBig} alt=""/>
                                <button type="button" class={`${Style.mainProfileSubTitle} ${Style.selectingImage}`}>Select image</button>
                            </section>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ProfileSeller
