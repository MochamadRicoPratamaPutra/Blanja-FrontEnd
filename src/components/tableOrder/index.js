import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import { useHistory } from 'react-router'
import Style from '../table/table.module.css'
const TableOrder = (props) => {
    const [products, setProduct] = useState([])
    const history = useHistory()
    useEffect(()=>{
        console.log('useEffect dijlaan kan');
        if (props.role === 'seller') {
          axios.get(`${process.env.REACT_APP_API_URL}v1/order-detail/`, {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }})
          .then((res) => {
            setProduct(res.data.data)
          })
          .catch((err) => {
            console.log(err)
          })
        } else {
          axios.get(`${process.env.REACT_APP_API_URL}v1/order-detail/${props.userID}`, {headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }})
          .then((res) => {
            setProduct(res.data.data)
          })
          .catch((err) => {
            console.log(err)
          })
        }
    },[props.role, props.userID])
    const handleEdit = (item) =>{
      if (props.role === 'seller') {
        history.push(`/profile-seller-order-item/${item.id}`)
      } else {
        history.push(`/profile-item/${item.id}`)
      }
    }
    console.log(products)
    const columns = [{  
        Header: 'ID Order',  
        accessor: 'id' ,
        }
        ,{  
        Header: 'Total',  
        accessor: 'total' ,
        }
        ,{  
        Header: 'Ordered at',  
        accessor: 'createdAt',
        },
        {
        Header: 'Option',
        Cell: row => (
            <div>
                <button className={Style.edit} onClick={() => handleEdit(row.original)}>Check Product</button>
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

export default TableOrder
