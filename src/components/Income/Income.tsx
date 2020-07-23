import React, {useContext} from 'react'
import './income.css'
import {GlobalContext} from './../../Services/GlobalState'
import Countup from 'react-countup';
export default function Income() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map((transaction:any) => transaction.amount);
    let income = amount.filter((item:number) => item > 0 ).reduce((acc:number,item:number) => (acc += item), 0).toFixed(2)
    const expense = amount.filter((item:number) => item < 0).reduce((acc:number,item:number) => (acc -= item), 0).toFixed(2)
    return (
        <div className="income">
            <div>
            <hr />
            <div>
            <p className="inc">Income: <span><span className= 'greens'>$+</span><Countup start={0} end={income} duration={2.75} /></span></p>
            </div>
            <hr />
            <div>
                <p className="exp">Expense: <span ><span className="reds">$-</span><Countup start={0} end={expense} duration={2.75} /></span></p>
                </div>
                </div>
        </div>
    )
}