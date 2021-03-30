import styled from 'styled-components'

// styled component
import { Container } from './common/Container'
import { Heading2 } from './common/Typography'
import { Card } from './Card'
import { fade_in, fade_out } from './common/Keyframe'

// data
import staData from '../data/STA.json'
import { cardArray, card_img_data } from '../temp_img/ImageCrunch'

// custom hook
import { useAlternatingImage } from '../hook/useAlternatingImage'

const SampleContainer = styled(Container)`
  background-color: ${props => props.theme.dark};
  height: 60rem;
`

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  width:80%;
  padding: .8rem 3rem;
  justify-content: space-between;
  margin: 2rem auto;
`
/*
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
const duration = 8000
*/
const arrayToStep = (start: number, step: number, array: card_img_data[]) => {
  let returned_array: card_img_data[] = []
  let i = start
  while (i< array.length) {
    returned_array.push(array[i])
    i = i + step
  }
  return returned_array;
} 

const SampleCards = () => {
  const first_set = arrayToStep(0, 3, cardArray)
  const second_set = arrayToStep(1, 3, cardArray)
  const third_set = arrayToStep(2, 3, cardArray)
  console.log(first_set[22])
  return (
    <SampleContainer>
      <Heading2>
        One place for all masterpieces
      </Heading2>
      <div style={{height: '80%', width: '100%', position: 'relative'}}>
        <CardRow>
          <Card cards={first_set}/>
          <Card cards={second_set}/>
          <Card cards={third_set}/>
        </CardRow>
      </div>
    </SampleContainer>
  )
}

export default SampleCards