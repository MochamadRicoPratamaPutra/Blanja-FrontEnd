import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import { useHistory } from 'react-router'
import Style from './table.module.css'
import { deleteProduct, productId } from '../../configs/redux/action/productAction';
import { useDispatch } from 'react-redux';
const Table = (props) => {
    const [products, setProduct] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('useEffect dijlaan kan');
        axios.get(`${process.env.REACT_APP_API_URL}v1/products`)
        .then((res) => {
            setProduct(res.data.data)
        })
        .catch((err) => {
        })
    }, [])
    const handleDelete = (item) =>{
        const name = item.name
        const id = item.id
        const data = {name, id}
        console.log(data)
        dispatch(deleteProduct(data))
    }
    const handleEdit = (item) =>{
        const id = item.id
        dispatch(productId(id))
        .then(() => {
            history.push(`/profile-seller-update-product/${id}`)
        })
    }
    console.log(products)
    const columns = [{  
        Header: 'Name',  
        accessor: 'name' ,
        }
        ,{  
        Header: 'Price',  
        accessor: 'price' ,
        }
        ,{  
        Header: 'Created at',  
        accessor: 'createdAt',
        },
        {
            Header: 'Option',
            Cell: row => (
                <div>
                    <button className={Style.edit} onClick={() => handleEdit(row.original)}>Edit</button>
                    <button className={Style.delete}onClick={() => handleDelete(row.original)}>Delete</button>
                </div>
            )
        }
    ]
    return (
        <div>
            <ReactTable  
            data={products}  
            columns={columns}
            defaultPageSize={5}
            filterable={true}
            />
        </div>
    )
}

export default Table
