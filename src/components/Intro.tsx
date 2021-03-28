import styled from 'styled-components'
import mystical_data from '../data/ZNE.json'
import opt from '../img/jap_opt.jpg'
import demonic_tutor from '../img/nihonga_Demonic_Tutor_art.jpg'

const IntroContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 100vh;

  & img {
    position: absolute;
    left: 0;
    top: -10rem;
    width: 100vw;
    object-fit: cover;
    overflow: hidden;
    filter: sepia(.2)
  }
`

const Intro = () => {
  const card_img = [ opt , demonic_tutor ]
  return (
    <IntroContainer>
      <img src={card_img[0]} alt="japanese art for opt"/>
    </IntroContainer>
  )
}

export default Intro