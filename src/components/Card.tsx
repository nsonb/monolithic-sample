import { useState } from "react";
import styled from "styled-components";
import { card_img_data } from '../temp_img/ImageCrunch'
import { useAlternatingImage } from '../hook/useAlternatingImage'

const Title = styled.h3`
  color: white;
  padding: .8rem;
`
// using scss solution for the rotating for now
const CardContainer = styled.div`
  width: 25rem;
  position: relative;
  height: 35rem;
  border-radius: 1rem;
  perspective: 100rem;
    -webkit-perspective: 100rem;
    -moz-perspective: 100rem;
  transition: all .8s;
  margin-right: .5rem;
  margin-bottom: 4rem;
  
  &:hover {
    transform: translateY(-.5rem);
  }

  & ${Title} {
    position: absolute;
    left: 50%;
    bottom: -3rem;
    height: 3rem;
    width: fit-content;
    transform: translateX(-50%);
    color: ${props => props.theme.light};
  }
  
  & .face {
    cursor: pointer;
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 25rem;
    transition: all .6s;
    border-radius: 1rem;
    height: 100%;

    &__front {
      box-shadow: 1px 1px 15px -8px #fff;
      &--flipped {
        transform: rotateY(180deg);
    
        &:hover {
          transform: rotateY(180deg);
        }
      }
    }

    &__back {
      transform: rotateY(-180deg);
      box-shadow: 1px 1px 15px -8px #fff;
      &--flipped {
        transform: rotateY(0);

        &:hover {
          transform: rotateY(0);
        }
      }
    }
  }
`

export const ShowcaseCard = (props: {cards: card_img_data[]}) => {
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
              <Title>
                {i.name}
              </Title>
              <img
                alt={'card english for' + i.name}
                src={i.eng}
                className= {`face face__front ${flipped? 'face__front--flipped' : ''}`}
              />
              <img
                alt={'card japanese for' + i.name}
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

export const GalleryCard = (props: {card: card_img_data}) => {
  const { name, eng, jap } = props.card
  const [ flipped , setflipped ] = useState(false)
  return (
    <CardContainer onClick={() => {setflipped(!flipped)}}>
      <div key={name}>
      <Title style={{color: 'black'}}>
        {name}
      </Title>
      <img
        alt={'card english for' + name}
        src={eng}
        className= {`face face__front ${flipped? 'face__front--flipped' : ''}`}
      />
      <img
        alt={'card japanese for' + name}
        src={jap} 
        className={`face face__back ${flipped? 'face__back--flipped' : ''}`}
      />
    </div>
    </CardContainer>
  )
}