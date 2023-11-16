import React, {useState} from 'react'
import {addAccount} from '../../Service/AccountService'

const AddAccount = () => {
    const[userName,setUserName] = useState()
    const[bankName, setBankName] = useState()
    const[balance, setBalance] = useState()



    const AddAccounts = async() =>{
        if (!userName && !bankName && !balance) {
            alert('Please fill in all required fields.');
            return;
        }
        else if(!bankName)
        {
            alert('Please fill Bank Name ');
            return;
        }
        else if(!userName)
        {
            alert('Please fill User Name ');
            return;
        }
        else if(!balance)
        {
            alert('Please fill Opening Balance ');
            return;
        }

        const balanceNumber = parseFloat(balance);
        if (isNaN(balanceNumber)) {
            alert('Balance must be a valid number.');
            return;
        }
        try{
            let response = await addAccount(userName,bankName,balance)
            console.log(response)
            setUserName('');
            setBankName('');
            setBalance('');

            if(response)
            {
                    alert("Account is added successfully")
            }
        }
        catch(error)
        {
            alert(error)
        }
    
    }

  return (
    <>
        <div>
        <h1 className='heading'>Add New Account </h1>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <form className ='postdata' >
            <div className='form-group'>
                <label htmlFor="userName"> User Name *</label>
                <input type="text" className="form-control" id="userName"  value={userName} onChange={(e) => setUserName(e.target.value)} required/>

            </div>
            <div className='form-group'>
                <label htmlFor="bankName"> Bank Name *</label>
                <input type="text" className="form-control" id="bankname"  value={bankName} onChange={(e) => setBankName(e.target.value)} required/>

            </div>
            <div className='form-group'>
                <label htmlFor="balance"> Balance *</label>
                <input type="text" className="form-control" id="balance"  value={balance} onChange={(e) => setBalance(e.target.value)} required/>
                
            </div>
            <button type="button" className="btn btn-primary" onClick={AddAccounts}>Submit</button>
        </form>
     </div>
    </>
  )
}

export default AddAccount
