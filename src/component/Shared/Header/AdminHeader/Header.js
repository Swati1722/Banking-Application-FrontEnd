import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <div className='a-wrapper ' id="Navbar">
        <div className='a-left'>
            <h2>Bank Application</h2>
        </div>
        <div className='a-right'>
            <div className='a-app'>
              <Link to='/adminDashboard' className='d-text'>Home</Link>
            </div>
            <div className='a-app'>
              <Link to='/adminDashboard/bank' className='d-text'>Bank</Link>
            </div>
            <div className='a-app'>
              <Link to="/adminDashboard/customer" className='d-text'>Customer</Link>
            </div>
            <div className='a-app'>
            <Link to="/adminDashboard/account" className='d-text'>Account</Link>
            </div>
            <div className='a-app'>
            <Link to="/" className='d-text' onClick={(e)=> {localStorage.clear()}}>Logout</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Header

