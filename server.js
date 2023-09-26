
const express = require('express');
const app = express();
const http = require('http')
const util = require('./modules/utils')

app.get('/', function (req, res) {
    const name = req.query.name;
    const currentDate = util.myServerDateTime()
    const message = `Hello ${name}, the current server date/time is ${currentDate}`
    res.send(`<b> ${message} </b>`)
})

app.listen(3001, () => {
    console.log('Server running on port 3001.')
})
console.log('Server running on port 8080.')