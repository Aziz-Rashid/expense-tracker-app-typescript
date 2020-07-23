export default (state:any,action:any) => {
    switch (action.type) {
        case 'sub':
        case 'add':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'remove':
            return{
                ...state,
                transactions: state.transactions.filter((transaction:any) => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}