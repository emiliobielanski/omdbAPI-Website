import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import Form from "./Form"

const MovieApi = () => {
  let [lists, setList] = useState([]);
  let [newInput, setNewInput] = useState("Batman")

  function handleChange (e) {
    setNewInput(e.target.value)
}


  const fetchAPI = async() => {
      try{
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=28d44ad8&s=${newInput}`);
        lists = await response.json();
        setList(lists);
      } catch(error){
        console.log(error);
      } 
    }
  

  useEffect(() => {
    fetchAPI();
  }, [newInput]);

  
  
  return(
    <div>
        <Form onChange={handleChange}/>
        <MovieList lists={lists} />
      </div>
        )
  

  }


export default MovieApi