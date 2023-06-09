import { useState, useEffect } from 'react'
import {  } from 'express'
import axios from 'axios'
import Staff from './components/Staff'
import Drinks from './components/Drinks'
import StaffForm from './components/StaffForm'
import './App.css'
import DrinkForm from './components/DrinkForm'

function App() {

  const [staff, setStaff]= useState([])
  const [drinks, setDrinks] = useState([])

  function getStaff() {
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

  function addStaff(employee){
    axios.post('/api/staff', employee)
      .then(res => {
        setStaff(prevState => 
          [
            ...prevState,
            res.data
          ]
        )
      })
      .catch(err => console.log(err))
  }

  function addDrink(drink) {
    axios.post('/api/drinks', drink)
      .then(res => {
        setDrinks(prevState => 
          [
            ...prevState,
            res.data
          ]
        )
        // console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  function deleteStaff(id) {
    axios.delete(`/api/staff/${id}`)
      .then(res => {
        setStaff(prevState => {
          return prevState.filter(x => x._id !== id)
        })
      })
      .catch(err => console.log(err))
  }

  function deleteDrink(id) {
    axios.delete(`/api/drinks/${id}`)
      .then(res => {
        setDrinks(drinks.filter(x => x._id !== id))
        setDrinks(prevState => {
          return prevState.filter(x => x._id !== id)
        }
      )
    })
      .catch(err => console.log(err))
  }

  useEffect(() => {
     getStaff()
  } ,[])

  useEffect(() => {
    getDrinks()
  }, [])

  const employee = staff.map(person => {
    return <Staff 
        key = {person._id}
        {...person}
        deleteStaff = {deleteStaff}
    />
  })

  const beverage = drinks.map(drink => {
    return <Drinks 
        key = {drink._id}
        {...drink}
        deleteDrink={deleteDrink}
    />
  })
  
  return (
    <>
      <div className="App">
        <StaffForm 
          addStaff = {addStaff}
        />
        {employee}
        {/* {drinks.map( drink => <Drinks {...drink} key = {drink._id} deleteDrink = {deleteDrink} />)} */}
        <DrinkForm 
          addDrink = {addDrink}
        />
        {beverage}
      </div>
    </>
  )
}

export default App
