const mongoose = require('mongoose')
const Schema = mongoose.Schema


const work = [
    'Bartender',
    'Barback',
    'Door',
    'Manager',
    'Matnence',
    'Owner'
]
//Staff Schema
const staffSchema = new Schema({
    name: {
        type: String,
    },
    job: {
        type: String,
    },
    hairColor: {
        type: String,
    }
})

module.exports = mongoose.model('Staff',staffSchema)