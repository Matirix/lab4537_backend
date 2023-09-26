
const express = require('express');
const app = express();
const http = require('http')
const util = require('./modules/utils')
PORT = `https://outrageous-battledress-seal.cyclic.cloud` || 8080

app.get('/', function (req, res) {
    const name = req.query.name;
    const currentDate = util.myServerDateTime()
    const message = `Hello ${name}, the current server date/time is ${currentDate}`
    res.send(`<b> ${message} </b>`)
})

app.listen(PORT, () => {
    console.log('Server running on port 3001.')
})
