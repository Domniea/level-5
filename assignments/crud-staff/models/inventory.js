const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)
