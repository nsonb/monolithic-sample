import { Heading1 } from './common/Typography'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.white};
    padding: .5rem;
    position: absolute;
    bottom: 0
  `
const Footer = () => {
  return (
    <Container>
      <Heading1>it's phoking good</Heading1>
    </Container>
  )
}

export default Footer