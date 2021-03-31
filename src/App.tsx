import Footer from './components/Footer'
import Intro from './components/Intro'
import SampleCards from './components/SampleCards'
import Gallery from './components/Gallery'

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
      <div>
        <Intro/>
        <SampleCards></SampleCards>
        <Gallery></Gallery>
      </div>
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default App