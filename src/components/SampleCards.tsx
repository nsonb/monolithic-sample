import styled from 'styled-components'

// styled component
import { Container, Card } from './common/Container'
import { Heading2 } from './common/Typography'

// data
import zneData from '../data/ZNE.json'
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
        <Card src={cardArray[0].eng} key={cardArray[0].name}/>
        <Card src={cardArray[1].eng} key={cardArray[1].name}/>
        <Card src={cardArray[2].eng} key={cardArray[2].name}/>
      </CardRow>
      
    </SampleContainer>
  )
}

export default SampleCards