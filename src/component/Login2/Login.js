import React, {useEffect} from 'react'
import './Style.css'
import VanillaTilt from 'vanilla-tilt';

const Login = () => {


    useEffect(() => {
        // Initialize VanillaTilt when the component is mounted
        VanillaTilt.init(document.querySelector(".box"), {
          max: 25,
          speed: 400,
          glare: true,
        });
      }, []);
  return (
   <>
        
        <div className="body">

            <div className="l-box">
                <div className="elements untoldcoding"></div>
                <div className="elements name">
                <h2>Login Page</h2>
                </div>
                <div className="elements content">
                    <form action="">
                        <input type="text" placeholder="Usernsme" />
                        <input type="password" placeholder="Password" />
                        <button className='button-1'>Login</button>
                        <div className='l-container'>
                            <h1 className='l-wrap'>New user ?</h1>
                            <button className='sign-button'>Sign up</button>
                        </div>
                    
                    </form>
               
                </div>
                {/* <div className="cards"></div> */}
            </div>
        </div>
   </>
  )
}

export default Login
