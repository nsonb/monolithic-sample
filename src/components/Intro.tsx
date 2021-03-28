import styled from 'styled-components'
import { usePalette } from 'react-palette'
import { useAlternatingImage } from '../hook/useAlternatingImage'

// images
import opt from '../img/jap_opt.jpg'
import demonic_tutor from '../img/nihonga_Demonic_Tutor_art.jpg'
import sword from '../img/nihonga_Swords_to_Plowshares_art.jpg'

const IntroContainer = styled.div`
  overflow: hidden;
  width: 80%;
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
`

const Intro = () => {
  const card_imgs = [ opt , demonic_tutor, sword ]

  const { current } = useAlternatingImage(0, card_imgs, 8000)
  
  const { data, loading, error } = usePalette(card_imgs[current])

  return (
    <IntroContainer>
      { card_imgs.map((img, index) => {
        return (
          <Image src={img} alt="deco" key={img+index} style={index === current? {opacity: '1'} : {opacity: '0'}}/>
        )
      })}
    </IntroContainer>
  )
}

export default Intro