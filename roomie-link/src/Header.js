import React from 'react'
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';



function Header() {
  return (
    <div className='header'> 
    <h2> i am a header</h2>
    <AccountCircleIcon />
    <ForumIcon />    
     

    </div>
  );
}

export default Header