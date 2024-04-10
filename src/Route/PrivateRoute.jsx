import React, { useContext } from 'react'
import { AuthContext } from '../Provider/ContextProvider'
import {  useLocation, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return
    }
    if (!user) {
        toast("Please login first")
        return <Navigate to={'/signin'} state={location.pathname || '/'} />
    }
    if (user) {
        return children
    }



}

export default PrivateRoute