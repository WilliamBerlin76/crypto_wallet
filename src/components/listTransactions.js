import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ListTransactions = props => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        
        axios.get('http://localhost:5000/chain')
            .then(res => {
                let chain = res.data.chain
                const userTransArr = []
                chain.map(block => {
                    
                    block.transactions.map(trans => {
                        if (trans.recipient === props.user || trans.sender === props.user) userTransArr.push(trans)
                    })
                })
                setTransactions(userTransArr)
            })
            .catch(err => {
                console.log('FROM LISTTRANSACTIONS', err)
            })

    },[props.user])

    let coins = 0
    transactions.forEach(item => {
        props.user === item.recipient ?
        coins += item.amount
        :
        coins -= item.amount
    })
    
    return (
        <>  
            <h3>{props.user}</h3>
            <h4>Balance: {coins}</h4>
            <h5>Transactions:</h5>
            {transactions.map(item => {
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