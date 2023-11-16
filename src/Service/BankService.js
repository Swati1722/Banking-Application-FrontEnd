import axios from "axios"

export const getAllBank = async (pageNumber, pageSize,searchQuery) => {
    try{
      let response = await axios.get('http://localhost:8080/bankingapp/banks',{
        params:{
            pagesize: pageSize,
            pagenumber: pageNumber,
            searchQuery: searchQuery
        },headers :{
          Authorization: 'Bearer '+localStorage.getItem('authentication')
        }
      })
      return response
  
    }
    catch (error){
        throw error
    }
  }

  export const addBank = async(bankName,abbreviation,branch)=> {
      
    try{
       let response = await axios.post('http://localhost:8080/bankingapp/bank',{
          bankName: bankName,
          abbreviation: abbreviation,
          branch:branch
        },{
          headers :{
            Authorization: 'Bearer '+localStorage.getItem('authentication')
          }
        })
        console.log('Data saved successfully:', response.data);
        return response; 
      }
      catch (error){
        throw error
      }
   
  }


  
export const deleteBank = async(bankId) => {
    let response = await axios.delete('http://localhost:8080/bankingapp/bank',{
        params:{
          bankId:bankId
        },
        
          headers :{
            Authorization: 'Bearer '+localStorage.getItem('authentication')
          }
        })
    console.log('Getting Data')
     return response
  }
  
  
  export const updateBank = async(bankId,bankName, abbreviation,branch,ifsccode) => {
    let response = await axios.put('http://localhost:8080/bankingapp/bank',{
        
  
          bankId:bankId,
          bankName:bankName,
          abbreviation:abbreviation,
          branch:branch,
          ifsccode:ifsccode
        },
        {
          headers :{
            Authorization: 'Bearer '+localStorage.getItem('authentication')
          }
        })
    console.log('Getting Data')
     return response
  }


  // export const updateAccountOfBankService = async(bankId,bankName, abbreviation,branch) => {
  //   let response = await axios.put('http://localhost:8080/bankingapp/bank',{
        
  
  //         bankId:bankId,
  //         bankName:bankName,
  //         abbreviation:abbreviation,
  //         branch:branch
  //       },
  //       {
  //         headers :{
  //           Authorization: 'Bearer '+localStorage.getItem('authentication')
  //         }
  //       })
  //   console.log('Getting Data')
  //    return response
  // }
  


  export const getAllAccounts = async (bankId) => {
    try{
      let response = await axios.get('http://localhost:8080/bankingapp/bankaccount',{
        params:{
            bankId:bankId
        },headers :{
          Authorization: 'Bearer '+localStorage.getItem('authentication')
        }
      })
      console.log(response)
      console.log("Getting response")
      return response
  
    }
    catch (error){
        throw error
    }
  }