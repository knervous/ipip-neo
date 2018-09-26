/**
 * IPIP Neo API
 */

const express = require('express')
const api = express.Router()

const models = require('../models')

api.get('/hello', (req, res) => {
    res.send({ message: 'world' })
})

api.post('/test_result', (req, res) => {
    let result = new models.TestResult()
    result.email = 'test@test.com'
    result.height = 100
    
    result.save((err) => {
        if (err) throw err
        res.json(result)
    })
})

module.exports = api