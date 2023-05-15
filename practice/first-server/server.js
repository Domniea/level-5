const express = require('express')
const morgan = require('morgan')
const app = express()

const {v4: uuidv4} = require('uuid')

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Welcome One And All To My Server!!!')
})

app.use('/staff', require('./routes/staffRouter'))
app.use('/drinks', require('./routes/drinksRouter'))


app.listen(9000, () => {
    console.log('Server is running on port 9000')
})
