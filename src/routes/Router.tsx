import React from 'react'
import Paths from './Paths'
import { PathPropsTypes } from '../types/PathPropsTypes'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  const pageRoutes = Paths.map(({ title, path, element }: PathPropsTypes) => {
    return <Route key={title} path={`/${path}`} element={element} />
  })
  return <Routes>{pageRoutes}</Routes>
}

export default Router
