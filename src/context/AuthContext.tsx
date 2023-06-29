import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

type Props = {
  children?: ReactNode
}

type AuthContext = {
  auth: IUser | null
  isAuthLoaded: boolean
  setAuth: (newState: IUser | null) => void
  signIn: (values: ILoginUser) => boolean
  signOut: () => boolean
  loadUser: () => void
}

const initialValue = {
  auth: null,
  isAuthLoaded: false,
  setAuth: () => {},
  loadUser: () => {},
  signIn: (): boolean => {},
  signOut: (): boolean => {},
}

const AuthContext = createContext<AuthContext>(initialValue)

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(initialValue.auth)
  const [isAuthLoaded, setIsAuthLoaded] = useState(initialValue.isAuthLoaded)

  // const navigate = useNavigate()
  const { logIn } = useAuth()

  const signIn = (values: ILoginUser): boolean => {
    const response = logIn(values)
    if (response) {
      setAuth(response)
      window.localStorage.setItem('auth', JSON.stringify(response))
      return true
    }

    return false
  }
  const signOut = (): boolean => {
    if (window.localStorage.getItem('auth')) {
      setAuth(null)
      window.localStorage.clear()
      return true
    }
    return false

    return false
  }

  const loadUser = (): void => {
    if (!auth && window.localStorage.getItem('auth')) {
      const temp = JSON.parse(window.localStorage.getItem('auth'))

      setAuth(temp)
    }
    setIsAuthLoaded(true)
  }

  return (
    <AuthContext.Provider
      value={{ auth, isAuthLoaded, setAuth, signIn, loadUser, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
