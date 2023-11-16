import axios from "axios";


export const   getAllAccountByUsername= async(pageNumber, pageSize, username) => {
      console.log(username)
    let response = await axios.get('http://localhost:8080/bankingapp/customeraccount',{
      params:{
          pageSize: pageSize,
          pageNumber: pageNumber,
          userId:username,
          
      },
      headers :{
        Authorization: 'Bearer '+localStorage.getItem('authentication')
      }
    })
    console.log(response)
    console.log('Getting Data')
     return response
  }

  export const   getAllAccountNoByUsername= async( username) => {
    try{ 
      console.log(username)
      let response = await axios.get('http://localhost:8080/bankingapp/customeraccount',{
        params:{
            userId:username,
            
        },
        headers :{
          Authorization: 'Bearer '+localStorage.getItem('authentication')
        }
      })
      console.log(response)
      console.log('Getting Data')
      return response
    }
    catch(error)
    {
      throw error
    }
}


  export const   getAllTransactionByAc= async(pageNumber, pageSize,accountNo) => {
    let response = await axios.get('http://localhost:8080/bankingapp/accountTransaction',{
      params:{
          pageSize: pageSize,
          pageNumber: pageNumber,
          accountNo:accountNo, 
      }
    })
    console.log('Getting Data')
     return response
  }

  export const creditBalance  = async(amount,accountNo)=>{
    try{
    
      let response =await axios.put('http://localhost:8080/bankingapp/accountdeposit',{
        amount:amount,
        accountNo:accountNo
      },{
        headers :{
          Authorization: 'Bearer '+localStorage.getItem('authentication')
        }
      }
      )
      console.log("Date is updated")
      return response
    }
    catch(error)
    {
      throw error
    }
  
  }


  export const debitBalance  = async(amount,accountNo)=>{
    try{ 
      console.log(accountNo)
      let response =await axios.put('http://localhost:8080/bankingapp/accountwithdraw',{
        amount:amount,
        accountNo:accountNo
      },{
        headers :{
          Authorization: 'Bearer '+localStorage.getItem('authentication')
        }
      }
      )
      console.log("Date is updated")
      return response
    }
    catch(error)
    {
      throw error
    }
  }
