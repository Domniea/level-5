const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send(
        'Welcome to Bounty Server. For BOUNTIES see /bounty'
    )
})

app.use('/bounty', require('./routes/bountyRouter'))

app.listen(9000, () => [
    console.log('Server is running on 9000')
])