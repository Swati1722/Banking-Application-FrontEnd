import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Shared/Header/CustomerHeader/Header'
import './EditProfile.css'
import { validateUser } from '../../Service/authentication'
import { updatePassword } from '../../Service/EditProfileService';

const EditProfile = () => {
    const params =useParams()

    const[newPassword,setNewPassword] = useState()
    const [confirmNewPassword,setConfirmNewPassword] =useState()
    const [oldPassword,setOldPassword] =useState()
    const [isUserValid, setIsUserValid] = useState(false)
  

    const validateUsers = async() =>{
        const authToken = localStorage.getItem('authentication')
        if(!authToken)
        {
          setIsUserValid(false)
        }
        // let resp = await validateUser(authToken)
        let resp = await validateUser(authToken)
        if(resp.data.role[0].authority !='ROLE_USER')
        {
            setIsUserValid(false)
        }
        else{
          setIsUserValid(true)
        }
        return 
     }
    useEffect(()=>{
        validateUsers()
      },[])


    
    const EditProfileFunc = async() =>{
        // let response = await auth
        try{
            if(newPassword == confirmNewPassword)
            {
                let response = await updatePassword(oldPassword,newPassword,params.username)
        
            }
            else{
                alert("Password is not same")
            }
        }
        catch(error)
        {
            alert(error.message)
        }
    }


    if(isUserValid)
    {

        return (
            <>
                <Header username={params.username}/>
                <div className='e-container'>
                <div className="e-blur" ></div>
                    <div className='e-wrap'>
                        <h1 className='e-heading'>Edit Password</h1>
                        <form className ='e-form-data' >
                            <div className='e-form-group'>
                                <label htmlFor="oldPassword"> Old Password</label>
                                <input type="text" className="form-control" id="oldPassword"  value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="newPassword"> New Password</label>
                                <input type="newPassword" className="form-control" id="newPassword"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="confirmNewPassword">Confirm New Password</label>
                                <input type="confirmNewPassword" className="form-control" id="consfirNewPassword"  value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}/>
                            </div>
                            <div className='n-container'>
                                <button className='btn btn-primary n-button'onClick={EditProfileFunc}>Submit</button>
                            </div>
                        </form>    
                    </div>         
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

export default EditProfile
