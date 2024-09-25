import React from 'react';
import Container from '@mui/material/Container';

const HeaderArea = () => {
    return (
        <Container maxWidth="xl" disableGutters={true} 
        sx={{
            backgroundImage: `url('https://cdn.ssactivewear.com/Images/Style/1822_fs.jpg')`, // Add your image URL here
            backgroundSize: 'cover', // Ensures the image covers the whole area
            backgroundPosition: 'center', // Centers the image
            height: '400px', // Set a height for the container
            display: 'flex', // Optional, for centering content inside
            alignItems: 'center', // Optional, for vertical alignment
            justifyContent: 'center', // Optional, for horizontal alignment
          }}>
            <h1>50% OFF NOW</h1>
            </Container>
      );
};


export default HeaderArea;