import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const bodyStyle: React.CSSProperties = {
    height: '70vh'
  }
  return (
    <div>
      <Header></Header>
      <div style={bodyStyle}>
        I am App
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App