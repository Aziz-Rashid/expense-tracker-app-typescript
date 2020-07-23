import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

const initialstate:any = {
    transactions: [
        {id:1, text:"food", amount:1000},
        {id:2, text:"flower", amount: -500}
    ]
}
export const GlobalContext = createContext(initialstate)

export const GlobalProvider = ({children}:any) =>{
const [state,dispatch] = useReducer(AppReducer,initialstate)

 const deletetransitions=(id:number)=>{
    dispatch({
        type: "remove",
        payload: id
    })
}
 const addtransactions = (transaction:number)=>{
    dispatch({
        type: "add",
        payload: transaction
    })
}
 const rem = (transaction:number) =>{
    dispatch({
        type: "sub",
        payload: transaction
    })
}
return (
<GlobalContext.Provider value={{transactions: state.transactions,deletetransitions,rem,addtransactions}}>{children}</GlobalContext.Provider>
)
}