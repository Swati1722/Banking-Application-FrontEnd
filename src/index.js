import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Example1 from './component/Example1';
// import Example2 from './component/Example2';
// import GetAll from './component/GetAll';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Login from './component/Login2/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  {/* <Login/> */}
   
   
    {/* <GetAll /> */}
    {/* <Example1 /> */}
  {/* <Example2 /> */}
    
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
