import React, {useState, useEffect}from 'react'
import Header from '../Shared/Header/CustomerHeader/Header'
import PaginationOfApp from '../Shared/PaginationOfApp'
import {getAllTransactionByAc, getAllAccountByUsername } from '../../Service/PassbookService'

import PageSize from '../Shared/Page/PageSize'
import CustomerTable from './CustomerTable'
import './Passbook.css'
import {useParams} from 'react-router-dom'
import TransactionTable from './TransactionTable'
import CreditModal from './CreditModal'
import DebitModal from './DebitModal'
import { validateUser as validate}  from '../../Service/authentication';


const Passbook = () => {
  const params =useParams()

  const [pageSize,setPageSize] =useState(2)
  const [pageNumber, setPageNumber] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
  const [data,setData] =useState([])
  const [account, setAccount] = useState()
  const [openTransactionTable,setOpenTransactionTable] =useState()
  const [value, setValue] =useState()
  const [isUserValid, setIsUserValid] = useState(false)
  // const [username, setUsername] = useState(value)
  
  const [creditOpenModal,setCreditOpenModel] = useState(false)
  const [debitOpenModal,setDebitOpenModel] = useState(false)

  const validateUser = async() =>{
    const authToken = localStorage.getItem('authentication')
    if(!authToken)
    {
      setIsUserValid(false)
    }
    console.log("authtoken--->"+authToken)
    let resp = await validate(authToken)
    console.log(resp)

    if(resp.data.role[0].authority !='ROLE_USER')
    {
        setIsUserValid(false)
    }
    else{
      setIsUserValid(true)
      console.log(isUserValid)
    }
    return 
 }
 useEffect(()=>{
  validateUser()
},[])




  const transactionFunc = async(transactionOfAc) => {
    setOpenTransactionTable(true)
    setAccount(transactionOfAc)
    let response =await getAllTransactionByAc(pageNumber,pageSize, transactionOfAc.accountNo)
    if(response.data)
    {
        setValue(response.data)
    }
    console.log(response)
  }


  const creditFunc = async(accountDetails) =>{
    setCreditOpenModel(true)
    setDebitOpenModel(false); 
    setAccount(accountDetails)
  }

  const debitFunc = async(accountDetails) =>{
    setDebitOpenModel(true)
    setCreditOpenModel(false)
    setAccount(accountDetails)
  }



  const getAccount= async() =>{
    console.log("pageSize",pageSize)
    console.log("pageNumber", pageNumber)  
    console.log(params.username)
    let response =await getAllAccountByUsername(pageNumber,pageSize,params.username)
    if(response.data)
    {
        setData(response.data)
    }
    console.log(response)

    let totalNumberOfRecords = response.headers['x-total-count']
    setTotalNumberOfRecord(totalNumberOfRecords)
    setNumberOfPages(Math.ceil(totalNumberOfRecords /pageSize))
  }
  
  const closeTransactionTable = () => {
    setOpenTransactionTable(false); 
  };

  useEffect(()=>{
    getAccount()
  }, [totalNumberOfRecords,pageSize, pageNumber])


  if(isUserValid)
  {
    return (
      <>
        <Header/>
        <div><h1 className='heading'>Passbook</h1></div>
        <div className="n-container">
            <div className='n-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            <div className='n-right'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getAccount} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
        </div> 
      
        <div style={{  margin: '1rem', borderRadius:'20%'}}>
          <CustomerTable data={data} isTransactionButton={true} transactionFunc ={transactionFunc} isCreditButton={true} creditFunc={creditFunc} isDebitButton={true} debitFunc={debitFunc}/>
        </div>
       

        {openTransactionTable && ( // Render TransactionTable conditionally when openTransactionTable is true
          <div style={{ margin: '1rem', borderRadius: '20%' }}>
            <TransactionTable value={value} closeTransactionTable={closeTransactionTable} />
          </div>
        )}


       {creditOpenModal && (
         
            <div>
                <CreditModal value={account} />
            </div>
        )}

        {debitOpenModal && (
            <div>
                <DebitModal value={account}  />
            </div>
        )}
      </>
      )
  }
  else{
      return (
        <>
        <a href='/Login'>Please Login First</a>
        {/* navigate('/') */}
        
        </>

      )
    }
}

export default Passbook
