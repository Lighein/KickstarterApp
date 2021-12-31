import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cart: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  shoppingCartIconDiv: {
    position: 'relative',
  },
  shoppingCartIcon: {
    cursor: 'pointer',
  },
  logInOut: {
    marginLeft: "25px",
    cursor: "pointer",
  },
  shoppingCartItemNum: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'red',
    color: 'white',
    position: 'absolute',
    top: '-40%',
    right: '-40%',
    textAlign: 'center',
  },
  Icons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  addProduct: {
    marginLeft: "20px",
    cursor: "pointer"
  },
  logo: {
    height: '2.5em'
  }
}));

const Navbar = () => {

  return (
    <AppBar position="relative">
      <Toolbar >
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;