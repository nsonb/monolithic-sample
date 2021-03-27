import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'

import { ThemeProvider } from 'styled-components'
import { light_theme } from './components/common/Theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`

const App = () => {
  
  return (
    <ThemeProvider theme = {light_theme}>
      <GlobalStyle />
      <Header></Header>
      <div>
        <Intro/>
      </div>
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default App