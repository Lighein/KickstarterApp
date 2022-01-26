import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Login from './components/LogIn';
import Products from './components/Products';

/**
 * COMPONENT
 */
const FourOhFour = () => {
  return <h1>Why are you here?</h1>;
};

class Router extends Component{
  render() {
    return (
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <Routes>
            <Route path="/" element = {<Products/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route element={FourOhFour} />
          </Routes>
        </Box>
      </BrowserRouter>
    );
  }
}
export default Router;
