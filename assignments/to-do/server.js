const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the server homepage')
})

app.use('/todo', require('./routes/todoRouter'))

app.listen(9000, () => {
    console.log('Server is running on PORT 9000')
})
