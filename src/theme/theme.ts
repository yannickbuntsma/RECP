export const theme = {
  colors: {
    background: '#e8ebf1',
    primary: '#368652',
  },
}

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}
