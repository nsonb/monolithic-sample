import styled from 'styled-components'
import { PaletteColors, usePalette } from 'react-palette'
import { useEffect, useState } from 'react'
import { useAlternatingImage } from '../hook/useAlternatingImage'

// images
import opt from '../img/jap_opt.jpg'
import demonic_tutor from '../img/nihonga_Demonic_Tutor_art.jpg'
import sword from '../img/nihonga_Swords_to_Plowshares_art.jpg'

import { Title, Subtitle } from './common/Typography'


const IntroContainer = styled.div`
  overflow: hidden;
  width: 95%;
  position: relative;
  height:40vh;
  border-radius: .5rem;
  margin: 1rem auto;
  transition: all 1s;

  &:hover{
  }
`

const FrontContainer = styled.div`
  position: relative;
  z-index: 5;
  padding: 2rem;
  border-radius: .5rem;
  transition: all 1s ease;
  height: 100%;
  width: 100%;
  cursor: pointer;

  & ${Title}{
    border: 1px solid white;
  }
`
const Image = styled.img`
  position: absolute;
  left: 0;
  top: -10rem;
  width: 105%;  
  object-fit: cover;
  overflow: hidden;
  transition: all 1s ease;

  ${IntroContainer}:hover & {
    width: 100%;
  }

  @media (max-width: 650px) {
    width: fit-content;
    height: 100%;
    top: 0;
  }
`

const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%); 
  transition: all 1s;

  ${FrontContainer}:hover & {
    top: 50%;

    & ${Title}{
      color: ${props => props.theme.primary};
      background-color: ${props => props.theme.secondary+'D9'};
      border: none;
      font-size: 5.4rem;
    }
  }
`
// main body of component
const Intro = () => {
  const card_imgs = [ opt , demonic_tutor, sword ]
  const { current } = useAlternatingImage(0, card_imgs, 8000)

  const { data: color1 } = usePalette(card_imgs[0])
  const { data: color2 } = usePalette(card_imgs[1])
  const { data: color3 } = usePalette(card_imgs[2])
  
  const color_data = [ color1, color2, color3]
  const [ background, setBackground ] = useState<string>(color_data[current].lightMuted + 'D9')

  useEffect(() => {
    setBackground(color_data[current].lightMuted + 'D9')
  }, [current])

  return (
    <IntroContainer>
      <FrontContainer 
        style={{backgroundColor: background}}
        onMouseEnter={() => {setBackground(color_data[current].lightMuted + 'D9')}}
        onMouseLeave={() => {setBackground(color_data[current].lightMuted + 'D9')}}
      >
        <TextContainer>
          <Subtitle>library of all masterpieces</Subtitle>
          <Title>Master Archive</Title>
        </TextContainer>
      </FrontContainer>
      { card_imgs.map((img, index) => {
        return (
          <Image src={img} alt="deco" key={img+index} style={index === current? {opacity: '1'} : {opacity: '0'}}/>
        )
      })}
    </IntroContainer>
  )
}

export default Intro