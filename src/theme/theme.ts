export const lighTheme = {
  colors: {
    text: '#000000',
    background: '#e8ebf1',
    primary: '#f0448c',
    secondary: '#863d75',
    grey: '#a5a39b',
  },
}

export const darkTheme = {
  colors: {
    text: '#EEEEEE',
    background: '#242325',
    primary: '#bf366a',
    secondary: '#8e467a',
    grey: '#686762',
  },
}

export const theme = darkTheme

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}
