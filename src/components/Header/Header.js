import React from 'react';
import logo from './../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         <div className = 'header-logo'>
            <img src={logo} alt="logo" />
         </div>
         <div className="header-nav">
            
            <Link to="/shop">Shop</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>

         </div>
      </div>
   );
};

export default Header;