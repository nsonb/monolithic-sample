import Header from './components/Header'
import Footer from './components/Footer'

import { ThemeProvider } from 'styled-components'
import { light_theme } from './components/common/Theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const App = () => {
  const bodyStyle: React.CSSProperties = {
    height: '70vh'
  }
  return (
    <ThemeProvider theme = {light_theme}>
      <GlobalStyle />
      <Header></Header>
      <div style={bodyStyle}>
        I am App
      </div>
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default App