import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ListTransactions = props => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        
        axios.get('http://localhost:5000/chain')
            .then(res => {
                // setUserTransactions([])
                let chain = res.data.chain
                chain.map(block => {
                    block.transactions.map(trans => {
                        transactions.push(trans) 
                    })
                })
                
            })
            .catch(err => {
                console.log('FROM LISTTRANSACTIONS', err)
            })

    },[])

    const userTransactions = transactions.filter(trans => {
        return trans.recipient === props.user || trans.sender === props.user
    })
    let getCoin = 0
    let giveCoin = 0
    userTransactions.forEach(item => {
        props.user == item.recipient ?
        getCoin += item.amount
        :
        giveCoin += item.amount
    })
    
    return (
        <>  
            <h3>Balance: {getCoin - giveCoin}</h3>
            <p>transaction list</p>
            {userTransactions.map(item => {
                return(
                    <>
                        <p>to: {item.recipient}</p>
                        <p>from: {item.sender}</p>
                        <p>amount: {props.user === item.recipient ? '+' : '-'}{item.amount}</p>
                        <p>-------------------------------------------------------</p>
                    </>
                )
            })}
        </>
    )

}

export default ListTransactions;