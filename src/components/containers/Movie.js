import React from 'react'
import './Movie.scss'

const Movie = ({title, imgPath, rating}) => {
  return (
    <div className='movieContainer'>
      <h5>{title}</h5>
      <img src={`https://image.tmdb.org/t/p/w200${imgPath}`} alt={title} />
      <span>{rating}</span>
    </div>
  )
}

export default Movie
