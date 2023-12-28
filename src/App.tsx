import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Routes'
import { defautTheme } from './styles/themes/defaut'
import { BrowserRouter } from 'react-router-dom'
import { CoffeContextProvider } from './contexts/CoffeContexts'

export function App() {

  return (
    <ThemeProvider theme={defautTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <Router />
        </CoffeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
