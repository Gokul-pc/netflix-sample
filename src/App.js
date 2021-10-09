import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Banner from './components/Banner/Banner'
import Rowpost from './components/Rowpost/Rowpost'
import { actionMovies, animation, fantasy, horror,  originals } from './components/constants/constants'
import Video from './components/Video/Video'




function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={actionMovies} title="Action Movies"  isSmall />  
      <Rowpost url={horror} title="Horror Movies"  isSmall /> 
      <Rowpost url={animation} title="Animation Movies"  isSmall /> 
      <Rowpost url={fantasy} title="Fantasy Movies"  isSmall />
      <Video/> 
   
    </div>
  )
}

export default App
