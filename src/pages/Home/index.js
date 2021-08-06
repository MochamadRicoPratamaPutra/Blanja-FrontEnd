import React, {useState, useEffect} from 'react'
import Style from './home.module.css'
import Card from '../../components/card'
import axios from 'axios'
import { useLocation } from 'react-router'
import Carousel from '../../components/carousel'
import CarouselCategory from '../../components/carouselCategory'
import { Link } from 'react-router-dom'
const Home = () => {
    const [product, setProduct] = useState([])
    const location = useLocation()
    console.log(location)
    useEffect(()=>{
        console.log('useEffect dijlaan kan')
        axios.get(`${process.env.REACT_APP_API_URL}v1/products?page=1&limit=10&column=createdAt&sort=desc`)
        .then((res) => {
            setProduct(res.data.data.result)
        })
        .catch((err) => {
        })
    }, [location])
    console.log(product)
    const [popular, setPopular] = useState([])
    useEffect(()=>{
        console.log('useEffect popular dijlaan kan')
        axios.get(`${process.env.REACT_APP_API_URL}v1/products?page=1&limit=10`)
        .then((res) => {
            console.log('berhasil')
            setPopular(res.data.data.result)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [location])
    console.log('test ' + popular);
    return (
        <div>
            <div className={Style.container}>
                <Carousel/>
                <CarouselCategory />
                <h1 className={Style.category}>New</h1>
                <p className={Style.category}>You've never seen it before</p>
                <div className={Style.cardbox}>{product.map((item)=>
                    <Card name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id}/>
                )}
                </div>
                <Link to='/new?page=1&limit=5&sort=desc' className={Style.seeMore}>See more>>></Link>
                <h1 className={Style.category}>Popular</h1>
                <p className={Style.category}>Find clothes that are trending recently</p>
                <div className={Style.cardbox}>{popular.map((item)=>
                    <Card name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Home
