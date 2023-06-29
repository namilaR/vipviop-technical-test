import { AppBar, Box, Button, MenuItem, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const index = () => {
  const { auth, signOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSignOut = () => {
    if (signOut()) {
      navigate('/sign-in')
    }
  }
  return (
    <Box component="div">
      <AppBar
        sx={{
          px: 2,
          py: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6">Dashboard</Typography>
        <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Hello Welcome {auth?.userEmail}</Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ ml: 2 }}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </Box>
      </AppBar>
    </Box>
  )
}

export default index
