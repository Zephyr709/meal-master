import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import Box from '@mui/material/Box';
import DayTabs from './components/dayTabs';

function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      <DayTabs />  
      <LabelBottomNavigation />
    </Box>


  )
}

export default App;
