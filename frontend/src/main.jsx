import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import './index.css'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <StoreContextProvider>
    <App />
    <ToastContainer/>
    </StoreContextProvider>
    </BrowserRouter>
 
)