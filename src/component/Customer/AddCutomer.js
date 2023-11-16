import React, {useState} from 'react'
import {addCustomer} from '../../Service/CustomerService'
import './Customer.css'

const AddCutomer = () => {

    const[name,setName] = useState()
    const[userId, setUserId] = useState()
    const[password, setPassword] = useState()
    const[mobile,setMobile] = useState()
    const[email,setEmail] = useState()


    const isEmailValid = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
    };

    const isMobileValid = (mobile) => {
        return /^\d{10}$/.test(mobile);
    };

    const isPasswordValid = (password) => {
        return password.length >= 6;
    };

    const AddCustomers = async() =>{

        if (!name || !userId || !password || !mobile || !email) {
            alert('Please fill in all required fields.');
            return;
        } else if (!name) {
            alert('Please fill Name.');
            return;
        } else if (!userId) {
            alert('Please fill User Name.');
            return;
        } else if (!password) {
            alert('Please fill password (min 6 characters).');
            return;
        } else if (!isPasswordValid(password)) {
            alert('Password must be at least 6 characters long.');
            return;
        } else if (!mobile) {
            alert('Please fill mobile (10 digits).');
            return;
        } else if (!isMobileValid(mobile)) {
            alert('Mobile number must have 10 digits.');
            return;
        } else if (!email) {
            alert('Please fill email (valid format).');
            return;
        } else if (!isEmailValid(email)) {
            alert('Please enter a valid email address.');
            return;
        }


        try{
            let response = await addCustomer(name,userId,password,mobile,email)
            // console.log(response)
            setName('');
            setUserId('');
            setPassword('');
            setMobile('');
            setEmail('');
            if(response)
            {
                    alert("Customer is added successfully")
            }
        }
        catch(error)
        {
            console.log(error)
            alert(error.message)
        }
    }




  return (
    <>
        <div>
        <h1 className='heading'>Add Customer </h1>
        <div className="blur" ></div>
        <form className ='postdata' >
            <div className='form-group'>
                <label htmlFor="name"> Name*</label>
                <input type="text" className="form-control" id="name"  value={name} onChange={(e) => setName(e.target.value)} required/>

            </div>
            <div className='form-group'>
                <label htmlFor="userId"> User Name*</label>
                <input type="text" className="form-control" id="userId"  value={userId} onChange={(e) => setUserId(e.target.value)} required/>
                
            </div>
            <div className='form-group'>
                <label htmlFor="password"> Password*</label>
                <input type="password" className="form-control" id="password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                
            </div>
            <div className='form-group'>
                <label htmlFor="mobile">Mobile Number*</label>
                <input type="mobile" className="form-control" id="mobile"  value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
                
            </div>
            <div className='form-group'>
                <label htmlFor="email"> Email*</label>
                <input type="email" className="form-control" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                
            </div>
            <button type="button" className="btn btn-primary" onClick={AddCustomers}>Submit</button>
        </form>
     </div>
    
    </>
  )
}

export default AddCutomer
