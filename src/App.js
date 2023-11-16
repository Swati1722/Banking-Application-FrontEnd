
import './App.css';
import Bank from './component/Bank/Bank';
import Customer from './component/Customer/Customer';
import { Route, Routes } from 'react-router-dom';
import Login from  './component/Login/Login'
import AdminHome from './component/Home/AdminHome'

import CustomerHome from './component/Home/CustomerHome'
import Passbook from './component/Passbook/Passbook'
import Transaction from './component/Transaction/Transaction'
import EditProfile from './component/EditProfile/EditProfile'
import Account from './component/Account/Account';


function App() {
  return (
    <>
    {/* <Example1 /> */}
    {/* <Example2 /> */}
     
      <Routes>
        <Route exact path='/' element ={<Login/>}/>
        <Route exact path='/adminDashboard' element={<AdminHome/>} />
       
        <Route exact path='/adminDashboard/bank' element={<Bank/>} />
        <Route exact path='/adminDashboard/customer' element={<Customer/>} />  
        <Route exact path='/adminDashboard/account' element={<Account/>} /> 
        <Route exact path='/Login' element ={<Login/>} />


        <Route exact path='/customerDashboard/:username' element={<CustomerHome/>} />
        <Route exact path='/customerDashboard/passbook/:username' element={<Passbook/>} />
        <Route exact path='/customerDashboard/transaction/:username' element={<Transaction/>} />  
        <Route exact path='/customerDashboard/editprofile/:username' element={<EditProfile/>} /> 
      </Routes>


    </>
  );
}

export default App;
