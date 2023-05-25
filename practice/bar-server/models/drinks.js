const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema({
    type: {
        type: String,
    },
    cost: {
        type: Number,
    }
})

module.exports = mongoose.model('Drinks', drinkSchema)