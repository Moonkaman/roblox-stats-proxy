const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.get('/hourly', (req, res) => {
    axios({
        method: 'get',
        url: 'https://develop.roblox.com/v1/places/6764302962/stats/Revenue?granularity=Hourly&divisionType=Age',
        headers: {
            "cookie": process.env.USER_COOKIE
        }
    })
    .then(function (response) {
        res.json(response.data)
    });
})

app.get('/daily', (req, res) => {
    axios({
        method: 'get',
        url: 'https://develop.roblox.com/v1/places/6764302962/stats/Revenue?granularity=Daily&divisionType=Age',
        headers: {
            "cookie": process.env.USER_COOKIE
        }
    })
    .then(function (response) {
        res.json(response.data)
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

