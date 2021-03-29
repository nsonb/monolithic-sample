import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 80vh;
  margin: 2rem auto;
  margin-bottom: 3.6rem;
  transition: all 1s;
`

export const Card = styled.img`
  width: 20rem;
  cursor: pointer;
  box-shadow: 2px 1px 15px -5px #fff;
  transition: all .4s;
  border-radius: .6rem;
  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 2px 1px 15px -1px #fff
  }
`