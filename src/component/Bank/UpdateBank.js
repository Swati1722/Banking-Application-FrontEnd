import React, { useState } from 'react'
import { updateBank } from '../../Service/BankService'

const UpdateBank = ({value}) => {

    const[bankId,setBankId] = useState(value.bankId)
    const[bankName,setBankName] = useState(value.bankName)
    const[abbreviation, setAbbreviation] = useState(value.abbreviation)
    const[branch, setBranch] = useState(value.branch)
    const[ifsccode, setIfsccode] = useState(value.ifsccode)


    const UpdateBanks = async()=>{
        console.log("bankId-->"+bankId+"  bankName-->"+bankName+" branch-->"+branch+" abbrevation-->"+abbreviation+"  ifscCode:-->" +ifsccode)
        let resp = await updateBank(bankId,bankName,abbreviation,branch,ifsccode)
        if(resp)
        {
        alert("Bank updated successfully")
        }
    }




  return (
   <>
         <form>
            <div>
            <       div className="bankId">
                        <label htmlFor="bankId"> Bank Id*</label>
                        <input type="text"  disabled={true} className="form-control" id="bankId"  value={bankId} onChange={(e) => setBankId(e.target.value)} required/>


                    </div>
                    <div className="bankName">
                        <label htmlFor="bankName"> Bank Name*</label>
                        <input type="text" className="form-control" id="bankname"  value={bankName} onChange={(e) => setBankName(e.target.value)} required/>


                    </div>
                    <div className='form-group'>
                        <label htmlFor="abbreviation"> Abbreviation *</label>
                        <input type="text" className="form-control" id="abbreviation"  value={abbreviation} onChange={(e) => setAbbreviation(e.target.value)} required/>
                        
                    </div>
                    <div className='form-group'>
                        <label htmlFor="branch"> Branch  *</label>
                        <input type="text" className="form-control" id="branch"  value={branch} onChange={(e) => setBranch(e.target.value)} required/>
                        
                    </div>

                    <div className='form-group'>
                        <label htmlFor="ifsccode"> IFSC code  *</label>
                        <input type="text" className="form-control" id="branch"  value={ifsccode} onChange={(e) => setIfsccode(e.target.value)} required/>
                        
                    </div>
                    <button type="button" className="btn btn-primary" onClick={UpdateBanks}>Submit</button>

            </div>
        </form>
   
   </>
  )
}

export default UpdateBank
