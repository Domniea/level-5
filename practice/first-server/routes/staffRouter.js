const express = require('express')
const app = express()
const staffRouter = express.Router()

app.use(express.json())

const {v4: uuidv4} = require('uuid')

const staff = [
    {name: "Adam", job: "Bartender", _id: uuidv4()}, 
    {name: "Erin", job: "Being Awesome!", _id: uuidv4()},
    {name: "Caleen", job: "420", _id: uuidv4()}, 
    {name: "Trey", job: "Manager!", _id: uuidv4()},
    {name: "Vic", job: "Being Black", _id: uuidv4()}, 
    {name: "Tanner", job: "Loving Steve Austin", _id: uuidv4()},
    {name: "'G'", job: "Door/Barback", _id: uuidv4()}, 
    {name: "Chuck", job: "Managing Cheers", _id: uuidv4()}
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

module.exports = staffRouter