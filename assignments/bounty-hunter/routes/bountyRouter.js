const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

// - First Name
// - Last Name
// - Living (Boolean)
// - Bounty Amount (number)
// - Type (‘Sith’ or ‘Jedi’)
// - ID 

const bounties = [
    {}
]