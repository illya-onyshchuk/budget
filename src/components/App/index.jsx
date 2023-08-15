/* eslint-disable import/no-anonymous-default-export */

import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import App from './app';
import { AppContext } from '../../providers/context';
import { getTheme } from '../../providers/themes/getTheme';

export default () => {
  const {state, dispatch} = useContext(AppContext)

  return (
    <ThemeProvider theme={getTheme(state.themeName)}>
      <App/>
    </ThemeProvider>
  )
}

