import React, {useEffect, useState} from 'react'
import Style from './product.module.css'
import Star from '../../assets/Star.svg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/navbar'
import Card from '../../components/card'
import PlusMinus from '../../components/PlusMinus'

const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    let idCat
    useEffect(()=>{
        console.log('useEffect dijlaan kan');
        axios.get(`http://localhost:4000/products/${id}`)
        .then((res) => {
            idCat = res.data.data.categoryID
            setProduct(res.data.data)
        })
        .catch((err) => {
        })
    }, [id])
    console.log(idCat)
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        console.log('useEffect dijlaan kan');
        axios.get('http://localhost:4000/products?page=1&limit=10')
        .then((res) => {
            setPopular(res.data.data.result)
        })
        .catch((err) => {
        })
    }, [])
    const [category, setCategory] = useState([])
    useEffect(()=>{
        console.log('useEffect dijlaan kan');
        axios.get(`http://localhost:4000/category/search=categoryID&keyword=${product.categoryID}`)
        .then((res) => {
            setCategory(res.data.data)
        })
        .catch((err) => {
        })
    }, [idCat])
    console.log(product);
    console.log(category)
    return (
        <div>
            <Navbar/>
            {product.map((item)=>
                <main className={Style.container}>
                    {category.map((item2)=>
                    <p className={Style.directory}><span><Link to="/" className={Style.directory}>Home</Link></span> > <span><Link to={`category/${item.categoryID}`} className={Style.directory}>Category</Link></span> > {item2.name}</p>
                    )}
                    <div className={Style.content}>
                        <div className={Style.photo}>
                            <img className={Style.mainPhoto} src={item.imgUrl} alt=""/>
                        </div>
                        <div className={Style.description}>
                            <h2 className={Style.productName}>{item.name}</h2>
                            <p className={Style.brand}>Zalora Cloth</p>
                            <div className={Style.review}>
                                <img className={Style.star} src={Star} alt="..."/>
                                <img className={Style.star} src={Star} alt="..."/>
                                <img className={Style.star} src={Star} alt="..."/>
                                <img className={Style.star} src={Star} alt="..."/>
                                <img className={Style.star} src={Star} alt="..."/>
                                <p className={Style.score}>(10)</p>
                            </div>
                            <p className={Style.brand}>Price</p>
                            <p className={Style.priceValue}>Rp.{item.price}</p>
                            <p className={Style.misc}>Color</p>
                            <div className={Style.colorChoice}>
                                <input type="radio" name="radioColorProduct" className={`checkmark ${Style.color1}`}/>
                                <input type="radio" name="radioColorProduct" className={`checkmark ${Style.color2}`}/>
                                <input type="radio" name="radioColorProduct" className={`checkmark ${Style.color3}`}/>
                                <input type="radio" name="radioColorProduct" className={`checkmark ${Style.color4}`}/>
                            </div>
                            <div className={Style.containerSizeJumlah}>
                                <div className="row">
                                    <div className="col">
                                        <p className={Style.misc}>Size</p>
                                    </div>
                                    <div className="col">
                                        <p className={Style.misc}>Jumlah</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col ${Style.sizing}`}>
                                        <PlusMinus/>                         
                                    </div>
                                    <div className={`col ${Style.sizing}`}>
                                        <PlusMinus/>   
                                    </div>
                                </div>
                            </div>
                            <div className={Style.choice}>
                                <Link to="#" className={Style.product}>Chat</Link>
                                <Link to="/my-bag" className={Style.product}>Add bag</Link>
                                <Link to="/checkout" className={`${Style.product} ${Style.productBuy}`}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className={Style.information}>
                        <p className={Style.informationTitle}>Informasi Produk</p>
                        <p className={Style.misc2}>Condition</p>
                        <p className={Style.conditionProduct}>New</p>
                        <p className={Style.misc2}>Description</p>
                        <article className={Style.desc}>
                            {item.description}
                        </article>
                    </div>
                    <div className={`${Style.reviewProduct} mt-3`}>
                        <p className={Style.informationTitle}>Product Review</p>
                        <div className={Style.reviewBox}>
                            <div className={Style.scoreBox}>
                                <p className={Style.scoreReviewTotal}>5.0<span className={Style.totalScoreReview}>/10</span></p>
                                <div className={Style.scoreStar}>
                                    <img className={Style.starForReview} src={Star} alt="Star"/>
                                    <img className={Style.starForReview} src={Star} alt="Star"/>
                                    <img className={Style.starForReview} src={Star} alt="Star"/>
                                    <img className={Style.starForReview} src={Star} alt="Star"/>
                                    <img className={Style.starForReview} src={Star} alt="Star"/>
                                </div>
                            </div>
                            <div className={Style.totalReview}>
                                <div className={Style.scorePerReview}>
                                    <img className={`${Style.starScorePerReview} ${Style.marginingReview}`} src={Star} alt=""/>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>5</p>
                                    <div className={`${Style.progress} ${Style.marginingReview}`}>
                                        <div className={Style.progressBar} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>4</p>
                                </div>
                                <div className={Style.scorePerReview}>
                                    <img className={`${Style.starScorePerReview} ${Style.marginingReview}`} src={Star} alt=""/>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>4</p>
                                    <div className={`${Style.progress} ${Style.marginingReview}`}>
                                        <div className={Style.progressBar} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>0</p>
                                </div>
                                <div className={Style.scorePerReview}>
                                    <img className={`${Style.starScorePerReview} ${Style.marginingReview}`} src={Star} alt=""/>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>3</p>
                                    <div className={`${Style.progress} ${Style.marginingReview}`}>
                                        <div className={Style.progressBar} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>0</p>
                                </div>
                                <div className={Style.scorePerReview}>
                                    <img className={`${Style.starScorePerReview} ${Style.marginingReview}`} src={Star} alt=""/>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>2</p>
                                    <div className={`${Style.progress} ${Style.marginingReview}`}>
                                        <div className={Style.progressBar} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>0</p>
                                </div>
                                <div className={Style.scorePerReview}>
                                    <img className={`${Style.starScorePerReview} ${Style.marginingReview}`} src={Star} alt=""/>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>1</p>
                                    <div className={`${Style.progress} ${Style.marginingReview}`}>
                                        <div className={Style.progressBar} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className={`${Style.scoreReview} ${Style.marginingReview}`}>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
            <h3 className={Style.category}>You can also like this</h3>
            <p className={Style.category}>You’ve never seen it before!</p>
            <div className={Style.cardbox}>{popular.map((item)=>
                    <Card name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id}/>)}
            </div>
        </div>
    )
}

export default Product
