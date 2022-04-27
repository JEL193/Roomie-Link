import React from 'react'
import './SwipeButtons.css';

import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
function SwipeButtons() {
  return (

        <div className = "swipeButtons">
            <IconButton className= "swipeButtons__repeat">
            <ReplayIcon fontSize = "large" style={{ fill: '' }} />
            </IconButton>
            <IconButton className= "swipeButtons__left">
            <CloseIcon fontSize = "large" style={{ fill: '' }} />
            </IconButton>
            <IconButton className= "swipeButtons__star">
            <FavoriteIcon fontSize = "large" style={{ fill: '' }} />
            </IconButton>
            <IconButton className= "swipeButtons__right">
            <StarIcon fontSize = "large" style={{ fill: '' }} />
            </IconButton>
            <IconButton className= "swipeButtons__lightning">
            <FlashOnIcon fontSize = "large" style={{ fill: '' }} />
            </IconButton>
      


    </div>
  );
};

export default SwipeButtons