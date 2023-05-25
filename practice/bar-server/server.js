const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);



const app = express()

// const {v4: uuidv4} = require('uuid')

app.use(express.json())
app.use(morgan('dev'))

//Conect to DB
mongoose.connect('mongodb://127.0.0.1:27017/barstaff', () => console.log('connected to DB'))
console.log(mongoose.version)


//Routes
app.get('/', (req, res) => {
    res.send('Welcome One And All To My Server!!!')
})

app.use('/staff', require('./routes/staffRouter'))
app.use('/drinks', require('./routes/drinksRouter'))


//Error handler
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})
