import React from 'react'
import { PathPropsTypes } from '../types/PathPropsTypes'
import SignIn from '../pages/sign-in'
import Dashboard from '../pages/dashboard'

const Paths: PathPropsTypes[] = [
  {
    path: 'dashboard',
    element: <Dashboard />,
    title: 'Dashboard',
    access: 'protected',
  },
  {
    path: 'sign-in',
    element: <SignIn />,
    title: 'SignIn',
    access: 'public',
  },
]

export default Paths
