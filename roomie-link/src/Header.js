import React from 'react'
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';




function Header() {
  return (
    <div className='header'> 
    <IconButton> 
    <AccountCircleIcon className = 'header__icon' fontSize='large' />
    </IconButton>
    <img 
        className = 'header__logo'
        src = "https://i.ibb.co/vvjjXTF/roomielogosmall.png"></img> 
    <IconButton> 
    <ForumIcon className = 'header__icon' fontSize='large' />
    </IconButton>      

    </div>
  );
}

export default Header