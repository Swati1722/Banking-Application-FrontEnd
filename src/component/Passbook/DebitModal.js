import React, {useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import UpdateAccount from './UpdateAccount';

const DebitModal = ({value}) => {
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
          <Modal.Title>Debit </Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateAccount value={account} isDebitButton={true} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DebitModal
