const express = require('express')
const staffRouter = express.Router()
const Staff = require('../models/staff.js')



// const {v4: uuidv4} = require('uuid')

// const staff = [
//     {name: "Adam", job: "Bartender", hairColor: "brown",_id: uuidv4()}, 
//     {name: "Erin", job: "Being Awesome!", hairColor: "green",_id: uuidv4()},
//     {name: "Caleen", job: "420", hairColor: "black",_id: uuidv4()}, 
//     {name: "Trey", job: "Manager!",hairColor: "brown", _id: uuidv4()},
//     {name: "Vic", job: "Being Black", hairColor: "brown",_id: uuidv4()}, 
//     {name: "Tanner", job: "Loving Steve Austin",hairColor: "brown", _id: uuidv4()},
//     {name: "'G'", job: "Door/Barback", hairColor: "brown",_id: uuidv4()}, 
//     {name: "Chuck", job: "Managing Cheers",hairColor: "black", _id: uuidv4()}
// ]

//GET all

// staffRouter.route('/')
//     .get(( req,res) => {
//         res.status(200).send(staff)
//     })

staffRouter.get('/',( req, res, next) => {
    Staff.find((err, staff)=> {
        if(err) {
            res.sendStatus(500)
            return next(err) 
        }
        return res.status(200).send(staff)
    })
})

staffRouter.route('/:personId')
        .get(( req, res, next) => {
            const personId = req.params.personId
            const foundPerson = staff.find(employee =>{
                return employee._id === personId
            })
            if(!foundPerson) {
                const error = new Error(`the item with id ${personId} was not found`)
                res.sendStatus(500)
                return next(error)
            }
            res.status(200).send(foundPerson)
        })

//Post

// staffRouter.route('/')
//     .post(( req, res, next) => {
//         const employee = req.body
//             employee._id = uuidv4()
//             staff.push(employee)
//             res.status(201).send(employee)
//     })

staffRouter.post('/', ( req, res, next) => {
    const newEmployee = new Staff(req.body)
    newEmployee.save((err, savedEmployee) => {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(savedEmployee)
    })
})

//Delete
// staffRouter.route('/:personId')
//         .delete(( req, res) => {
//             const personId = req.params.personId
//             const person = staff.findIndex(person => person._id === personId)
//             staff.splice(person, 1)
//             res.status(200).send('successfully deleted!') 
//         })

staffRouter.delete('/:staffId', ( req, res, next ) => {
    Staff.findOneAndDelete({_id: req.params.staffId}, ( err, deletedItem )=> {
        if(err) {
            res.sendStatus(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted  ${deletedItem.name} from the Database`)
    })

})

//Put

// staffRouter.route('/:personId')
//     .put(( req, res, next ) => {
//         const id = req.params.personId
//         const foundId = staff.findIndex(x => x._id === id)
//         const final = Object.assign(staff[foundId], req.body)
//         if(!final) {
//             const error = new Error('no information found to add')
//             return next.status(500)(error)
//         }
//         res.status(2001).send(final)
//     })

staffRouter.put('/:staffId', ( req, res, next ) => {
    Staff.findOneAndUpdate(
        { _id: req.params.staffId },
        req.body,
        { new: true },
        ( err, updatedStaff ) => {
            if(err) {
                res.sendStatus(500)
                return next(err)
            }
            return res.status(200).send(updatedStaff)
        })
})

//Query

staffRouter.get('/search/:hairColor', ( req, res, next ) => {
    Staff.find({ hairColor: req.query.hairColor},( err, foundPeople ) => {
            if(err) {
                res.sendStatus(500)
                return next(500)
            }
            return res.status(200).send(foundPeople)
    })
})

// staffRouter.route('/search/haircolor')
//     .get((req, res, next) => {
//         const haircolor = req.query.haircolor
//         if(!haircolor) {
//             res.sendStatus(500)
//             const error = new Error('you must provide a hair color')
//             return next(error)
//         }
//         const foundData = staff.filter(person => person.hairColor === haircolor)
//         res.status(200).send(foundData)
//     })


module.exports = staffRouter