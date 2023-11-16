import React from 'react'

const TransactionTable = ({value}) => {
    console.log(value)
    let rowsOfUsers =<></>
    let tableHeaderRow = <></>
    let keys =[]
 
    if(value && value.length !=0 )
    {
        console.log("inside if "+value)
        keys = Object.keys(value[0])
        console.log(keys)
       
        tableHeaderRow = keys.map(k=>{
            return(
                <th scope="col">{k}</th>

            )
        })
       
        rowsOfUsers = value.map((value)=>{

            return (
                <tr>
                   {
                    Object.values(value).map((i)=>{
                   
                        return(
                            <td>{i.toString()}</td>
                        )
                    })
                   }
                  
                </tr>
            )

        })
    }
  return (
    <>
        <div><h1 className='heading'>Transaction</h1></div>
       
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

export default TransactionTable
