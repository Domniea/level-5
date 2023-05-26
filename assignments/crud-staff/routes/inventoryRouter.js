const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//Get
inventoryRouter.get('/', ( req, res, next ) => {
    Inventory.find(( err, items ) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//Post

inventoryRouter.post(('/'), ( req, res, next) => {
    const item = new Inventory(req.body)
    item.save(( err, newItem ) =>{
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(newItem)
    })
})

//Delete

inventoryRouter.delete('/:itemId', ( req, res, next ) => {
    Inventory.findOneAndDelete({ _id: req.params.itemId }, ( err, deletedItem ) => {
        if(err) {
            res.sendStatus(500)
        return next(err)
        } 
        return res.status(200).send(`Successfully deleted ${deletedItem.name}!`)
    })
})

//Put

inventoryRouter.post('/:itemId', ( req, res, next ) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        {new: true},
        ( err, updatedStaff ) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(updatedStaff)
    })

})

module.exports = inventoryRouter
