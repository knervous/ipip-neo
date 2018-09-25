const express = require('express');
const app = express.Router();

app.get('/hello', (req, res) => {
    res.send({ message: 'world' });
});

module.exports = app