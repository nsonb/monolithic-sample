import { useState } from "react";
import styled from "styled-components";
import { card_img_data } from '../temp_img/ImageCrunch'
import { useAlternatingImage } from '../hook/useAlternatingImage'

const CardContainer = styled.div`
  width: 20rem;
  position: relative;
  height: 100%;
`
const Cardsplay = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 20rem;
  cursor: pointer;
  box-shadow: 1px 1px 15px -8px #fff;
  transition: all .5s;
  border-radius: .7rem;

  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 2px 1px 15px -1px #fff
  }
`

export const Card = (props: {cards: card_img_data[]}) => {
  const { cards } = props
  const { current } = useAlternatingImage( 0, cards, 8000)
  const [ variant, setVariant ] = useState(false)

  return (
    <CardContainer onClick={() => {setVariant(!variant)}}>
      {cards.map((i: card_img_data, index) => {
        return(
          <Cardsplay src={variant? i.eng : i.jap} style={{
              visibility: index === current ? 'visible' : 'hidden',
              opacity: index === current? '1' : '0'
            }} 
          />
        )
      })}
    </CardContainer>
  )
}