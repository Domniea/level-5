import { useState, useEffect } from 'react'
import axios from 'axios'
import Dog from './component/Dog'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const initSearch = { search: '' }
  const [ inputs, setInputs] = useState({
    search: ''
  })
  const [dogData, setDogData] = useState([])
  function handleChange( e ) {
    const { name, value } = e.target
    setInputs( prevState => ({
      ...prevState,
      [name]: value
    }))    
  }

  useEffect(() => {
    axios.get('/api/dogs')
      .then(res => setDogData( res.data ))
      .catch(err => console.log( err ))
  }, [])

  // console.log(dogData)

  const pup = dogData.map(canine => {
    return <Dog 
      {...canine}
      key={canine._id}
    />
  })
function handleSubmit(e) {
  e.preventDefault()
axios.get(`/api/dogs/search/name?name=${inputs.search}`)
  .then(res => setDogData(res.data))
  .catch(err=> console.log(err))
}

  return (
    <>
    <h1>Home</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search By Name</label>
      <br></br>
      <input 
        type='text'
        name='search'
        value={ inputs.search }
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
    {pup}
    </>
  )
}

export default App
