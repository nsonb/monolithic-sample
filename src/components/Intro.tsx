import styled from 'styled-components'
import opt from '../img/jap_opt.jpg'
import demonic_tutor from '../img/nihonga_Demonic_Tutor_art.jpg'
import sword from '../img/nihonga_Swords_to_Plowshares_art.jpg'

const IntroContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 100vh;

  & img {
    position: absolute;
    left: 0;
    top: -12%;
    width: 100vw;
    object-fit: cover;
    overflow: hidden;
  }
`

const Intro = () => {
  const card_img = [ opt , demonic_tutor, sword ]
  return (
    <IntroContainer>
      <img src={card_img[1]} alt="japanese art for opt"/>
    </IntroContainer>
  )
}

export default Intro