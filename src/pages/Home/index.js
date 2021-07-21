import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar'
import Style from './home.module.css'
import Card from '../../components/card'
import axios from 'axios'

const Home = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        console.log('useEffect dijlaan kan');
        const url = process.env.REACT_APP_API_URL
        console.log(url)
        axios.get(`${url}products?page=1&limit=10&column=updatedAt&sort=desc`)
        .then((res) => {
            setProduct(res.data.data.result)
        })
        .catch((err) => {
        })
    }, [])
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
    console.log(popular);
    return (
        <div>
            <Navbar/>
            <div className={Style.container}>
                <h1 className={Style.category}>New</h1>
                <p className={Style.category}>You've never seen it before</p>
                <div className={Style.cardbox}>{product.map((item)=>
                    <Card name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id}/>
                )}
                </div>
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
