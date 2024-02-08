
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const NavBar = () =>{
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" style={{'color':'yellow','cursor':'pointer'}} sx={{ flexGrow: 1 }}>
            Photo-shoot
          </Typography>
          <Link >
          <Button onClick={()=>(window.scrollTo(0,document.body.scrollHeight))} style={{'color':'yellow','MozTextBlink':'blink'}} variant='h2' >Contact Us</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
