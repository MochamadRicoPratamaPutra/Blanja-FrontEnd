import React from 'react'
import style from './card.module.css'
import Star from '../../assets/Star.svg'
import { Link } from 'react-router-dom'

const Card = ({name, price, imgUrl, id}) => {
    name = name.slice(0,30)
    const handleClick = () =>{
        window.scrollTo(0, 0);
    }
    return (
    <div className={style.wrapper}>
        <Link onClick={handleClick()} className={style.link} to={`/products/${id}`}>
            <div className={style.photoBox}>
                <img className={style.photo} src={imgUrl} alt="productPhoto" />
            </div>
            <div className={style.contentCard}>
                <p className={style.title}>{name}</p>
                <p className={style.content}>Rp.{price}</p>
                <div className={style.review}>
                    <img src={Star} alt="starReview" className={style.star}/>
                    <img src={Star} alt="starReview" className={style.star}/>
                    <img src={Star} alt="starReview" className={style.star}/>
                    <img src={Star} alt="starReview" className={style.star}/>
                    <img src={Star} alt="starReview" className={style.star}/>
                    <p className={style.reviewText}>(10)</p>
                </div>
            </div>
        </Link>
    </div>
    )
}

export default Card
