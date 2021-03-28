import styled from 'styled-components'
import { Heading2 } from './common/Typography'

const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.primary};
    padding: .5rem;
  `
const Header = () => {
  return (
    <Container>
      <Heading2>Master Archive</Heading2>
    </Container>
  )
}

export default Header