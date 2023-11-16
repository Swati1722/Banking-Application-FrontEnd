import axios from "axios";

export const authslogin = async(username, password) => {
    try{
        let response = await axios.post('http://localhost:8080/api/auth/login',{
            username:username,
            password:password
        })
    
    
    return response
    }
    catch (error){
        throw error
    }
}

export const validateUser = async (token)=>{
    console.log(token)
    let response = await axios.get('http://localhost:8080/api/auth/validate',{
        headers:{
            Authorization :'Bearer ' + token
        }
    })

    console.log(response)
    return response
}
