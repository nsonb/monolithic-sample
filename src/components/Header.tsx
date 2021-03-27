import styled from 'styled-components'

const Button = styled.div`
  background-color: black;
  color: white;
  height: 2rem;
  width: 5rem;
`

const Header = () => {

  const style: React.CSSProperties = {
    width: '100%',
    height: '5rem',
    backgroundColor: 'skyblue'
  }

  return (
    <div style= {style}>
      <Button>I am button</Button>
      I am Header
    </div>
  )
}

export default Header