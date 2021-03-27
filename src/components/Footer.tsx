import { Heading1 } from './common/Typography'

const Footer = () => {

  const style: React.CSSProperties = {
    width: '100%',
    height: '5rem',
    backgroundColor: 'skyblue'
  }

  return (
    <div style= {style}>
      <Heading1>I am Footer</Heading1>
    </div>
  )
}

export default Footer