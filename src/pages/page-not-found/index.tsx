import { Box, Typography } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Box
      component="div"
      sx={{
        minHeight: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">404 Page Not Found</Typography>
    </Box>
  )
}

export default index
