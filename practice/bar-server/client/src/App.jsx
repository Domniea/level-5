import { useState, useEffect } from 'react'
import axios from 'axios'
import Staff from './components/Staff'
import StaffForm from './components/StaffForm'
import Drinks from './components/Drinks'
import DrinkForm from './components/DrinksForm'
import './App.css'

function App() {

  const [staff, setStaff]= useState([])
  const [drinks, setDrinks] = useState([])

  function getMovie() {
    axios.get('/api/staff')
    .then(res => setStaff(res.data))
    .catch(err => console.log(err))
  }

  function getDrinks() {
    axios.get('/api/drinks')
      .then(res => {
        setDrinks(res.data)
      })
      .catch(err => console.log(err))
  }

  function submitStaff(employee) {
    axios.post('/api/staff', employee)
      .then(res => {
        setStaff(prevStaff => [...prevStaff, res.data])
      })
      .catch(err => (console.log(err)))
  }

  function submitDrinks(drink) {
    axios.post('/api/drinks', drink)
      .then(res => {
        setDrinks(prevDrinks => [...prevDrinks, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteStaff(id){
    axios.delete(`/api/staff/${id}`)
      .then(res => {
        setStaff( prevStaff => {
          return prevStaff.filter(employee => employee._id !== id)
        })
      })
      .catch(err => console.log(err))
  }

  function deleteDrink(id){
    axios.delete(`/api/drinks/${id}`)
      .then(res => {
        setDrinks( prevDrinks => {
          return prevDrinks.filter(drink => drink._id !== id)
        })
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovie()
  } ,[])

  useEffect(() => {
    getDrinks()
  }, [])

  const employee = staff.map(person => {
    return <Staff 
      {...person}
      key = {person._id}
      _id={person._id}
      deleteStaff={deleteStaff}
    />
  })

  const beverage = drinks.map(drink => {
    return <Drinks 
      {...drink}
      key = {drink._id}
      _id={drink._id}
      deleteDrink={deleteDrink}
    />
  })
  
  return (
    <>
      <div className="App">
        <StaffForm 
          submitStaff={submitStaff}
          buttonText='Submit'
        />
        {employee}
        <DrinkForm 
          buttonText='Submit'
          submitDrinks={submitDrinks}
        />
        {beverage}
      </div>
    </>
  )
}

export default App
