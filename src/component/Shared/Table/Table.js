 import React from 'react'


const Table = ({data,isUpdateButton, updateFunc, isDeleteButton, deleteFunc, isAccountButton, AccountFunc}) => {
    let rowsOfUsers =<></>
    let tableHeaderRow = <></>
    let keys =[]
    console.log(data)
    if(data && data.content && data.content.length !== 0)
    {
        keys =Object.keys(data.content[0])
        if(isAccountButton)
        {
            keys.push('Account')
        }
        if(isUpdateButton)
        {
            console.log("inside update-->" +isUpdateButton)
            keys.push('Update')
        }
        if(isDeleteButton)
        {
            keys.push('Delete')
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
                    
                    {isAccountButton && <td><button onClick={()=>{
                    AccountFunc(value)
                   }}  style={{  borderRadius: '15%'}}>Account</button></td>}
                   {isUpdateButton && <td><button onClick={()=>{
                    updateFunc(value)
                   }} style={{  borderRadius: '15%'}} >Update</button></td>}
                   {isDeleteButton && <td><button onClick={()=>{
                    deleteFunc(value)
                   }}  style={{  borderRadius: '15%'}}>Delete</button></td>}
                   
                   
                   
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

export default Table
