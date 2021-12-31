import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import { Typography } from "@mui/material";

const Navbar = () => {

  return (
    <AppBar position="relative">
      <Toolbar >
        <Typography variant="h3"></Typography>
        <ShoppingCartIcon />
        <ExitToAppSharpIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;