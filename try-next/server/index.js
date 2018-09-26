const VERSION = 'v1'
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'

const express = require('express')
const next = require('next')
const api = require('./api')

/**
 * Initialize Next and Express, and start the server
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
}

run()