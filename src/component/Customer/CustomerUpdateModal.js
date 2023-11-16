import Modal from 'react-bootstrap/Modal';
import React, {useEffect, useState} from 'react'

import Button from 'react-bootstrap/Button';
import UpdateCustomer from './UpdateCustomer';

const CustomerUpdateModal = ({value}) => {

    const[data,setData] =useState()
    const[show,setShow] =useState(false)
   
    const handleClose = () => {
      if (show) {
        setShow(false);
      }
    };
    const handleShow = () =>{
       setShow(true);
    }
    
    useEffect(()=>{
      setData(value);
    })
    
    useEffect(()=>{
      handleShow()
    },[value])


  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateCustomer value={data}></UpdateCustomer></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
        </Modal>

    
    
    
    </>
  )
}

export default CustomerUpdateModal
