/* eslint-disable import/no-anonymous-default-export */

import React, { Profiler, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import App from './app';
import { AppContext } from '../../providers/context';
import { getTheme } from '../../providers/themes/getTheme';
import { IntlAppProvider } from '../../providers/i18n';

export default () => {
  const {state, dispatch} = useContext(AppContext)

  const onRender = (...res) => {
    console.log(res)
  }

  return (
    <ThemeProvider theme={getTheme(state.themeName)}>
      <IntlAppProvider>
        <Profiler id='app' onRender={onRender}>
          <App/>
        </Profiler>
      </IntlAppProvider>
    </ThemeProvider>
  )
}

