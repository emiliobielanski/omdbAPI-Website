import React from 'react'
import MovieList from './MovieList'
const Movie = (props) => {
  return (
    <>
    <h2>{props.list.Title}</h2>
    <h3>{props.list.Year}</h3>
    <img src={props.list.Poster} alt="" />
    </>
  )
}

export default Movie