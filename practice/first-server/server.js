const express = require('express')
const app = express()

const {v4: uuidv4} = require('uuid')

app.get('/', (req, res) => {
    res.send('Welcome One And All To My Server!!!')
})

app.use('/staff', require('./routes/staffRouter'))
app.use('/drink', require('./routes/drinksRouter'))


app.listen(9000, () => {
    console.log('Server is running on port 9000')
})
