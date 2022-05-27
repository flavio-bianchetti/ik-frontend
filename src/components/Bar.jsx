// adapted from the website
// https://mui.com/pt/material-ui/react-app-bar/

import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import MenuBar from './MenuBar';

export default function DenseAppBar() {
  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static">
        <Toolbar variant="dense">
          <MenuBar />
          <Typography variant="h6" color="inherit" component="div">
            Agenda
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
