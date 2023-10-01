// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class MoviesSlider extends Component {
  render() {
    const {moviesList} = this.props
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem key={each.id} details={each} />
        ))}
      </Slider>
    )
  }
}

export default MoviesSlider
