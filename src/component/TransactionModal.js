import Modal from 'react-bootstrap/Modal';
import React, {useEffect, useState} from 'react'
import AccountTransaction from './Passbook/AccountTransaction'

import Button from 'react-bootstrap/Button';


const TransactionModal = ({value}) => {

    const[account,setAccount] =useState()
    const[show,setShow] =useState(false)

    const handleClose = () => {
        console.log("in handle close func")
        if (show) {
          setShow(false);
          console.log("in handle close func  2")
  
        }
      };
      const handleShow = () =>{
        console.log("inside handle show functions")
         setShow(true);
      }
      
      useEffect(()=>{
        setAccount(value);
      })
      
      useEffect(()=>{
         handleShow()
         console.log("inside use effect haldleshow")
        },[value])
  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body><AccountTransaction value={account}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default TransactionModal
