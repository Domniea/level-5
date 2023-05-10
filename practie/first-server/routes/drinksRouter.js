const express = require('express')
const app = express()
const drinkRouter = express.Router()

app.use(express.json())

const {v4: uuidv4} = require('uuid')

const drinks = [
    {type: "domestic", cost: '3', _id: uuidv4()},
    {type: "sub well", cost: '3.25', _id: uuidv4()},
    {type: "well", cost: '4.75', _id: uuidv4()},
    {type: "call", cost: '5.75', _id: uuidv4()},
    {type: "premium", cost: '6.25', _id: uuidv4()},
    {type: "super", cost: '6.75', _id: uuidv4()}
]


drinkRouter.route('/')
    .get((req, res) => {
        res.send(drinks)
    })
    .post((req, res) => {
        const drink = req.
        drink._id = uuidv4()
        drinks.push(drink)
        res.send(`${drink.name} has been successfully added`)
    })

module.exports = drinkRouter