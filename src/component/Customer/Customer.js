import React, {useState,useEffect} from 'react'
import Header from '../Shared/Header/AdminHeader/Header'
import AddCutomer from './AddCutomer'
import PageSize from '../Shared/Page/PageSize'
import { getAllCustomer,deleteCustomer} from '../../Service/CustomerService'
import Table from '../Shared/Table/Table'
import PaginationOfApp from '../Shared/PaginationOfApp'
import CustomerUpdateModal from './CustomerUpdateModal'
import { validateUser as validate}  from '../../Service/authentication';

const Customer = () => {
  const [pageSize,setPageSize] =useState(5)
  const [pageNumber, setPageNumber] = useState()
  const [numberOfPages, setNumberOfPages] = useState()
  const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
  const [data,setData] =useState([])
  const [isUserValid, setIsUserValid] = useState(false)
  const [openModal,setOpenModal] = useState(false);
  const [customer,setCustomer]=useState()


  const updateUser = async(customerToBeUpdated) => {
   console.log(customerToBeUpdated)
    setOpenModal(true)
    setCustomer(customerToBeUpdated)
}
const deleteUser = async(customerToBeDeleted) => {
    
  try{
    let userId = customerToBeDeleted.userId
    let resp = await deleteCustomer(userId)
    console.log(resp)
    if(resp)
    {
        alert("Customer is deleted successfully")
    }
  }
  catch(error)
  {
    alert(error.message)
  }
  
}


  
  const getCustomer = async() =>{
    console.log("pageSize",pageSize)
    console.log("pageNumber", pageNumber)  
    try{
        let response =await getAllCustomer(pageNumber,pageSize)

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
      catch(error)
      {
        console.log(error)
        alert(error.message)
      }
  }


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


  useEffect(()=>{
    console.log("useEffect called")
    getCustomer()
  }, [totalNumberOfRecords,pageSize, pageNumber])

  if(isUserValid)
  {
      return (
        <>
        <div>
          {openModal && <CustomerUpdateModal value={customer}  />}
        </div>
        <Header/>
        <AddCutomer/>
        <h1 className='heading' >Customer Details </h1>
        <div className="n-container">
            
            <div className='n-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            <div className='n-right'>
            <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getCustomer} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
            
        </div>
       
        <div style={{  margin: '1rem', borderRadius:'20%'}}>
            <Table  data={data} isDeleteButton={true}  deleteFunc={deleteUser} isUpdateButton={true} updateFunc={updateUser} />
        
        </div>
        
        </>
      )
  }
  else{
    return (
      <>
        <a href='/Login'>Please Login First</a>
      
      </>

    )
  }
}

export default Customer
