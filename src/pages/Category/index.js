import React, {useState, useEffect} from 'react'
import Style from '../Home/home.module.css'
import Card from '../../components/card'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Category = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        console.log('useEffect dijlaan kan')
        axios.get(`${process.env.REACT_APP_API_URL}v1/category/${id}`)
        .then((res) => {
            setProduct(res.data.data)
        })
        .catch((err) => {
        })
    }, [id])
    console.log(product)
    return (
        <div>
            <div className={Style.container}>
                <h1 className={Style.category}>{id}</h1>
                <div className={Style.cardbox}>{product.map((item)=>
                    <Card name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id}/>
                )}
                </div>
            </div>
        </div>
    )
}

export default Category