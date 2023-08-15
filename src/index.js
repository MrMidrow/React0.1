import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './containers/Login/Login';
import Product from './containers/Product/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Login />
    {/* <Product /> */}
  </React.StrictMode>
);

