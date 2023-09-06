import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css'
import Login from './containers/Login/Login';
import ProductOrder from './containers/ProductOrder/ProductOrder'
import ProductPreview from './containers/ProductPreview/ProductPreview';
import AppRouter from './router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

