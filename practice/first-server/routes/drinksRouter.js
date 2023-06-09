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

drinkRouter.route('/:drinkId')
    .get((req, res) => {
        const id = req.params.drinkId
        const found = drinks.find(x => x._id === id)
        res.send(found)
    })

drinkRouter.route('/')
    .post((req, res) => {
        const drink = req.body
        drink._id = uuidv4()
        drinks.push(drink)
        res.send(drink)
    })

drinkRouter.route('/:drinksId')
    .put((req, res) => {
        const id = req.params.drinksId
        const foundId = drinks.findIndex(x => x._id === id)
        const final = Object.assign(drinks[foundId], req.body)
        res.send(final)
    })

drinkRouter.route('/:drinksId')
    .delete((req, res) => {
        const id = req.params.drinksId
        const foundId = drinks.findIndex(x => x._id === id)
        drinks.splice(foundId, 1)
        res.send('Drink Deleted!')
    })

module.exports = drinkRouter