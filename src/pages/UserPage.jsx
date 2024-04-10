import React, { useContext } from 'react'
import { AuthContext } from '../Provider/ContextProvider'

function UserPage() {
  const { user } = useContext(AuthContext)
  return (
    <div>UserPage</div>
  )
}

export default UserPage