import React from 'react'
import MovieApi from './MovieApi'
import Movie from './Movie'


const MovieList = ({lists}) => {
  return (
    <div className='mainListBody'>
        
        {lists.Response === "True" ?
          lists.Search.map((list) => (
            <li key={list.imdbID}>
              <Movie list={list}/>
            </li>
          ))
          : <p>{lists.Error}</p>
        }

    </div>
  )
}

export default MovieList