import React, { useState } from 'react'
import MovieApi from './MovieApi';
import MovieList from './MovieList';
const Form = (onChange) => {
 
     
   return (
     <div >
     <form action="" ><input type="text" 
     onChange={onChange.onChange} 
     placeholder="Search for a movie..."/> <button>Dropdown menu</button> </form>
     </div>
   
   )
 }

export default Form
