import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import Box from '@mui/material/Box';
import DayTabs from './components/dayTabs';
import PlannedRecipes from './components/PlannedRecipes';


function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      <DayTabs/>
      <PlannedRecipes/>
      <LabelBottomNavigation />
    </Box>


  )
}

export default App;
