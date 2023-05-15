const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

// - First Name
// - Last Name
// - Living (Boolean)
// - Bounty Amount (number)
// - Type (‘Sith’ or ‘Jedi’)
// - ID


bounties = [
    {firstName: "Minch", lastName: "Yoda", living: false, bounty: `10,000,000 credits`, type: "jedi", _id: uuidv4()},
    {firstName: "luke", lastName: "Skywalker", living: true, bounty: `7,000,000 credits`, type: "jedi", _id: uuidv4()},
    {firstName: "Anakin", lastName: "Skywalker", living: false, bounty: `5,000,000 credits`, type: "sith", _id: uuidv4()},
    {firstName: "Leia", lastName: "Organa", living: true, bounty: `8,500,000 credits`, type: "jedi", _id: uuidv4()},
    {firstName: "Obi-wan", lastName: "Kenobi", living: false, bounty: `5,500,000 credits`, type: "jedi", _id: uuidv4()},
    {firstName: "Kylo", lastName: "Ren", living: true, bounty: `10,000,000 credits`, type: "sith", _id: uuidv4()}
]

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })

bountyRouter.route('/:bountyId')
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    }) 

bountyRouter.route('/')
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`${newBounty.firstName} ${newBounty.lastName} successfully added!`)
    })

bountyRouter.route('/:bountyId')
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const selectedBounty = bounties.findIndex(bounty => bounty._id === bountyId)
        const updated = Object.assign(bounties[selectedBounty], req.body)
        res.send(updated)
    })

bountyRouter.route('/:bountyId')
    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const selectedBounty = bounties.findIndex(bounty => bounty._id === bountyId)
        const edited = bounties.splice(selectedBounty, 1)
        res.send("DELETE SUCCESSFUL")
    })
    
    module.exports = bountyRouter