import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AccountButton } from './account';
import { CartButton } from './cart';

export function Navbar() {

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MFIT
            </Typography>
            <CartButton />
            <AccountButton />
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
