import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ListTransactions = props => {
    useEffect(() => {
        axios.get('http://localhost:5000/chain')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('FROM LISTTRANSACTIONS', err)
            })
    },[])
    
    return (
        <p>transaction list</p>
    )

}

export default ListTransactions;