import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/ProductProvider';
import { TokenProvider } from './context/TokenProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ProductProvider>
    <TokenProvider>
     <App />
    </TokenProvider>
   </ProductProvider>
  </BrowserRouter>
);


