const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server Homepage')
})

app.use('/test', require('./routes/dataRouter'))

app.listen(9000, () => {
    console.log('Server working on 9000')
})