import React, { useState, useEffect } from 'react'
import { creditBalance, debitBalance } from '../../Service/PassbookService'

const UpdateAccount = ({value}) => {

    const [amount, setAmount] = useState('');
    const[account,setAccount] =useState()
    

    useEffect(() => {
        if (value) {
            setAccount(value);
        }
    }, [value]);
  const UpdateAccount =async() => {
       
        // if(isCreditButton)
        // {
            let resp = await creditBalance(amount, account.accountNo)
            if(resp)
            {
                alert("Balance is Credited")
            }
        // }   
        // if(isDebitButton)
        // {
        //     let resp = await debitBalance(amount, account.accountNo)
        //     if(resp)
        //     {
        //         alert("Balance is Debited")
        //     }
        // }
    }


    




  return (
    <>
        <form>
            <div>
                {/* <div className="accountNo">
                        <label htmlFor="accoutnNo"> Account Number*</label>
                        <input type="text"  disabled={true} className="form-control" id="accountNo"  value={accountNo} />


                    </div> */}
                <div className='amount' style={{marginBottom:'1rem'}}>
                    <label htmlFor="amount"> Amount*</label>
                    <input type="text"  className="form-control" id="ammount"  value={amount} onChange={(e) => setAmount(e.target.value)} required/>
                </div>
                <button type="button" className="btn btn-primary" onClick={UpdateAccount}>Submit</button>



            </div>


        </form>
    
    </>
  )
}

export default UpdateAccount
