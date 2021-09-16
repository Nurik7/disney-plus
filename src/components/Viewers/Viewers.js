import {Container, Wrap} from './ViewersStyles'

const Viewers = (props) => {
  const viewersImages = [
    {
      imageLink: './images/viewers-disney.png', alt: 'disney',
      videoLink: './videos/1564674844-disney.mp4'
    },
    {
      imageLink: './images/viewers-marvel.png', alt: 'marvel',
      videoLink: './videos/1564676115-marvel.mp4'
    },
    {
      imageLink: './images/viewers-national.png', alt: 'national',
      videoLink: './videos/1564676296-national-geographic.mp4'
    },
    {
      imageLink: './images/viewers-pixar.png', alt: 'pixar',
      videoLink: './videos/1564676714-pixar.mp4'
    },
    {
      imageLink: './images/viewers-starwars.png', alt: 'starwars',
      videoLink: './videos/1608229455-star-wars.mp4'
    }
  ]

  let viewersContent = viewersImages.map(i => (
    <Wrap>
      <img src={i.imageLink} alt={i.alt}/>
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={i.videoLink} type='video/mp4'/>
      </video>
    </Wrap>))
  return (
    <Container>
      {viewersContent}
    </Container>
  )
}

export default Viewers