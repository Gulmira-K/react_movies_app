import { useEffect, useState } from "react"
import axios from "axios"
import Movie from "./Movie"
import './Movies.scss'

const Movies = (props) => {
  const movieType = props.match.params.movieType
  const [movies, setMovies] = useState([])

  useEffect(() => {
    let apiUrl = `https://api.themoviedb.org/3/movie/${movieType}?api_key=e7fa7a273b74abf43da4905d3e11d887`
    axios.get(apiUrl)
      .then(response => setMovies(response.data.results))
      .catch(error => console.log(error))
  },[movieType])

  return (
    <div className='moviesContainer'>
      {movies?.map(movie => {
        return <Movie title={movie.title} imgPath={movie.poster_path} rating={movie.vote_average} key={movie.id}/>
      })}
    </div>
  )
}

export default Movies
