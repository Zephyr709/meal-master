import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import { BottomNavigation } from '@mui/material';
import LabelBottomNavigation from './components/LabelBottomNavigation';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <LabelBottomNavigation/>
    </div>


  )
}

export default App;
