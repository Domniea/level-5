const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
mongoose.set('strictQuery', true)

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://127.0.0.1:27017/bountyhunter', () => {
    console.log('Server is connected to DB')
})
console.log(mongoose.version)

app.get('/', (req, res) => {
    res.send(
        'Welcome to the Server'
    )
})

app.use('/bounty', require('./routes/bountyRouter'))

app.use(( err, req, res, next) => {
    return res.send({errMsg: err})
})

app.listen(9000, () => {
    console.log('Server is running on 9000')
})