import {DARK, BASIC, LIGHT} from './themesConfig'
import {THEMES} from './themeList'

export const getTheme = themeName => {
  switch(themeName) {
    case THEMES.DARK: return DARK;
    case THEMES.LIGHT: return LIGHT;
    default: return BASIC
  }
}