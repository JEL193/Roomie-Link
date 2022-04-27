import React from 'react'
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useHistory } from "react-router-dom";




function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className='header'> 
    {backButton ?(
        <IconButton onClick = {() => history.replace(backButton)}> 
        <ArrowBackIosNewIcon className = 'header__icon' fontSize='large' />
        </IconButton>
        
    ) : (
    <IconButton> 
    <AccountCircleIcon className = 'header__icon' fontSize='large' />
    </IconButton>
    )}
    <Link to = "/">
    <img className = 'header__logo'
        src = "https://i.ibb.co/x2qK0By/roomielogosmall.png" alt="roomielogosmall"></img> 
    </Link>
    <Link to = "/chat">
    <IconButton> 
    <ForumIcon className = 'header__icon' fontSize='large' />
    </IconButton>      
    </Link>

    </div>
  );
}

export default Header