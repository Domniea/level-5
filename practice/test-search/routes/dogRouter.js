const express = require('express')
const dogRouter = express.Router()
const Dog = require('../models/dog')

dogRouter.get('/', ( req, res, next ) => {
    Dog.find(( err , all ) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(all)
    })
})  

dogRouter.get('/:dogId', ( req, res, next) => {
    Dog.find({_id: req.params.dogId},
        ( err, item ) => {
            if( err ) {
                res.sendStatus( 500 )
                return next( err )
            }
            return res.status( 200 ).send(item)
        })
})

dogRouter.post('/', ( req, res, next ) => {
    const newDog = new Dog(req.body)
    newDog.save((err, newDog) => {
        if (err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(newDog)
    })
})

dogRouter.put('/:dogId', ( req, res, next) => {
    Dog.findOneAndUpdate(
        { _id: req.params.dogId },
        req.body,
        { new: true },
        ( err, update ) => {
            if ( err ) {
                res.sendStatus( 500 )
                return next( err )
            }
            return res.status( 200 ).send(update)
        })
})

dogRouter.delete('/:dogId', ( req, res, nest) => {
    Dog.findOneAndDelete(
        { _id: req.params.dogId },
        ( err, deletedItem) => {
            if( err ) {
                res.sendStatus( 500 )
                return next( err )
            }
            return res.status( 200 ).send(`Successfully deleted ${deletedItem.name} from the database`)
        }
    )
})

dogRouter.get('/search/name?', ( req, res, next) => {
    const { name } = req.query
    const pattern = new RegExp(name)
    Dog.find({ name: { $regex: pattern, $options: 'i' } },
    ( err, item) => {
        if ( err ) {
            res.sendStatus( 500 )
            return next( err )
        }
        return res.status( 200 ).send(item)
    })
})


// dogRouter.get('/search', ( req, res, next) => {
//     return console.log(req)
//     const { name } = req.query
//     const pattern = new RegExp(name)
//     Dog.find({ name: { $regex: pattern, $options: 'i' } },
//     ( err, item) => {
//         if ( err ) {
//             res.sendStatus( 500 )
//             return next( err )
//         }
//         return res.status( 200 ).send(item)
//     })
// })
module.exports = dogRouter