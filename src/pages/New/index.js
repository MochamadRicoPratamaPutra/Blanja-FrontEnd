import React, {useState, useEffect} from 'react'
import Style from '../Home/home.module.css'
import Card from '../../components/card'
import axios from 'axios'
import { useLocation } from 'react-router'
import qs from 'query-string'
import { Link } from 'react-router-dom'
const New = () => {
    const [product, setProduct] = useState([])
    const [next, setNext] = useState([])
    const [prev, setPrev] = useState([])
    const location = useLocation()
    const {sort, page} = qs.parse(location.search)
    console.log({sort, page})
    useEffect(()=>{
        console.log('useEffect dijlaan kan')
        const {page, limit, sort} = qs.parse(location.search)
        console.log(page, limit, sort)
        axios.get(`${process.env.REACT_APP_API_URL}v1/products?page=${page}&limit=${limit}&column=createdAt&sort=${sort}`)
        .then((res) => {
            setProduct(res.data.data.result)
            setNext(res.data.data.next)
            setPrev(res.data.data.previous)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [location])
    console.log(product)
    console.log(prev)
    console.log(next)
    return (
        <div>
            <div className={Style.container}>
                <>{sort === "desc" ? <><h1 className={Style.category}>New</h1>
                <p className={Style.category}>You've never seen it before</p></> : <><h1 className={Style.category}>Oldest</h1>
                <p className={Style.category}>Maybe you, already seen it before</p></> }
                </>
                <div className={Style.cardbox}>{product.map((item)=>
                    <Card name={item.name} price={item.price} imgUrl={item.imgUrl} id={item.id}/>
                )}
                </div>
                <div className={Style.pagination}>
                    <>
                        {sort === "desc" ? <Link to={`/new?page=1&limit=5&sort=asc`} 
                    className={Style.prev}>↑</Link> : <Link to={`/new?page=1&limit=5&sort=desc`} 
                    className={Style.prev}>↓</Link> }
                    </>
                    <>
                        {prev ? <Link to={`/new?page=${prev.page}&limit=5&sort=${sort}`} 
                    className={Style.prev}>{prev.page}</Link> : <p className={Style.notDisplay}></p>}
                    </>
                    <p>{page}</p>
                    <>
                        {next ? <Link to={`/new?page=${next.page}&limit=5&sort=${sort}`} 
                    className={Style.next}>{next.page}</Link> : <p></p>}
                    </>
                </div>
            </div>
        </div>
    )
}

export default New
