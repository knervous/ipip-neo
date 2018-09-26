/**
 * IPIP Neo API
 */

const express = require('express')
const api = express.Router()

api.get('/hello', (req, res) => {
    res.send({ message: 'world' })
})

module.exports = api