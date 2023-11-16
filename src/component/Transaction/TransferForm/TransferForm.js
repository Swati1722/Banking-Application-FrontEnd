import React, {useState} from 'react'
import './TransferForm.css'
import { TransferAmount } from '../../../Service/TransactionService';

const TransferForm = ({data}) => {
    const [transferType, setTransferType] = useState('self');
    const [senderAccount, setSenderAccount] = useState('');
    const [receiverAccount, setReceiverAccount] = useState('');
    const [amount, setAmount] = useState('');
    // const [username, setUsername] = useState(value)
  
    const handleTransferTypeChange = (event) => {
      setTransferType(event.target.value);
    };


    const Transaction = async() =>{
        console.log("sender accountis --->"+senderAccount)
        console.log("reciver accountis --->"+receiverAccount)
        
        
        try{
            let response = await TransferAmount(senderAccount,receiverAccount,amount)
            console.log(response)
            if(response)
            {
                alert("Balance is Transferd")
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
      <div className="t-blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className='t-container'>

            <div className='t-heading'>
                <h1>Balance Transfer</h1>
                <hr/>
            </div>
            <div className='t-body'>
            <form >
                <div className='transfer-type'>
                    <label className='t-button'>
                        <input type="radio" value="self" checked={transferType === 'self'} onChange={handleTransferTypeChange} />
                        Self Transfer
                    </label>
                    <label className='t-button'>
                        <input type="radio" value="other" checked={transferType === 'other'} onChange={handleTransferTypeChange} />
                        Other Account Transfer
                    </label>
                </div>

                <div className='t-senderaccount'> 
                    <label htmlFor="senderAccount">Sender Account:</label>
                    <select id="senderAccount" value={senderAccount} onChange={(e) => setSenderAccount(e.target.value)}>
                        <option value={null}>Select an account</option>
                        
                        {data.map((account) => (
                            <option key={account.accountNo} value={account.accountNo}>
                            {account.accountNo}
                            </option>
                        ))}
                    </select>
                    
                </div>
                {transferType === 'self' && 
                    (<div className='t-receiveraccount'>
                        <label htmlFor="receiverAccount">Receiver Account:</label>
                
                        <select id="receiverAccount" value={receiverAccount} onChange={(e) => setReceiverAccount(e.target.value)}>
                            <option value={null}>Select an account</option>
                            {data.map((account) => (
                                <option key={account.accountNo} value={account.accountNo}>
                                {account.accountNo}
                                </option>
                            ))}
                        </select>
                    </div> )
                }

                {transferType === 'other' && (
                    <div className='t-receiveraccount'>
                        <label htmlFor="receiverAccount">Receiver Account:</label>
                        <input type="text" id="receiverAccount" value={receiverAccount} onChange={(e) => setReceiverAccount(e.target.value)} placeholder='Enter account No'/>
                    </div>
                )}

                <div className='t-amount' >
                    <label htmlFor="amount"> Amount:</label>
                    <input type="text"  id="t-amount"  value={amount} onChange={(e) => setAmount(e.target.value)} required/>
                </div>

                <button type="submit" className='btn btn-primary t-submitbutton' onClick={Transaction}>Submit</button>
            </form>
            </div>



        </div>
  



    
    
    
    
    
    </>
  )
}

export default TransferForm
