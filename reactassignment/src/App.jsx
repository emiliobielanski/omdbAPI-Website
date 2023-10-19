import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MovieApi from "./MovieApi/MovieApi"
import Header from "./Header"
import Footer from "./Footer"
function App() {

  return (
    <div className="App">
      <Header />
     <MovieApi />
     <Footer />
    </div>
  )
}

export default App
