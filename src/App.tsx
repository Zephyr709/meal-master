import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import ResponsiveAppBar from './components/AppBar';
import LabelBottomNavigation from './components/LabelBottomNavigation';
import Box from '@mui/material/Box';
import DayTabs from './components/dayTabs';
import PlannedRecipes from './components/PlannedRecipes';
import { CssBaseline,  ThemeProvider, createTheme } from '@mui/material';



const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <ResponsiveAppBar />
        <Box>
          
          <DayTabs/>
          <PlannedRecipes/>
          <LabelBottomNavigation />
        </Box>
        
        
        <Routes>
          <Route path="/"  />
          <Route path="/recipes" />
          <Route path="/pantry" />
        </Routes>
      </Router>
    </ThemeProvider>
   


  )
}

export default App;
