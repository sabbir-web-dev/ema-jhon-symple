import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
    <div className='Header'>
        <img src={logo} alt="Logo" />
        <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/orderRevew">Order Rebiew</a></li>
            <li> <a href="/mamage">Manage inventory here</a></li>
        </ul>
     </div>
    );
};

export default Header;