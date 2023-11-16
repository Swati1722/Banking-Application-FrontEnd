import axios from "axios"


export const getAllTransaction = async (pageNumber, pageSize,userId) => {
  let response = await axios.get('http://localhost:8080/bankingapp/customertransaction',{
    params:{
        pageSize: pageSize,
        pageNumber: pageNumber,
        userId: userId
    },headers :{
      Authorization: 'Bearer '+localStorage.getItem('authentication')
    }
  })
  console.log('Getting Data')
  
   return response
}


export const TransferAmount  = async(senderAccount,receiverAccount,amount)=>{
  try{
    let response =await axios.put('http://localhost:8080/bankingapp/account',{
      senderAccountNo:senderAccount,
      receiverAccountNo:receiverAccount,
      transfer:amount
    },{
      headers :{
        Authorization: 'Bearer '+localStorage.getItem('authentication')
      }
    }
    )
    console.log("Date is updated")
    return response
  }
  catch (error){
    throw error
  }
}

