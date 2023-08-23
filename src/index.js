import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css'
import Login from './containers/Login/Login';
import ProductOrder from './containers/ProductOrder/ProductOrder'
import ProductPreview from './containers/ProductPreview/ProductPreview';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Login />
    {/* <ProductOrder /> */}
    {/* <ProductPreview /> */}
  </>
);

