import React from 'react'
import { Link } from 'react-router-dom'
import Style from './profile.module.css'
import Pen from '../../../assets/pen-profile.png'
import User from '../../../assets/user 1.svg'
import Map from '../../../assets/map-pin (3) 1.svg'
import Clipboard from '../../../assets/clipboard 1.svg'
import { useSelector } from 'react-redux'
const ProfileAddress = () => {
    const user = useSelector(state => state.user.profile)
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
                        <li class={`${Style.navItem} ${Style.active}`}>
                            <div class={Style.boxSubNaver}>
                                <img class={`${Style.boxImageProfile} ${Style.colorBox2}`} src={Map} alt=""/>
                                <Link class={`nav-link ${Style.navVerticalTitle} ${Style.activePage}`} to={`/profile-address/${user.id}`}>Shipping & address</Link>
                            </div>
                        </li>
                        <li class={Style.navItem}>
                            <div class={Style.boxSubNaver}>
                                <img class={`${Style.boxImageProfile} ${Style.colorBox3}`} src={Clipboard} alt=""/>
                                <Link class={`nav-link ${Style.navVerticalTitle}`} to={`/profile-order/${user.id}`} tabindex="-1" aria-disabled="true">My order</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class={`col-md-9 ${Style.mainPage}`}>
                    <div class={Style.mainProfile}>
                        <p class={Style.mainProfileTitle}>Choose another address</p>
                        <p class={Style.mainProfileSubTitle}>Manage your address</p>
                        <hr class={Style.hrMargin}/>
                        <div class={Style.contentBody}>
                            <button type="button" class={Style.addingNewAddress}>Add new address</button>
                            <div class={Style.addressUserOld}>
                                <p class={Style.titleBox}>Andreas Jane</p>
                                <p class={Style.addressDetail}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, 
                                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. 
                                Banyumas, 53181
                                </p>
                                <button type="button" class={`btn ${Style.btnAddressUserOld}`} data-toggle="modal" data-dismiss="modal" data-target="#modalAdressNew">
                                    Change address
                                </button>
                                <div class="modal fade" id="modalAdressNew" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class={`modal-title ${Style.modalCheckoutTitle}`} id="exampleModalLabel">Add new address</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="col">
                                                <div class="row-12">
                                                    <form>
                                                        <div class="form-group">
                                                            <label class={Style.labelFormModal} for="addressType">Save address as (ex : home address, office address)</label>
                                                            <input type="text" class={`form-control ${Style.placeholderFormModal}`} id="addressType" aria-describedby="emailHelp" placeholder="Rumah"/>
                                                        </div>
                                                    </form>                              
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <form>
                                                            <div class="form-group">
                                                                <label class={Style.labelFormModal} for="nameRecipient">Recipient’s name</label>
                                                                <input type="text" class={`form-control ${Style.placeholderFormModal}`} id="nameRecipient" aria-describedby="emailHelp" placeholder="Name"/>
                                                            </div>
                                                        </form> 
                                                    </div>
                                                    <div class="col">
                                                        <form>
                                                            <div class="form-group">
                                                                <label class={Style.labelFormModal} for="phoneNumber">Recipient’s phone number</label>
                                                                <input type="text" class={`form-control ${Style.placeholderFormModal}`} id="phoneNumber" aria-describedby="emailHelp" placeholder="Phone number"/>
                                                            </div>
                                                        </form> 
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <form>
                                                            <div class="form-group">
                                                                <label class={Style.labelFormModal} for="addressUser">Address</label>
                                                                <input type="text" class={`form-control ${Style.placeholderFormModal}`} id="addressUser" aria-describedby="emailHelp" placeholder="Address"/>
                                                            </div>
                                                        </form> 
                                                    </div>
                                                    <div class="col">
                                                        <form>
                                                            <div class="form-group">
                                                                <label class={Style.labelFormModal} for="postalCode">Postal code</label>
                                                                <input type="text" class={`form-control ${Style.placeholderFormModal}`} id="postalCode" aria-describedby="emailHelp" placeholder="Postal code"/>
                                                            </div>
                                                        </form> 
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <form>
                                                            <div class="form-group">
                                                                <label class={Style.labelFormModal} for="placeUser">City or subdistrict</label>
                                                                <input type="text" class={`form-control ${Style.placeholderFormModal}`} id="placeUser" aria-describedby="emailHelp" placeholder="City or subdistrict"/>
                                                            </div>
                                                        </form>  
                                                    </div>                            
                                                </div>
                                            </div>
                                            <input type="checkbox" id="primaryAddress" class={Style.checkboxModalAddress}/><label class="label-primary-address" for="primaryAddress"> Make it the primary address</label>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class={`btn ${Style.btnCancelNewAddress}`} data-dismiss="modal">Cancel</button>
                                            <button type="button" class={`btn ${Style.btnSaveNewAddress}`}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileAddress