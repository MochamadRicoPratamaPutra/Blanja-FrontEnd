import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router'
import qs from 'query-string'
import Navbar from '../../components/navbar'
import Card from '../../components/card'
import axios from 'axios'
import Style from './search.module.css'
const Search = () => {
    const [product, setProduct] = useState([])
    const location = useLocation()
    const [text, setText]=useState('')
    const key = qs.parse(location.search)
    console.log(location);
    useEffect(() => {
        console.log('ini use effect');
        const {keyword} = qs.parse(location.search)
        setText(keyword)
        axios.get(`http://localhost:4000/products?search=name&keyword=${keyword}`)
        .then((res) => {
            setProduct(res.data.data)
        })
        .catch((err) => {
        })
    
    }, [location])
    console.log(product);
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <div className={Style.wrapper}>
                    <h3>Did you search for {text}?</h3>
                    <div className={Style.cardbox}>
                    {product.map((item)=>
                        <Card name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id}/>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
