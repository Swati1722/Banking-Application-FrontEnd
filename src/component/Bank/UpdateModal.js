import Modal from 'react-bootstrap/Modal';
import React, {useEffect, useState} from 'react'
import UpdateBank from './UpdateBank'

import Button from 'react-bootstrap/Button';

const UpdateModle = ({value}) => {

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
      // setShow(true)
    },[value])


   
  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Details</Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateBank value={data}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    
    
    
    </>
  )
}

export default UpdateModle
