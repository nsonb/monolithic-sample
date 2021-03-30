import { useState } from "react";
import styled from "styled-components";

const Cardsplay = styled.img`
  width: 20rem;
  cursor: pointer;
  box-shadow: 1px 1px 15px -8px #fff;
  transition: all .4s;
  border-radius: .7rem;
  
  
  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 2px 1px 15px -1px #fff
  }
`

export const Card = (props: {name: string, eng: string, jap: string}) => {
  const {name, eng, jap} = props
  const [ variant, setVariant ] = useState(false)

  return (
    <div onClick={() => {setVariant(!variant)}}>
      <Cardsplay src={variant? eng : jap} />
      <div style={{color: 'whitesmoke', textAlign: 'center', padding: '.5rem'}}>{name}</div>
    </div>
  )
}