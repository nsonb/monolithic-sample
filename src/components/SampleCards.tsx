import styled from 'styled-components'

// styled component
import { Container } from './common/Container'
import { Heading2 } from './common/Typography'
import { Card } from './Card'

// data
import staData from '../data/STA.json'
import { cardArray } from '../temp_img/ImageCrunch'

const SampleContainer = styled(Container)`
  background-color: ${props => props.theme.dark};
`

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem 2rem;
  justify-content: space-between;
`

const SampleCards = () => {
  console.log(cardArray.length)
  staData.data.cards.map((i) => {
    console.log(i.name)
  })

  return (
    <SampleContainer>
      <Heading2>
        One place for all masterpieces
      </Heading2>
      <CardRow>
        <Card {...cardArray[0]}/>
        <Card {...cardArray[1]}/>
        <Card {...cardArray[2]}/>
        
      </CardRow>
      
    </SampleContainer>
  )
}

export default SampleCards