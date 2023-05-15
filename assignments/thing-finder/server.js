const express = require('express')
const app = express()

app.use(express.json())

const items = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.get('/', (req, res) => {
    res.send(items)
})

app.get('/:type', (req, res) => {
    const type = req.params.type
    const foundItems = items.filter(x => x.type === type)
    res.send(foundItems.length > 0 ? foundItems : 'try again!')
})

app.get('/:type/search/name', (req, res) => {
    const item = req.query.name
    const foundItem = items.find(x => x.name === item)
    res.send(foundItem)
})

app.get('/:type/search/price', (req, res) => {
    const min = req.query.min
    const max = req.query.max
    const foundItems = items.filter(x => x.price > min && x.price < max)
    res.send(foundItems)
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})