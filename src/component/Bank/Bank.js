import React, {useEffect, useState} from 'react'
import { deleteBank, getAllBank} from '../../Service/BankService'
import AddBank from './AddBank'
// import "../Style.css"
import Header from '../Shared/Header/AdminHeader/Header';
import PageSize from '../Shared/Page/PageSize'
import Table from '../Shared/Table/Table'
import './Bank.css'
import PaginationOfApp from '../Shared/PaginationOfApp'
import { validateUser as validate}  from '../../Service/authentication';
import UpdateModal from './UpdateModal'
import { getAllAccounts } from '../../Service/BankService';

const  Bank = () => {

  const [pageSize,setPageSize] =useState(5)
  const [pageNumber, setPageNumber] = useState()
  const [numberOfPages, setNumberOfPages] = useState()
  const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
  const [data,setData] =useState([])
  const [searchQuery, setSearchQuery] = useState(''); 
  const [isUserValid, setIsUserValid] = useState(false)
  const [openUpdateModal,setOpenUpdateModal] = useState();
  const [openAccountTable,setOpenAccountTable] = useState();
  const [account, setAccount] =useState()
  
  const [bank,setBank]=useState()
 
  const validateUser = async() =>{
    const authToken = localStorage.getItem('authentication')
    if(!authToken)
    {
      setIsUserValid(false)
    }
    console.log("authtoken--->"+authToken)
    let resp = await validate(authToken)
    console.log(resp)

    if(resp.data.role[0].authority !='ROLE_ADMIN')
    {
        setIsUserValid(false)
    }
    else{
      setIsUserValid(true)
    }
    return 
 }

 useEffect(()=>{
  validateUser()
},[])
 

 const handleSearch = () => {
  setPageNumber(1); 
  getBank();
}

const accountOfBank = async(Bank) => {

  setOpenAccountTable(true)
  setOpenUpdateModal(false)
  setBank(Bank)
  let response = await getAllAccounts(Bank.bankId)
  if(response.data)
  {
          setAccount(response.data)

  }
      console.log(response)
     
}
const closeAccountTable = () => {
  setOpenAccountTable(false);
};

  const updateUser = async(bankToBeUpdated) => {
      setOpenUpdateModal(true)
      setOpenAccountTable(false)
      setBank(bankToBeUpdated)
  }
  const deleteUser = async(bankToBeDeleted) => {
    let bankId = bankToBeDeleted.bankId


    let resp = await deleteBank(bankId)
    if(resp)
    {
        alert("Bank is deleted successfully")
    }
    console.log(resp) 
  }

  

  const getBank = async() =>{
    try{
         let response =await getAllBank(pageNumber,pageSize,searchQuery)
            if(response.data)
            {
                setData(response.data)
            }
           
        let totalNumberOfRecords = response.headers['x-total-count']
        setTotalNumberOfRecord(totalNumberOfRecords)
        setNumberOfPages(Math.ceil(totalNumberOfRecords /pageSize))
      }
      catch(error)
      {
        console.log(error)
          alert(error.message)
      }
   }
   useEffect(()=>{
    getBank()
  },[])
   

  
   useEffect(()=>{
    console.log("useEffect called")
    getBank()
  }, [totalNumberOfRecords,pageSize, pageNumber])

  if(isUserValid)
  {
    return (
      <>
       {/* show={openModal} setShow={true}  */}
        <div>
          {openUpdateModal && <UpdateModal  value={bank}  />}
        </div>
       
        <Header/>
        <AddBank/>
        <div className="b-container">
            
            <div className='b-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            <div className='b-right'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getBank} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
            
        </div>
        <div className="block">
              <input className='input'
                type="text"
                placeholder="Search by Bank Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className='button'onClick={handleSearch}>Search</button>
          </div>
          <div style={{  margin: '1rem', borderRadius:'20%'}}>
            <Table data={data} isDeleteButton={true}  deleteFunc={deleteUser} isUpdateButton={true} updateFunc={updateUser} isAccountButton={true} AccountFunc={accountOfBank}/>
          </div>
          {openAccountTable && (
          <button onClick={closeAccountTable} style={{marginBottom:"0%", marginLeft:'86.5%',  borderRadius: '15%'}}>Close Account Table</button>
        )}
          <div style={{ marginRight:'1rem', borderRadius: '20%', marginLeft:'1rem' }}>
          
              {openAccountTable && <Table  data={account} />}
          </div>
        
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

export default Bank
