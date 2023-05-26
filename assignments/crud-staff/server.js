const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/crud-store', () => {
    console.log('Server is connected to DB')
})
app.get('/', ( req, res, next ) => {
    return res.send('Welcome to the Server')
})

app.use('/inventory', require('./routes/inventoryRouter'))

app.use(( err, req, res, next ) => {
    return res.send({errMsg: err})
})

app.listen(9000, () => {
    console.log('Server is successfully connected to port 9000')
})