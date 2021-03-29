import styled from 'styled-components'

export const Heading2 = styled.h2`
  color: ${props => props.theme.white};
  font-family: 'Lato', cursive;
  font-weight: 700;
  width: fit-content;
  margin: 0;
`

export const Title = styled.h1`
  display: block;
  color: ${props => props.theme.white};
  font-family: 'Catamaran', sans-serif;
  font-weight: 900;
  width: fit-content;
  margin: 0;
  font-size: 5rem;
  text-align: center;
  padding: 1.2rem;
  border-radius: .5rem;
  line-height: 4rem;
  transition: all 1s;
`

export const Subtitle = styled.h3`
  display: block;
  color: ${props => props.theme.white};
  font-family: 'Lato';
  width: fit-content;
  margin: 0;
  font-size: 1rem;
  text-align: center;
  padding: .4rem;
  transition: all 1s;
`