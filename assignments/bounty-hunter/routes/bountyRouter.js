const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')


//Get

bountyRouter.get('/', ( req, res, next ) => {
    Bounty.find(( err, all) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(all)
    })
})


//Post

bountyRouter.post('/', ( req, res, next ) => {
    const newBounty = new Bounty(req.body)
    newBounty.save(( err, person) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(person)
    })
})

//Delete

bountyRouter.delete('/:bountyId',( req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId}, ( err, deletedItem) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.firstName}`)
    })
})

bountyRouter.put('/:bountyId', ( req, res, next ) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId },
        req.body,
        { new: true },
        ( err, update) => {
            if(err) {
                res.sendStatus(500)
                return next(500)
            }
            return res.status(200).send(update)
        }
    )
})
    
module.exports = bountyRouter