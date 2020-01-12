import * as EmotionTheming from 'emotion-theming'

export const lightTheme = {
  colors: {
    text: '#000000',
    inverseText: '#f1f1ea',
    background: '#f1f1ea',
    primary: '#d4ee6e',
    secondary: '#eee64e',
    grey: '#a5a39b',
  },
}

export const darkTheme = {
  colors: {
    text: '#e0e0e0',
    background: '#242325',
    primary: '#bf366a',
    secondary: '#8e467a',
    grey: '#686762',
  },
}

// TODO: Make switch
export const theme = lightTheme

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}

export const useTheme = () => EmotionTheming.useTheme<Theme>()
