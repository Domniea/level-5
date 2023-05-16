import { useState, useEffect } from 'react'
import axios from 'axios'
import Staff from './components/Staff'
import Drinks from './components/Drinks'
import './App.css'

function App() {

  const [staff, setStaff]= useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
      axios.get('/api/staff')
        .then(res => setStaff(res.data))
        .catch(err => console.log(err))
  } ,[])

  useEffect(() => {
    axios.get('/api/drinks')
      .then(res => {
        setDrinks(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const employee = staff.map(person => {
    return <Staff 
      key = {person._id}
        name = {person.name}
        job = {person.job}
        hairColor = {person.hairColor}
    />
  })

  const beverage = drinks.map(drink => {
    return <Drinks 
        key = {drink._id}
        type = {drink.type}
        cost = {drink.cost}
    />
  })
  
  return (
    <>
      <div className="App">
        {employee}
        {beverage}
      </div>
    </>
  )
}

export default App
