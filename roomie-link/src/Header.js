import React from 'react'
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';



function Header() {
  return (
    <div className='header'> 
    <AccountCircleIcon />
    <img src = "../public/roomielogo.png"></img>

    <ForumIcon />
     

    </div>
  );
}

export default Header