import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Bounty from './components/Bounty'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/bounty' element={ <Bounty />}/>
    </Routes>
    </>
  )
}

export default App
