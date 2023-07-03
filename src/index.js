import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { ProductProvider } from './compenents/ProductContext';


import { BrowserRouter as Router } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Router>,
);


