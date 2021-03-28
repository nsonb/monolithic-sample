import { Heading2 } from './common/Typography'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.primary};
    padding: .5rem;
  `
const Footer = () => {
  return (
    <Container>
      <Heading2>it's phoking good</Heading2>
    </Container>
  )
}

export default Footer