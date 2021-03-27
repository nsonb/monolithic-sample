import styled from 'styled-components'
import { Heading1 } from './common/Typography'

const Container = styled.div`
    width: 100%;
    height: 5rem;
    background-color: ${props => props.theme.secondary}
  `
const Header = () => {
  return (
    <Container>
      <Heading1>phoking</Heading1>
    </Container>
  )
}

export default Header