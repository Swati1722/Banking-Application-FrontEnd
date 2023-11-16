import React, { useState } from 'react'
import { updateCustomerdetails } from '../../Service/CustomerService'

const UpdateCustomer = ({value}) => {

    const[name,setName] = useState(value.name)
    const[email,setEmail] = useState(value.email)
    const[mobile, setMobile] = useState(value.mobile)
    const [cid,setCid] =useState(value.cid)
    

    const UpdateCustomers = async()=>{
        let resp = await updateCustomerdetails(cid,name,email,mobile)
        if(resp)
        {
        alert("Customer updated successfully")
        }
    }
  return (
    <>
         <form>
            <div>
            <       div className="name">
                        <label htmlFor="name"> Name*</label>
                        <input type="text"  disabled={true} className="form-control" id="name"  value={name} onChange={(e) => setName(e.target.value)} required/>


                    </div>
                    <div className="email">
                        <label htmlFor="email"> Email*</label>
                        <input type="text" className="form-control" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>


                    </div>
                    <div className='form-group'>
                        <label htmlFor="mobile"> Mobile *</label>
                        <input type="mobile" className="form-control" id="mobile"  value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
                        
                    </div>
                   
                    <button type="button" className="btn btn-primary" onClick={UpdateCustomers}>Submit</button>

            </div>
        </form>
    
    
    
    
    </>
  )
}

export default UpdateCustomer
