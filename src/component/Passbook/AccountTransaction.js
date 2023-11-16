import React, {useState, useEffect}from 'react'
import PaginationOfApp from '../Shared/PaginationOfApp'
import PageSize from '../Shared/Page/PageSize'
import { getAllTransactionByAc } from '../../Service/PassbookService'
import TransactionTable from './TransactionTable'


const AccountTransaction = ({value}) => {
    const [pageSize,setPageSize] =useState(2)
    const [pageNumber, setPageNumber] = useState(1)
    const [data, setData] = useState
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
    const[account,setAccount] =useState()
    useEffect(()=>{
        setAccount(value);
      })


    const getAccount= async() =>{
        console.log("pageSize",pageSize)
        console.log("pageNumber", pageNumber)  
    
        let response =await getAllTransactionByAc(pageNumber,pageSize, account.accountNo)
        if(response.data)
        {
            setData(response.data)
        }
        console.log(response)
        let totalNumberOfRecords = response.headers['x-total-count']
        console.log(totalNumberOfRecords)
        setTotalNumberOfRecord(totalNumberOfRecords)
    
        setNumberOfPages(Math.ceil(totalNumberOfRecords /pageSize))
        console.log(numberOfPages)
      }
  return (
    <>
        <div className="n-container">
            <div className='n-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            <div className='n-right'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getAccount} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
            
        </div> 
        <div style={{  margin: '1rem', borderRadius:'20%'}}>
          <TransactionTable data={data} />
        </div>
    
    </>
  )
}

export default AccountTransaction
