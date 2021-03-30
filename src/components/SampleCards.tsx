import styled from 'styled-components'

// styled component
import { Container } from './common/Container'
import { Heading2 } from './common/Typography'
import { Card } from './Card'
import { fade_in, fade_out } from './common/Keyframe'

// data
import staData from '../data/STA.json'
import { cardArray } from '../temp_img/ImageCrunch'

// custom hook
import { useAlternatingSet } from '../hook/useAlternatingSet'

const SampleContainer = styled(Container)`
  background-color: ${props => props.theme.dark};
`
/*
  
*/
const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .8rem 3rem;
  justify-content: space-between;
`
const duration = 8000

const CurrentCardRow = styled(CardRow)`
  animation-name: ${fade_out};
  animation-duration: ${duration}ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`

const FutureCardRow = styled(CardRow)`
  animation-name: ${fade_in};
  animation-duration: ${duration}ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`

const SampleCards = () => {
  const { current, future } = useAlternatingSet([0, 1, 2], cardArray.length, duration)
  console.log(current)
  console.log(future)
  return (
    <SampleContainer>
      <Heading2>
        One place for all masterpieces
      </Heading2>
      <div style={{height: '80%', width: '100%', position: 'relative'}}>
        <CurrentCardRow>
          { current.map((i) => {
            return <Card {...cardArray[i]} key={cardArray[i].name}/>
          })}
        </CurrentCardRow>
        <FutureCardRow>
          { future.map((i) => {
            return <Card {...cardArray[i]} key={cardArray[i].name}/>
          })}
        </FutureCardRow>
      </div>
    </SampleContainer>
  )
}

export default SampleCards