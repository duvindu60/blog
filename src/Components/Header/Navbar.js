import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Button, Box, Typography , AppBar, Toolbar } from "@mui/material";
import {Link} from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
    const handleToggle = () => setDarkMode(!darkMode);
 
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Tech Blog
          </Link>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/blogform">
            Thoughts
          </Button>
          <Button color="inherit" component={Link} to="/feedback">
            FeedBack
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
      
          <Button color="inherit" component={Link} to="/Signup">
            Signup
          </Button>
          <Button color="inherit" onClick={handleToggle}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;