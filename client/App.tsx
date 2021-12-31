import React from 'react'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Router from './Routes'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Router />
    </Box>
  )
}

export default App