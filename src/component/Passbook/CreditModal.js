import React, {useEffect, useState}  from 'react'
import UpdateAccount from './UpdateAccount'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CreditModal = ({value}) => {

    const[account,setAccount] =useState()
    const[show,setShow] =useState(false)

    const handleClose = () => {
        if (show) {
          setShow(false);
        }
    };

    const handleShow = () =>{ 
         setShow(true);
      }
    
      useEffect(() => {
        if (value) {
            setAccount(value);
            
        }
       
    }, [value]);
   
    useEffect(()=>{
        handleShow()
    },[value])

  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Credit</Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateAccount value={account}  isCreditButton={true}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    
    
    </>
  )
}

export default CreditModal
