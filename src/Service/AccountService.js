import axios from "axios";

export const addAccount = async(userId,bankName,balance)=>{
  try{
    let response = await axios.post('http://localhost:8080/bankingapp/account',{
      userId:userId,
     bankName:bankName,
     balance:balance
  
    },{
    headers :{
      Authorization: 'Bearer '+localStorage.getItem('authentication')
    }
  })
    console.log('Data saved successfully:', response.data);
    return response;
  }
  catch(error)
    {
      throw error
    }
}


export const  getAllAccount= async(pageNumber, pageSize,) => {
    let response = await axios.get('http://localhost:8080/bankingapp/accounts',{
      params:{
          pagesize: pageSize,
          pagenumber: pageNumber
      },
      headers :{
        Authorization: 'Bearer '+localStorage.getItem('authentication')
      }
    })
    console.log('Getting Data')
     return response
  }

  export const deleteAccounts = async(accountNo) => {
    try{ 
      let response = await axios.delete('http://localhost:8080/bankingapp/account',{
          params:{
            accountNo:accountNo
          }, headers :{
              Authorization: 'Bearer '+localStorage.getItem('authentication')
            }
          })
      console.log('Getting Data')
     return response
    }
    catch(error)
    {
      throw error
    }
  }
 

