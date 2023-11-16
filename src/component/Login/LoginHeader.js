import React from 'react'
import { Link } from 'react-router-dom';
import "./LoginHeader.css"

const Header = () => {
  return (
    <>
        <div className='h-container'>
            <div className='h-left'>

            </div>
            <div className='h-right' id="Navbar">
                <div className='h-right'>
                    <div className='h-app'>
                        <Link to='/bank' className='d-text'>Home</Link>
                        </div>
                        <div className='h-app'>
                        <Link to="/customer" className='d-text'>Review</Link>
                        </div>
                        <div className='h-app'>
                        <Link to="/account" className='d-text'>About</Link>
                        </div>
                    </div>
                </div>
        </div>
        


    </>
  )
}

export default Header
