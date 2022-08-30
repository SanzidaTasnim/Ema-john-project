import React from 'react';
import logo from './../../images/logo.png';
import './Header.css';

const Header = () => {
   return (
      <div>
         <div className = 'header-logo'>
            <img src={logo} alt="logo" />
         </div>
         <div className="header-nav">
            <ul>
               <a href="/shop">Shop</a>
               <a href="/review">Order Review</a>
               <a href="/inventory">Manage Inventory</a>
            </ul>
         </div>
      </div>
   );
};

export default Header;