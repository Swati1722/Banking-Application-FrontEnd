import axios from "axios"
export const updatePassword = async(oldPassword,newPassword,username)=> {
    let response = await axios.post('http://localhost:8080/bankingapp/bank',{
        oldPassword:oldPassword,
        newPassword:newPassword,
        username: username
      },{
        headers :{
          Authorization: 'Bearer '+localStorage.getItem('authentication')
        }
      })
    console.log('Data saved successfully:', response.data);
    return response; 
   
  }