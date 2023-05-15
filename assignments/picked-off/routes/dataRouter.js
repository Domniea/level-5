const express = require('express')
const app = express()
const dataRouter = express.Router()

app.use(express.json())

dataRouter.route('/')
    .get((req, res, next) => {
        console.log('FIRST MIDDLEWARE')
        next()
    })
    .get((req, res, next) => {
        console.log('SECOND MIDDLEWARE')
        req.body = {
            name: "test"
        }
        next()
    })
    .get((req, res, next) => {
        console.log('FINAL MIDDLEWARE')
        res.send(req.body)
    })

module.exports = dataRouter