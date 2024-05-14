import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from "../components/Home"
import Play from "../components/Play"
import HighScore from '../components/HighScore'

function Routing() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/play" element={<Play/>}/>
    <Route path="/score" element={<HighScore/>}/>
   </Routes>
  )
}

export default Routing