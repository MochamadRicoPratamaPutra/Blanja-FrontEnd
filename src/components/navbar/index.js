import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/Group 1159.svg'
import Vector1 from '../../assets/Vector.svg'
import Vector2 from '../../assets/shopping-cart.svg'
import Vector3 from '../../assets/colapseLogo.svg'
import SearchLogo from '../../assets/Search.svg'
import './navbar.css'
const Navbar = (props) => {
    const history = useHistory()
    const [input, setInput]=useState('')
    // console.log();
    const handleSearch =(e)=>{
        e.preventDefault()
        console.log(input)
        history.push(`/search?keyword=${input}`)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="Blanja"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="filter-search">
                            <form className="form-inline my-2 my-lg-0 ml-1 ml-5 searchingProduct">
                                <input onChange={(e) => setInput(e.target.value)} className="form-control search-bar mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                <button onClick={handleSearch} className='searchLogo'><img src={SearchLogo} className='mr-3' alt="Search" /></button>
                            </form>
                            <button className="btn btn-filter my-sm-0" type="submit" data-toggle="modal" data-target="#modal-filter"><img className="filter" src={Vector1} alt=""/></button>
                        </div>
                        <ul className="navbar-nav nav-list ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link mr-0 mr-3" to="#"><img src={Vector2} alt=""/><span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item mr-0 mr-2">
                                <Link to="/login" className="nav-link login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="modal fade" id="modal-filter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Filter</h5>
                        <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <h3 className="title-section">Colors</h3>
                            <div className="color-choice">
                                <input type="checkbox" className="checkmark color-modal-1"/>
                                <input type="checkbox" className="checkmark color-modal-2"/>
                                <input type="checkbox" className="checkmark color-modal-3"/>
                                <input type="checkbox" className="checkmark color-modal-4"/>
                                <input type="checkbox" className="checkmark color-modal-5"/>
                            </div>
                            <h3 className="title-section">Sizes</h3>
                            <div className="size-choice">
                                <input type="checkbox" className="checkmark-size visually-hidden" id='size-check-1'/><label className='string-check-box size-check-box-1' htmlFor="size-check-1">XS</label>
                                <input type="checkbox" className="checkmark-size visually-hidden" id='size-check-2'/><label className='string-check-box size-check-box-2' htmlFor="size-check-2">S</label>
                                <input type="checkbox" className="checkmark-size visually-hidden" id='size-check-3'/><label className='string-check-box size-check-box-3' htmlFor="size-check-3">M</label>
                                <input type="checkbox" className="checkmark-size visually-hidden" id='size-check-4'/><label className='string-check-box size-check-box-4' htmlFor="size-check-4">L</label>
                                <input type="checkbox" className="checkmark-size visually-hidden" id='size-check-5'/><label className='string-check-box size-check-box-5' htmlFor="size-check-5">XL</label>
                            </div>
                            <h3 className="title-section">Category</h3>
                            <div className="category-modal">
                                <input type="checkbox" className="checkmark-size visually-hidden" id='category-check-1'/><label className='string-check-box category-check-box-1' htmlFor="category-check-1">All</label>
                                <input type="checkbox" className="checkmark-size visually-hidden" id='category-check-2'/><label className='string-check-box category-check-box-2' htmlFor="category-check-2">Women</label>
                                <input type="checkbox" className="checkmark-size visually-hidden" id='category-check-3'/><label className='string-check-box category-check-box-3' htmlFor="category-check-3">Men</label>
                                <input type="checkbox" className="checkmark-size visually-hidden" id='category-check-4'/><label className='string-check-box category-check-box-4' htmlFor="category-check-4">Girl</label>
                                <input type="checkbox" className="checkmark-size visually-hidden" id='category-check-5'/><label className='string-check-box category-check-box-5' htmlFor="category-check-5">Boy</label>
                            </div>
                            <div className="brand-modal">
                                <div className="brand-header-text">
                                    <h3 className="brand-section">Brand</h3>
                                    <p className="brand-category">adidas Originals, Jack & Jones, s.Oliver</p>
                                </div>
                                <button className="btn btn-brand-category" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <img src={Vector3} alt=""/>
                                </button>
                            </div>
                            <div className="collapse" id="collapseExample">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label htmlFor="vehicle1"> Adidas Originals</label><br/>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                <label htmlFor="vehicle2"> Jack & Jones</label><br/>
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                <label htmlFor="vehicle3"> s.Oliver</label><br/>
                            </div>
                        </div>
                        <div className="modal-footer modal-confirm">
                            <button type="button" className="btn btn-modal-discard btn-secondary" data-dismiss="modal">Discard</button>
                            <button type="button" className="btn btn-modal-apply btn-primary">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
