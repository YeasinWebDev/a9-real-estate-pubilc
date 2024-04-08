import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Route/Route.jsx'
import { RouterProvider } from "react-router-dom";
import ContextProvider from './Provider/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </ContextProvider>
  </React.StrictMode>,
)
