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
    .get((req,res) => {
        res.send(staff)
    })
    .post((req, res) => {
        const employee = req.body
        employee._id = uuidv4()
        staff.push(employee)
        res.send(`${employee.name} was succsessfully added`)
    })

staffRouter.route('/:personId')
    .get((req, res) => {
        const personId = req.params.personId
        const foundPerson = staff.find(employee => employee._id === personId)
        res.send(foundPerson)
    })

staffRouter.route('/search/hairColor')
    .get((req, res) => {
        const hairColor = req.query.hairColor
        const foundData = staff.filter(person => person.hairColor === hairColor)
        res.send(foundData)
    })

module.exports = staffRouter