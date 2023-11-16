import React from 'react'


const CustomerTable = ({data, isTransactionButton, transactionFunc, isCreditButton , creditFunc, isDebitButton, debitFunc}) => {
    let rowsOfUsers =<></>
    let tableHeaderRow = <></>
    let keys =[]
 
    if(data.length != 0)
    {
        keys = Object.keys(data.content[0])
        if(isTransactionButton)
        {
            keys.push('Transaction')
        }
        if(isCreditButton)
        {
            keys.push('Credit')
        }
        if(isDebitButton)
        {
            keys.push('Debit')
        }
        tableHeaderRow = keys.map(k=>{
            return(
                <th scope="col">{k}</th>
            )
        })
       
        rowsOfUsers = data.content.map((value)=>{

            return (
                <tr>
                   {
                    Object.values(value).map((i)=>{
                   
                        return(
                            <td>{i.toString()}</td>
                        )
                    })
                   }
                   {isTransactionButton && <td><button onClick={()=>{
                    transactionFunc(value)
                   }}  style={{  borderRadius: '15%'}}>Transaction</button></td>}
                   {isCreditButton && <td><button onClick={()=>{
                    creditFunc(value)
                   }}  style={{  borderRadius: '15%'}}>Credit</button></td>}
                   {isDebitButton && <td><button onClick={()=>{
                    debitFunc(value)
                   }}  style={{  borderRadius: '15%'}}>Debit</button></td>}
                   
                  
                </tr>
            )

        })
    }

    return (
    <>
        <table className="table table-striped table-dark" style={{"paddingLeft" :"1rem",
    "marginRight":"1rem"}}>
            <thead>
                <tr>
                {tableHeaderRow}
                </tr>
                
            </thead>
            <tbody>
                {rowsOfUsers}
            </tbody>

        </table>
        
    </>
  )
}

export default CustomerTable
