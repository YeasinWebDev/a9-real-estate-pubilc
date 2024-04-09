import React, { useContext } from 'react'
import { AuthContext } from '../Provider/ContextProvider'
import { useNavigate, useLocation, Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return
    }
    if (!user) {
        return <Navigate to={'/signin'} state={location.pathname || '/'} />
    }
    if (user) {
        return children
    }



}

export default PrivateRoute