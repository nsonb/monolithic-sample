import styled from 'styled-components'
import staData from '../data/STA.json'
import { cardArray, card_img_data } from '../temp_img/ImageCrunch'

// components
import { Container } from './common/Container'
import { GalleryCard } from './Card'

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 560rem;
  justify-content: space-between;
  padding: 1rem;
  align-items: flex-start;
`

const Gallery = () => {
  return (
    <GalleryContainer>
      { cardArray.map((card, index) => {
          return (
            <GalleryCard card={card} key={card.name +' ' +index}/>
          )
        })
      }
    </GalleryContainer>
  )
}

export default Gallery 