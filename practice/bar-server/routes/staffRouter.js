const express = require('express')

const app = express()
const staffRouter = express.Router()

app.use(express.json())

const {v4: uuidv4} = require('uuid')

const staff = [
    {name: "Adam", job: "Bartender", hairColor: "brown",_id: uuidv4()}, 
    {name: "Erin", job: "Being Awesome!", hairColor: "green",_id: uuidv4()},
    {name: "Caleen", job: "420", hairColor: "black",_id: uuidv4()}, 
    {name: "Trey", job: "Manager!",hairColor: "brown", _id: uuidv4()},
    {name: "Vic", job: "Being Black", hairColor: "brown",_id: uuidv4()}, 
    {name: "Tanner", job: "Loving Steve Austin",hairColor: "brown", _id: uuidv4()},
    {name: "'G'", job: "Door/Barback", hairColor: "brown",_id: uuidv4()}, 
    {name: "Chuck", job: "Managing Cheers",hairColor: "black", _id: uuidv4()}
]

staffRouter.route('/')
    .get(( req,res) => {
        res.status(200).send(staff)
    })

staffRouter.route('/:personId')
        .get(( req, res, next) => {
            const personId = req.params.personId
            const foundPerson = staff.find(employee =>{
                return employee._id === personId
            })
            if(!foundPerson) {
                const error = new Error(`the item with id ${personId} was not found`)
                res.status(500)
                return next(error)
            }
            res.status(200).send(foundPerson)
        })

staffRouter.route('/')
    .post(( req, res, next) => {
        const employee = req.body
            employee._id = uuidv4()
            staff.push(employee)
            res.status(201).send(employee)
    })

staffRouter.route('/:personId')
    .put(( req, res, next ) => {
        const id = req.params.personId
        const foundId = staff.findIndex(x => x._id === id)
        const final = Object.assign(staff[foundId], req.body)
        if(!final) {
            const error = new Error('no information found to add')
            return next.status(500)(error)
        }
        res.status(2001).send(final)
    })

staffRouter.route('/:personId')
        .delete(( req, res) => {
            const personId = req.params.personId
            const person = staff.findIndex(person => person._id === personId)
            staff.splice(person, 1)
            res.status(200).send('successfully deleted!') 
        })

staffRouter.route('/search/haircolor')
    .get((req, res, next) => {
        const haircolor = req.query.haircolor
        if(!haircolor) {
            res.status(500)
            const error = new Error('you must provide a hair color')
            return next(error)
        }
        const foundData = staff.filter(person => person.hairColor === haircolor)
        res.status(200).send(foundData)
    })


module.exports = staffRouter