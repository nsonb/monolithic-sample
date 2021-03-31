import styled from 'styled-components'
import staData from '../data/STA.json'
import { cardArray, card_img_data } from '../temp_img/ImageCrunch'

// components
// import { Container } from './common/Container'
import { GalleryCard } from './Card'

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: space-between;
  padding: 4rem;
  align-items: flex-start;
  margin: 2rem auto;

  @media screen and (max-width: 1349px) {
    width: 80%;
    padding: 3rem;
  }

  @media screen and (max-width: 1101px) {
    width: 90%;
    padding: 2rem;
  }
`

const Gallery = () => {
  return (
    <GalleryContainer >
      { cardArray.map((card, index) => {
          return (
            <GalleryCard card={card} key={card.name +' ' +index} />
          )
        })
      }
    </GalleryContainer>
  )
}

export default Gallery 