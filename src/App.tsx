import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import { Box, Container } from '@mui/material'
import { AuthContext, AuthProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const { loadUser, isAuthLoaded } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <BrowserRouter>
      <Container maxWidth={false} disableGutters sx={{ minHeight: 'inherit' }}>
        {isAuthLoaded && <Router />}
      </Container>
    </BrowserRouter>
  )
}

export default App
