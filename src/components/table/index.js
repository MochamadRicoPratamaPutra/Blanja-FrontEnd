import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import { useHistory } from 'react-router'
import Style from './table.module.css'
const Table = (props) => {
    const [products, setProduct] = useState([])
    const history = useHistory()
    useEffect(()=>{
        console.log('useEffect dijlaan kan');
        axios.get('http://localhost:4000/products')
        .then((res) => {
            setProduct(res.data.data)
        })
        .catch((err) => {
        })
    }, [])
    const handleDelete = (item) =>{
        const name = item.name
        axios.delete(`http://localhost:4000/products/${item.id}`)
        .then((res)=>{
            alert(`Success deleting data with name ${name}`)
            history.go(0)
        })
    }
    const handleEdit = (item) =>{
        history.push(`/profile-seller-update-product/${item.id}`)
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
