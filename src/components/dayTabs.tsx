import { Box, Tab, Tabs } from "@mui/material";
import * as React from 'react';


export default function DayTabs() {
    const [value, setValue] = React.useState(0);
    // State to track the current viewport width
    const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);

    // Function to handle viewport width changes
    const handleViewportWidthChange = () => {
        setViewportWidth(window.innerWidth);
    };

    // Effect hook to subscribe to window resize events
    React.useEffect(() => {
        window.addEventListener('resize', handleViewportWidthChange);

        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', handleViewportWidthChange);

    }});

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };


    const days = [
        {id: 0, shortForm: 'Mon', longForm: 'Monday'},
        {id: 1, shortForm: 'Teus', longForm: 'Teusday'},
        {id: 2, shortForm: 'Wed', longForm: 'Wednesday'},
        {id: 3, shortForm: 'Thur', longForm: 'Thursday'},
        {id: 4, shortForm: 'Fri', longForm: 'Friday'},
        {id: 5, shortForm: 'Sat', longForm: 'Saturday'},
        {id: 6, shortForm: 'Sun', longForm: 'Sunday'},
    ];

    // Renders in shorthand form and with scroll buttons if Component exceeds viewport width
    if (viewportWidth < 700) {
           return (
        <Box >
            <Tabs 
            value={value} 
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            allowScrollButtonsMobile
            >
                {days.map(day => (
                    <Tab 
                    label={day.shortForm}
                    />
                ))}
               
            </Tabs>
        </Box>  
    ) 
    } else {
        return (
            <Box >
            <Tabs 
            value={value} 
            onChange={handleChange}
            centered
            allowScrollButtonsMobile
            >
                {days.map(day => (
                    <Tab 
                    label={day.longForm}
                    />
                ))}
            
            </Tabs>
        </Box>  
        )    
    }

}