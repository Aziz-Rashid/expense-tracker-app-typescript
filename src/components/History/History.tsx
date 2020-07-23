import React, { useContext} from 'react'
import './History.css'
import {GlobalContext} from './../../Services/GlobalState'
import FlipMove from 'react-flip-move'


export default function History() {
    const {transactions} = useContext(GlobalContext)
    const {deletetransitions} = useContext(GlobalContext)
    return (
        <div>
            <p className="transaction-historyy">Transaction History</p>
            <FlipMove duration={800} easing="ease-in-out">
            {transactions.map((transaction:any,id:number) =>(
                <div key={id} className="slider">
                   <div> <p className={transaction.amount > 0 ? 'gre':'re'}>{transaction.text}</p></div>
                   <div><p> ${Math.abs(transaction.amount)}</p></div>
                   <div> <button className="buttonx"  onClick={(clickhandler) => deletetransitions(transaction.id)}>X</button></div>
                    
                </div>
            ))}
            </FlipMove>
            
        </div>
    )
}