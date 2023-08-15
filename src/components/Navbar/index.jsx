import React from 'react';
import { Link } from 'react-router-dom';
import cl from './index.module.css';
import ThemeSwitch from '../ThemeSwitch';
import { Nav } from './style';

const Navbar= () => {
  return (
    <Nav className={cl.navbar}>
      <div className={cl.navbar__links}>
          <Link className={cl.navbar__link} to="/home">Home</Link>
          <Link className={cl.navbar__link} to="/statistics">Statistics</Link>
          <Link className={cl.navbar__link} to="/settings">Settings</Link>
          <Link className={cl.navbar__link} to="/about">About</Link>
      </div> 
      <ThemeSwitch/>
    </Nav>
  );
}

export default Navbar;
