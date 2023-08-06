import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      
      <LabelBottomNavigation />
    </Box>


  )
}

export default App;
