import React from 'react'
import Header from '../Shared/Header/CustomerHeader/Header'
import {useParams} from 'react-router-dom'

const CustomerHome = () => {

  const params =useParams()
  console.log(params.username)
  return (
    <>
        <Header username={params.username}/>
        <div> 
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <h1 className='n-bank'>Customer Dashboard</h1>
        </div>
    
    </>
  )
}

export default CustomerHome
