import React from 'react';
import { Link } from 'react-router-dom';
import cl from './index.module.css';
import ThemeSwitch from '../ThemeSwitch';
import { Nav } from './style';
import { FormattedMessage } from 'react-intl';


const Navbar= () => {
  return (
    <Nav className={cl.navbar}>
      <div className={cl.navbar__links}>
          <Link className={cl.navbar__link} to="/home">
            <FormattedMessage id='menu.home'/>
          </Link>

          <Link className={cl.navbar__link} to="/statistics">
            <FormattedMessage id='menu.statistics'/>
          </Link>

          <Link className={cl.navbar__link} to="/settings">
            <FormattedMessage id='menu.settings'/>
          </Link>

          <Link className={cl.navbar__link} to="/about">
            <FormattedMessage id='menu.about'/>
          </Link>
      </div> 
      <ThemeSwitch/>
    </Nav>
  );
}

export default Navbar;
