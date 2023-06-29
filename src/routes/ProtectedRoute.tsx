import React, { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

type PropTypes = {
  children?: ReactNode
}

const ProtectedRoute = ({ children }: PropTypes) => {
  const { auth } = useContext(AuthContext)

  if (!auth) {
    return <Navigate to="/sign-in" replace />
  }
  return children
}

export default ProtectedRoute
