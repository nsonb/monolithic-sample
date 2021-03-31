import styled from 'styled-components'

// styled component
import { Container } from './common/Container'
import { Heading2 } from './common/Typography'
import { ShowcaseCard } from './Card'

// data
import { cardArray, card_img_data } from '../temp_img/ImageCrunch'

const SampleContainer = styled(Container)`
  background-color: ${props => props.theme.dark};
  height: 48rem;
`

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  min-width: fit-content;
  height: 90%;
  padding: .8rem 1rem;
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
  //const forth_set = arrayToStep(3, 4, cardArray)
  return (
    <SampleContainer>
      <Heading2>
        One place for all masterpieces
      </Heading2>
      <div style={{height: '80%', width: '100%', position: 'relative'}}>
        <CardRow>
          <ShowcaseCard cards={first_set}/>
          <ShowcaseCard cards={second_set}/>
          <ShowcaseCard cards={third_set}/>
          {/*<Card cards={forth_set}/>*/}
        </CardRow>
      </div>
    </SampleContainer>
  )
}

export default SampleCards