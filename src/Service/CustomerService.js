import axios from "axios"


export const  getAllCustomer= async(pageNumber, pageSize) => {
    let response = await axios.get('http://localhost:8080/bankingapp/customers',{
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
  export const addCustomer = async(name,userId,password,mobile,email)=>{
    let response = await axios.post('http://localhost:8080/bankingapp/customer',{
      name:name,
      userId:userId,
      password:password,
      mobile:mobile,
      email:email
    },{
      headers :{
        Authorization: 'Bearer '+localStorage.getItem('authentication')
      }
    })
    console.log('Data saved successfully:', response.data);
    return response;
  }
  export const deleteCustomer = async(userId) => {
    try{ 
      let response = await axios.delete('http://localhost:8080/bankingapp/customer',{
          params:{
            userId:userId
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
  
  // -------------------------------------------------------
  
  
  export const updateCustomerdetails = async(cid,name,email,mobile) => {
    let response = await axios.put('http://localhost:8080/bankingapp/updatedetail',{
        
          name:name,
          email:email,
          mobile:mobile

        },
        {
          params:{
            cId:cid
          },
          headers :{
            Authorization: 'Bearer '+localStorage.getItem('authentication')
          }
        })
        console.log(response)
    console.log('Getting Data')
     return response
  }
  
  
  