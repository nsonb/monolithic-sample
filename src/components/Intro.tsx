import styled from 'styled-components'

const IntroContainer = styled.div`
  border-radius: .5rem;
  overflow: hidden;
  width: 100vw;

  & img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    filter: sepia(.2)
  }
`

const Intro = () => {
  const food_img = [
    'https://www.citypassguide.com/media/slideshow/northern-vietnamese-cuisine.jpg.1758x854_q85_crop.jpg',
    "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/Vietnamese-food-spread.gif",
    "https://duyt4h9nfnj50.cloudfront.net/resized/1543931229557-w2880-41.jpg"
  ]
  return (
    <IntroContainer>
      <img src={food_img[1]} alt="food"/>
    </IntroContainer>
  )
}

export default Intro