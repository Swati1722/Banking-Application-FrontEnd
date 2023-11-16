import React from 'react'
import Header from '../Shared/Header/AdminHeader/Header'
import './AdminHome.css'

const Home = () => {
  return (
   <>
        <Header/>
        <div> 
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <h1 className='n-bank'>Admin Dashboard</h1>
        </div>
   </>
  )
}

export default Home
