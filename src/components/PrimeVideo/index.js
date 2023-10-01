// Write your code here
import './index.css'
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
    return (
      <div className="main-background">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-image"
        />
        <div className="movies-card">
          <h1 className="carousel-title">Action Movies</h1>
          <div className="slider-container">
            <MoviesSlider moviesList={actionMovies} />
          </div>
          <h1 className="carousel-title">Comedy Movies</h1>
          <div className="slider-container">
            <MoviesSlider moviesList={comedyMovies} />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
