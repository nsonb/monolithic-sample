import styled from 'styled-components'

// styled component
import { Container, Card } from './common/Container'
import { Heading2 } from './common/Typography'

// data
import zneData from '../data/ZNE.json'
import staData from '../data/STA.json'

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
  console.log(staData.data.cards)
  return (
    <SampleContainer>
      <Heading2>
        One place for all masterpieces
      </Heading2>
      <CardRow>
        <Card src={`https://cdn.cardsrealm.com/images/uploads/1616906017.jpeg`}/>
        <Card src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${zneData.data.cards[1].identifiers.multiverseId}&type=card`}/>
        <Card src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${zneData.data.cards[2].identifiers.multiverseId}&type=card`}/>
      </CardRow>
      
    </SampleContainer>
  )
}

export default SampleCards