import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Routes'
import { defautTheme } from './styles/themes/defaut'
import { BrowserRouter } from 'react-router-dom'
export function App() {

  return (
    <ThemeProvider theme={defautTheme}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
