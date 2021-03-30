import { useState } from "react";
import styled from "styled-components";
import { card_img_data } from '../temp_img/ImageCrunch'
import { useAlternatingImage } from '../hook/useAlternatingImage'

const CardContainer = styled.div`
  width: 23rem;
  position: relative;
  height: 100%;
  border-radius: .8rem;
  perspective: 100rem;
    -webkit-perspective: 100rem;
    -moz-perspective: 100rem;
  transition: all .8s;  
  &:hover {
    translateY(-.5rem);
  }

  & .face {
    cursor: pointer;
    box-shadow: 1px 1px 15px -8px #fff;
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 23rem;
    transition: all .6s;
    border-radius: .7rem;

    &__front {
      &--flipped {
        transform: rotateY(180deg);
    
        &:hover {
          transform: rotateY(180deg);
        }
      }
    }

    &__back {
      transform: rotateY(-180deg);

      &--flipped {
        transform: rotateY(0);

        &:hover {
          transform: rotateY(0);
        }
      }
    }
  }
`

export const Card = (props: {cards: card_img_data[]}) => {
  const { cards } = props
  const { current } = useAlternatingImage( 0, cards, 8000)
  const [ flipped , setflipped ] = useState(false)

  return (
    <CardContainer onClick={() => {setflipped(!flipped)}}>
      {
        cards.map((i: card_img_data, index) => {
          return(
            <div
              className='face'
              style={{
                visibility: index === current ? 'visible' : 'hidden',
                opacity: index === current? '1' : '0'
              }} 
              key={i.name}
            >
              <img 
                src={i.eng}
                className= {`face face__front ${flipped? 'face__front--flipped' : ''}`}
              />
              <img
                src={i.jap} 
                className={`face face__back ${flipped? 'face__back--flipped' : ''}`}
              />
            </div>
            
          )
        })
      }
    </CardContainer>
  )
}