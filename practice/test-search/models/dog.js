const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({
    name: {
        type: String
    },
    breed: {
        type: String,
    },
    age: {
        type: String
    }
})

module.exports = mongoose.model('Dog', dogSchema)