import React, { useState, useEffect } from 'react'
import { creditBalance, debitBalance } from '../../Service/PassbookService'

const UpdateAccount = ({value,isCreditButton, isDebitButton}) => {

    
    const [amount, setAmount] = useState('');
    const[account,setAccount] =useState()
    const [accountNo,setAccountNo] =useState()
    // useEffect(()=>{
    //     console.log(value)
    // })

    useEffect(() => {
        if (value) {
            setAccount(value);
            setAccountNo(value.accountNo)
           
        }
    }, [value]);
    const UpdateAccount =async() => {
        // console.log(account)
        // setAccountNo(account.accountNo)
        console.log(accountNo)
        if(isCreditButton)
        {
            let resp = await creditBalance(amount, accountNo)
            if(resp)
            {
                alert("Balance is Credited")
            }
        }   
        if (isDebitButton){
        
            console.log(account)
            let resp = await debitBalance(amount,accountNo)
            if(resp)
            {
                alert("Balance is Debited")
            }
        }
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
