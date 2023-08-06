import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MenuIcon from '@mui/icons-material/Menu';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation 
    sx={{ 
      position: 'fixed',
      bottom: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      borderTop: '1px solid lightGray'
      
    }} 
    value={value} 
    onChange={handleChange}>
      <BottomNavigationAction
        label="Assistant"
        value="assistant"
        icon={<ChatBubbleIcon />}
      />
      <BottomNavigationAction
        label="Recipes"
        value="recipes"
        icon={<MenuBookIcon />}
      />
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction 
        label="Pantry" 
        value="pantry" 
        icon={<KitchenIcon />}
         />
      <BottomNavigationAction
        label="Options"
        value="options"
        icon={<MenuIcon/>}
        />

    </BottomNavigation>
  );
}