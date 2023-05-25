const express = require('express')
const drinkRouter = express.Router()
const Drinks = require('../models/drinks')
const { model } = require('mongoose')
// const app = express()

// app.use(express.json())

// const {v4: uuidv4} = require('uuid')

// const drinks = [
//     {type: "Domestic", cost: '3', _id: uuidv4()},
//     {type: "Micro", cost: '4', _id: uuidv4()},
//     {type: "Sub Well", cost: '3.25', _id: uuidv4()},
//     {type: "Well", cost: '4.75', _id: uuidv4()},
//     {type: "Call", cost: '5.75', _id: uuidv4()},
//     {type: "Premium", cost: '6.25', _id: uuidv4()},
//     {type: "Super", cost: '6.75', _id: uuidv4()}
// ]

//Get
drinkRouter.get('/', ( req, res, next ) => {
    Drinks.find((err, drinks) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(drinks)
    })
})

// drinkRouter.route('/:drinkId')
//     .get(( req, res , next) => {
//         const id = req.params.drinkId
//         const found = drinks.find(x => x._id === id)
//         if(!found) {
//             res.status(500)
//             const error = new Error(`the item with id ${drinkId} was not found`)
//             return next(error)
//         }
//         res.status(200).send(found)
//     })

//Post

drinkRouter.post('/', ( req, res, next) => {
    const newDrink = new Drinks(req.body)
    newDrink.save(( err, beverage) => {
        if(err) {
            res.status(500)
            return next(err)
        }
            return res.status(200).send(beverage)
    })
})

// drinkRouter.route('/')
//     .post(( req, res, next) => {
//         const drink = req.body
//         drink._id = uuidv4()
//         drinks.push(drink)
//         res.status(201).send(drink)
//     })

drinkRouter.route('/:drinksId')
    .put(( req, res, next) => {
        const id = req.params.drinksId
        const foundId = drinks.findIndex(x => x._id === id)
        const final = Object.assign(drinks[foundId], req.body)
        if(!final) {
            const error = new Error('no information found to add')
            res.status(500)
            return next(error)
        }
        res.status(201).send(final)
    })

drinkRouter.route('/:drinksId')
    .delete((req, res) => {
        const id = req.params.drinksId
        const foundId = drinks.findIndex(x => x._id === id)
        drinks.splice(foundId, 1)
        res.status(200).send('Drink Deleted!')
    })

module.exports = drinkRouter