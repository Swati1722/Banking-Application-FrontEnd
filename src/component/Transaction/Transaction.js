import React, {useState, useEffect} from 'react'
import Header from '../Shared/Header/CustomerHeader/Header'
import {useParams} from 'react-router-dom'
import TransferForm from './TransferForm/TransferForm'
import { getAllAccountNoByUsername } from '../../Service/PassbookService'


const Transaction = () => {
    const params =useParams()
    const [data,setData] =useState([])
    const [username,setUsername] =useState(params.username)
   


    const getAccount= async() =>{
        //    console.log("pageNumber", pageNumber)  
        console.log(username)
        let response =await getAllAccountNoByUsername(username)
        if(response.data){
            setData(response.data.content)
        }
    }
    
    useEffect(()=>{
        getAccount()
    }, [])


  



  return (
    <>
        <Header/>
        <div>
           
           {/* { console.log(params.username)} */}
            <TransferForm data={data}/>
        </div>
        
    
    
    
    </>
  )
}

export default Transaction
