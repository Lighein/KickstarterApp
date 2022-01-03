import {Box} from '@mui/material'
import React from 'react';
import Navbar from './components/Navbar'
import Router from './Routes'

function App() {
  return (
    <Box>
      <Navbar />
      <Router />
    </Box>
  );
}

export default App;
