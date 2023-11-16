import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = ({username}) => {

  
  return (
    <div className='c-wrapper c-list' id="Navbar">
        <div className='c-left'>
            <h2>Bank Application</h2>
        </div>
        <div className='c-right'>
            <div className='c-app'>
              <Link to={`/customerDashboard/${username}`} className='d-text'>Home</Link>
            </div>
            <div className='c-app'>
              <Link to={`/customerDashboard/passbook/${username}`} className='d-text'>Passbook</Link>
            </div>
            <div className='c-app'>
              <Link to={`/customerDashboard/transaction/${username}`} className='d-text'>Transfer</Link>
            </div>
            <div className='c-app'>
              <Link to={`/customerDashboard/editprofile/${username}`} className='d-text'>EditProfile</Link>
            </div>
            <div className='c-app'>
              <Link to="/" className='d-text' onClick={(e)=> {localStorage.clear()}}>Logout</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Header

