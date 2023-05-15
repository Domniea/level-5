const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
const todoRouter = express.Router()

app.use(express.json())

const list =[
    {
        name: "Clean The House",
        description: "Bedroom, Bathroom, ect...",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Give Dogs A Bath",
        description: "Wash the boys",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    }
]


todoRouter.route('/')
    .get((req, res) => {
        res.send(list)
    })

todoRouter.route('/:toDoId')
    .get((req, res) => {
        const id = req.params.toDoId
        const item = list.find(todoItem => todoItem._id === id)
        res.send(item)
    })

todoRouter.route('/')
    .post((req, res) => {
        const newToDo = req.body
        newToDo._id = uuidv4()
        list.push(newToDo)
        res.send(list)
    })

todoRouter.route('/:toDoId')
    .put((req, res) => {
        const toDoId = req.params.toDoId
        const arrLocation = list.findIndex(toDo => toDo._id === toDoId)
        const updated = Object.assign(list[arrLocation], req.body)
        res.send('ToDo List has been updtaed')
    })

todoRouter.route('/:toDoId')
    .delete((req, res) => {
        const toDoId = req.params.toDoId
        const arrLocation = list.findIndex(toDo => toDo._id === toDoId)
        list.splice(arrLocation, 1)
        res.send('List Item Has Been Deleted!')
    })

module.exports = todoRouter