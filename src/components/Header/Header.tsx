import React from 'react'
import './Header.css'
export default function Header() {
    let headerName:string = 'Expense Tacker!';
    
    return (
        <div className="heading">
            <h2><i>{headerName}</i></h2>
        </div>
    )
}