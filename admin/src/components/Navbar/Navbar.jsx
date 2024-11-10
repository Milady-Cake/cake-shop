import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <div className='profile-container'>
        <img className='profile' src={assets.profile_image} alt="" />
        <span className='admin'>admin</span> {/* Added the admin text here */}
      </div>
    </div>
  );
}

export default Navbar;
