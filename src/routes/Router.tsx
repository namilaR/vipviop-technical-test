import React, { useContext } from 'react'
import Paths from './Paths'
import { PathPropsTypes } from '../types/PathPropsTypes'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import { AuthContext } from '../context/AuthContext'
import PageNotFound from '../pages/page-not-found'

const Router = () => {
  const pageRoutes = Paths.map(
    ({ title, path, element, access }: PathPropsTypes) => {
      if (access === 'protected') {
        return (
          <Route
            key={title}
            path={`/${path}`}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        )
      } else {
        return <Route key={title} path={`/${path}`} element={element} />
      }
    }
  )
  return (
    <Routes>
      {pageRoutes}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router
