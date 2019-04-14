export const theme = {
  colors: {
    background: '#e8ebf1',
    primary: '#e6618b',
  },
}

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}
