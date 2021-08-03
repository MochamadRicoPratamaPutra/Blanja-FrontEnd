import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/navbar'
import Style from './profile.module.css'
import Profile from '../../../assets/christian-buehner-DItYlc26zVI-unsplash 1.png'
import Edit from '../../../assets/pen-profile.png'
import Collapse from '../../../assets/colapseLogo.svg'
import Home from '../../../assets/home.svg'
import Product from '../../../assets/product.svg'
import Cart from '../../../assets/shopping-cart-seller.svg'
import Box1 from '../../../assets/box-big.svg'
import Box2 from '../../../assets/box-small.svg'
import axios from 'axios'
const SellingProduct = () => {
    const [form, setForm] = useState({
        name: '',
        price: 0,
        stock: 0,
        categoryID: 1,
        imgUrl: '',
        description: ''
    })
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        form.price = parseInt(form.price)
        form.stock = parseInt(form.stock)
        form.categoryID = parseInt(form.categoryID)
        console.log(form);
        axios.post(`${process.env.REACT_APP_API_URL}/v1/products`, form)
        .then((res)=>{
            alert('success making new entry for product')
        })
        .catch(()=> alert('failed'))
    }
    return (
        <div>
            <Navbar />
            <div className="row no-gutter mt-0 nav-vertical">
                <div className={`col-md-3 ${Style.backgroundNavVer} mt-2 pr-3 pt-4`}>
                    <ul className="nav flex-column ml-3 mb-5">
                        <li className={Style.navItem}>
                            <div className={`nav-link mb-5 ${Style.profileNav}`} aria-current="page">
                                <img className={Style.profileImage} src={Profile} alt=""/>
                                <div className={Style.profileName}>
                                    <Link className={`${Style.navVerticalTitle} ${Style.activePage}`} to="profile">Jonas Mikael</Link>
                                    <div className={Style.editingProfile}>
                                        <img src={Edit} alt=""/>
                                        <Link to="#" className={Style.editProfile}>Ubah profile</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${Style.navItem} ${Style.active}`}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox1}`} src={Home} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle}`} to="profile-seller">Store</Link>
                                </div>                        
                                <div className={Style.collapseBoxSub}>
                                    <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseUser" aria-expanded="false" aria-controls="collapseUser">
                                        <img src={Collapse} alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div className="collapse" id="collapseUser">
                                <Link to="profile-seller" className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>Store Profile</Link>
                            </div>
                        </li>
                        <li className={Style.navItem}>
                            <div className={Style.boxSubNaver}>
                                <div className={Style.boxSub}>
                                    <img className={`${Style.boxImageProfile} ${Style.colorBox2}`} src={Product} alt=""/>
                                    <Link className={`nav-link ${Style.navVerticalTitle} ${Style.activePage}`} to="profile-seller-my-product">Product</Link>    
                                </div>
                                <button className={`btn ${Style.btnCategory}`} type="button" data-toggle="collapse" data-target="#collapseProduct" aria-expanded="false" aria-controls="collapseProduct">
                                    <img src={Collapse} alt=""/>
                                </button>
                            </div>
                            <div className="collapse" id="collapseProduct">
                                <Link to="profile-seller-my-product" className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle}`}>My product</Link>
                                <Link to="profile-seller-selling-product" className={`${Style.collapseNavVer} ${Style.boxSubNaver} ${Style.navVerticalTitle} ${Style.activePage}`}>Selling product</Link>
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
                <div className={`col-md-9 ${Style.mainPage}`}>
                    <div className={Style.mainInventory}>
                        <p className={Style.mainProfileTitle}>Inventory</p>
                        <hr className={Style.hrMargin}/>
                        <div className="row">
                            <div className="col-md-6">
                                <p className={Style.mainProfileSubTitle} for="name">Name of Goods</p>
                                <input type="text" name="name" id="name" placeholder="Email" className="form-control" onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className={Style.mainDetail}>
                        <p className={Style.mainProfileTitle}>Item details</p>
                        <hr className={Style.hrMargin}/>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <p className={Style.mainProfileSubTitle} for="price">Unit price</p>
                                <input type="text" name="price" id="price"  className="form-control" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <p className={Style.mainProfileSubTitle} for="stock">Stock</p>
                                <input type="text" name="stock" id="stock" className="form-control" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <p className={Style.mainProfileSubTitle} for="categoryID">Category</p>
                                <input type="text" name="categoryID" id="categoryID" className="form-control" onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className={Style.mainPhoto}>
                        <p className={Style.mainProfileTitle}>Photo of Goods</p>
                        <hr className={Style.hrMargin}/>
                        <div className={Style.itemPhoto}>
                            <div className={Style.photoBox}>
                                <div className={Style.mainPhotoBox}>
                                    <Link to="#"><img src={Box1} alt="" className={Style.mainItemPhoto}/></Link>
                                    <p className={Style.mainProfileSubTitle}>Foto utama</p>
                                </div>
                                <Link to="#"><img src={Box2} alt="" className={Style.subItemPhoto}/></Link>
                                <Link to="#"><img src={Box2} alt="" className={Style.subItemPhoto}/></Link>
                                <Link to="#"><img src={Box2} alt="" className={Style.subItemPhoto}/></Link>
                                <Link to="#"><img src={Box2} alt="" className={Style.subItemPhoto}/></Link>

                            </div>
                            <hr className={Style.hrMargin}/>
                            <input type="text" name='imgUrl' id='imgUrl' className='form-control' onChange={handleChange} />
                            <Link to="#" className={Style.uploadFotoBox}>Upload foto</Link>
                        </div>
                    </div>
                    <div className={Style.mainPhoto}>
                        <p className={Style.mainProfileTitle}>Description</p>
                        <hr className={Style.hrMargin}/>
                        <div className={Style.mainDescription}>
                            <textarea name="description" id="descriptionBox" className='form-control'rows="13" onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <button className={Style.buttonInput} onClick={handleSubmit}>Jual</button>
                </div>
            </div>
        </div>
    )
}

export default SellingProduct
