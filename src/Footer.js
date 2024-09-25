import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import { Button } from '@mui/material';



const FooterArea = () => {
    return (
        
        <BottomNavigation
><p>SUBSCRIBE FOR MORE DEALS! </p>
<input type="email" value=""  placeholder='youremail@email.com'/>
<Button>SIGN ME UP</Button>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
    );
};

export default FooterArea;