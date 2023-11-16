import React,  { useState} from 'react'
import {addBank} from '../../Service/BankService'

const AddBank = () => {

    const[bankName,setBankName] = useState()
    const[abbreviation, setAbbreviation] = useState()
    const[branchName, setBranchName] = useState()



    const AddBanks = async() =>{


        if (!bankName || !abbreviation || !branchName) {
            alert('Please fill in all required fields.');
            return;
        }
        try{
            let response = await addBank(bankName,abbreviation,branchName)
            console.log(response)
            setBankName('');
            setAbbreviation('');
            setBranchName('');
            if(response)
            {
                    alert("Bank is added successfully")
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
        <h1 className='heading'>Add New Bank </h1>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <form className ='postdata' >
            <div className='form-group'>
                <label htmlFor="bankName"> Bank Name*</label>
                <input type="text" className="form-control" id="bankname"  value={bankName} onChange={(e) => setBankName(e.target.value)} required/>

            </div>
            <div className='form-group'>
                <label htmlFor="abbreviation"> Abbreviation *</label>
                <input type="abbreviation" className="form-control" id="abbreviation"  value={abbreviation} onChange={(e) => setAbbreviation(e.target.value)} required/>
                
            </div>
            <div className='form-group'>
                <label htmlFor="branchName"> Branch Name *</label>
                <input type="text" className="form-control" id="inputage"  value={branchName} onChange={(e) => setBranchName(e.target.value)} required/>
                
            </div>
            <button type="button" className="btn btn-primary" onClick={AddBanks}>Submit</button>
        </form>
     </div>
    </>
  )
}

export default AddBank
