import styled from 'styled-components'
import { usePalette } from 'react-palette'
import { useAlternatingImage } from '../hook/useAlternatingImage'

// images
import opt from '../img/jap_opt.jpg'
import demonic_tutor from '../img/nihonga_Demonic_Tutor_art.jpg'
import sword from '../img/nihonga_Swords_to_Plowshares_art.jpg'

import { Title, Subtitle } from './common/Typography'

const IntroContainer = styled.div`
  overflow: hidden;
  width: 90%;
  position: relative;
  height: 80vh;
  border-radius: .5rem;
  margin: 2rem auto;
`

const Image = styled.img`
  position: absolute;
  left: 0;
  top: -10rem;
  width: 100%;  
  object-fit: cover;
  overflow: hidden;
  transition: all 1s ease;

  @media (max-width: 650px) {
    width: fit-content;
    height: 100%;
    top: 0;
  }
`

const Text = styled.div`
  position: relative;
  z-index: 5;
  padding: 2rem;
  border-radius: .5rem;
  transition: all 1s ease;
  height: 100%;
  width: 100%;

  & ${Title}{
    border: 1px solid white;
  }
`

const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
`

const Intro = () => {
  const card_imgs = [ opt , demonic_tutor, sword ]

  const { current } = useAlternatingImage(0, card_imgs, 8000)
  
  const { data, loading, error } = usePalette(card_imgs[current])

  return (
    <IntroContainer>
      <Text style={{backgroundColor: data.lightMuted+'A8'}}>
        <TextContainer>
          <Subtitle>archive of the master</Subtitle>
          <Title>Master Archive</Title>
        </TextContainer>
      </Text>
      { card_imgs.map((img, index) => {
        return (
          <Image src={img} alt="deco" key={img+index} style={index === current? {opacity: '1'} : {opacity: '0'}}/>
        )
      })}
    </IntroContainer>
  )
}

export default Intro