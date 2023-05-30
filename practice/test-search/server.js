const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

app.use(express.json())
app.use (morgan('dev'))


mongoose.connect('mongodb://127.0.01:27017/test-search', () => {
    console.log('Connected to DB')
})
console.log(mongoose.version)

app.get('/', (req, res) => {
    res.send(
        'Welcome to the Server'
    )
})

app.use('/dogs', require('./routes/dogRouter'))

app.use(( err, req, res, next) => {
    return res.send({errMsg: err})
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})