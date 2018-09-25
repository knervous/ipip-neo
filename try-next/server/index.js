/**
 * Set up the express server
 */
function initExpress(app){
    const VERSION = 'v1'
    const port = process.env.PORT || 3000;
    const express = require('express')
    const server = express();
    const defaultRequestHandler = app.getRequestHandler()

    const api = require('./api')
    server.use(`/api/${VERSION}`, api)
    server.get('*', (req, res) => defaultRequestHandler(req, res))

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Listening on port ${port}`);
    })
}

/**
 * Prepare the Next app, and then initialize express
 */
function initNext(){
    const dev = process.env.NODE_ENV !== 'production';
    const next = require('next')
    const app = next({ dev });    
    app.prepare().then(() => initExpress(app))
}

initNext()