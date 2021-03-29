import styled from 'styled-components'

// styled component
import { Container } from './common/Container'
import { Heading2 } from './common/Typography'
import { Card } from './Card'

// data
import staData from '../data/STA.json'
import { cardArray } from '../temp_img/ImageCrunch'

// custom hook
import { useAlternatingSet } from '../hook/useAlternatingSet'

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
  const { current, future } = useAlternatingSet([0, 1, 2], cardArray.length, 2000)

  return (
    <SampleContainer>
      <Heading2>
        One place for all masterpieces
      </Heading2>
      <CardRow>
        { current.map((i) => {
          return <Card {...cardArray[i]} key={cardArray[i].name}/>
        })}
      </CardRow>
      
    </SampleContainer>
  )
}

export default SampleCards