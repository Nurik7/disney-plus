import {Carousel, Wrap} from './ImageSliderStyles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  const sliderImages = [
    {link: '#', imageSrc: '/images/slider-badging.jpg', alt: 'slider-image-1'},
    {link: '#', imageSrc: '/images/slider-badag.jpg', alt: 'slider-image-1'},
    {link: '#', imageSrc: '/images/slider-scale.jpg', alt: 'slider-image-1'},
    {link: '#', imageSrc: '/images/slider-scales.jpg', alt: 'slider-image-1'}
  ]

  let sliderContent = sliderImages.map(i => (<Wrap><a href={i.link}><img src={i.imageSrc} alt={i.alt}/></a></Wrap>))
  return (
    <Carousel {...settings}>
      {sliderContent}
    </Carousel>
  )
}

export default ImageSlider