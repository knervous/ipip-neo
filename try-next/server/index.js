const VERSION = 'v1'
const DB_URL = 'mongodb://localhost:27017/ipip-neo'

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'

const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

const api = require('./api')

/**
 * Initialize Next and Express, start the server, and connect to the database
 */
async function run(){    
    const next_app = next({ dev })
    await next_app.prepare()
    
    const server = express()
    server.use(`/api/${VERSION}`, api) // Handle api calls
    server.get('*', next_app.getRequestHandler()) // Handle Next routes
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`Listening on port ${port}`)
    })

    mongoose.connect(DB_URL)    
}

run()