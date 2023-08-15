import React, { useContext } from 'react';
import { AppContext } from '../../providers/context';
import { THEMES } from '../../providers/themes/themeList';
import cl from './switch.module.css'
import { saveToStorage } from '../../utils/sessionStorage';

const ThemeSwitch = () => {
  const {state, dispatch} = useContext(AppContext)

  const setTheme = (e) => {
    const check = e.target.checked;
    const themeName = check ? THEMES.DARK : THEMES.LIGHT;

    dispatch({
      type: 'setTheme',
      themeName
    });

    saveToStorage('themeName', themeName) 
  }

  return (
    <>
      <label className={cl.switch}>
        <input onClick={(e) => setTheme(e)} type="checkbox" />
        <span className={cl.slider}></span>
      </label>
    </>
  )
}

export default ThemeSwitch;
