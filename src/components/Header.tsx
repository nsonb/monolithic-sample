import styled from 'styled-components'
import { Heading1 } from './common/Typography'

const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.white};
    padding: .5rem;
  `
const Header = () => {
  return (
    <Container>
      <Heading1>phoking</Heading1>
    </Container>
  )
}

export default Header