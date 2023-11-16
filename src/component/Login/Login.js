import React ,{useState}from 'react'
import {authslogin} from '../../Service/authentication'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import LoginHeader from './LoginHeader'

const Login = () => {
    const[userName,setUserName] = useState()
    const[password, setPassword] = useState()
    const navigate=new useNavigate();

    const UserLogin = async() =>{
        try{
            let response = await authslogin(userName,password)
            console.log(response)

            if(response.data)
            {
            if(response.data.roles[0].rolename=='ROLE_ADMIN'){
                localStorage.setItem('authentication',response.headers['bearer-token'])
                navigate('/adminDashboard')
            }
            else if(response.data.roles[0].rolename=='ROLE_USER')
            {

                localStorage.setItem('authentication',response.headers['bearer-token'])
                navigate(`/customerDashboard/${response.data.username}`) 
            }
                // console.log(role)
            }
            console.log(response)
            setUserName('');
            setPassword('');
        }
        catch(error)
        {
            console.log(error)
            alert("Wrong Username Or Password")
        }
    }


  return (
   <>
   
   
   
        <LoginHeader/>
        {/* <div style={{ marginTop: "2rem", alignItems:"center"}}><h1>Bank Application</h1></div> */}
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1>Bank Application</h1>
        </div>
        <div className='container'>
            <div class="left-element">
                <img style ={{ height:"70vh", width:"70vh"}}src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                alt="Phone image"/>
            </div>

       
            <div className="right-element">
                <div className='box'>
                    <h1 className='heading'>Login </h1>
                    <div className="n-blur" style={{ background: "rgb(238 210 255)" }}></div>
                    <form className ='postdata' >
                        <div className='form-group'>
                            <label htmlFor="userName"> User Name</label>
                            <input type="text" className="form-control" id="userName"  value={userName} onChange={(e) => setUserName(e.target.value)}/>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="password"> Password</label>
                            <input type="password" className="form-control" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                            
                        </div>
                        <div className='c-button'>
                            <button type="button" className="btn btn-primary n-button" onClick={UserLogin}>Submit</button>
                        </div>
                        <div className='n-container'>
                            <h1 className='wrap'>New user ?</h1>
                            <button className='btn btn-primary n-button'>Sign up</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
   
   
   </>
  )
}

export default Login
