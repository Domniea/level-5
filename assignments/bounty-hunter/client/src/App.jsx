import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Bounty from './components/Bounty'
import './App.css'

function App() {
//   useEffect(() => {
//     axios.get('/api/')
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }, [])
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
