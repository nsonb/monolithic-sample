import styled from 'styled-components'

export const Button = styled.div`
  display: block;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.dark};
  height: 3rem;
  width: fit-content;
  padding: .5rem 3rem;
  margin: .5rem auto;
  text-transform: uppercase;
  font-family: 'Lato';
  text-align: center;
  cursor: pointer;
  border-radius: 2rem;
  font-size: 1.5rem;
`