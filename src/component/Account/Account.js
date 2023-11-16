import React, {useState,useEffect} from 'react'
import Header from '../Shared/Header/AdminHeader/Header'
import AddAccount from './AddAccount'
import PageSize from '../Shared/Page/PageSize'

import Table from '../Shared/Table/Table'

import PaginationOfApp from '../Shared/PaginationOfApp'
import { getAllAccount,deleteAccounts} from '../../Service/AccountService'
import './Account.css'
// import {}


const Account = () => {
  const [pageSize,setPageSize] =useState(5)
  const [pageNumber, setPageNumber] = useState()
  const [numberOfPages, setNumberOfPages] = useState()
  const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
  const[data,setData] =useState([])
  // const [accountNo, setAccountNo] = useState()


  const getAccount = async() =>{
    console.log("pageSize",pageSize)
    console.log("pageNumber", pageNumber)
    let response =await getAllAccount(pageNumber,pageSize)

        if(response.data)
        {
            setData(response.data)
        }
        console.log(response)
        // localStorage.setItem('authentication',response.headers['bearer-token'])
           
    let totalNumberOfRecords = response.headers['x-total-count']
    setTotalNumberOfRecord(totalNumberOfRecords)
    setNumberOfPages(Math.ceil(totalNumberOfRecords /pageSize))
    
   }

   useEffect(()=>{
    console.log("useEffect called")
    getAccount()
  }, [totalNumberOfRecords,pageSize, pageNumber])


  const deleteAccount = async(accountToBeDeleted) => {
    try{
      let accountNo = accountToBeDeleted.accountNo
      let resp = await deleteAccounts(accountNo)

      if(resp)
      {
          alert("Account is deleted successfully")
      }
    }
    catch(error)
    {
      alert(error.message)
    }
  }

  return (
    <>
    
    <Header/>
    <AddAccount/>
    <h1 className='heading'>Account Details </h1>
    {/* <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords}/> */}
    <div className="ac-container">
            
            <div className='ac-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            <div className='ac-right'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getAccount} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
            
    </div>
     
     {/* <div className='block'>
        <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getAccount} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
     </div>  */}
      <div style={{  margin: '1rem', borderRadius:'20%'}}>
            <Table data={data} isDeleteButton={true}  deleteFunc={deleteAccount} isUpdateButton={true}/>
      </div>
    </>
  )
}

export default Account
