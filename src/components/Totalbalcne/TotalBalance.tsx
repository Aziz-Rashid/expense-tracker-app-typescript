import React, {useContext} from 'react'
import {GlobalContext} from './../../Services/GlobalState'
import './TotalBalance.css'
export default function TotalBalance() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map((transaction:any) => transaction.amount);
    const total = amount.reduce((acc:any, item:any) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <div className="total">
                <h1 className="balance">Balance:</h1>
                <p className={total > 0 ? 'balance-total':'balance-total2' }><span>$</span>{total}</p>
            </div>
        </div>
    )
}