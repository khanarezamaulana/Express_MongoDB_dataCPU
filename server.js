var express = require('express');
var cors = require('cors');
var mongooseRoute = require('./Route/mongooseRoute')

var app = express()
app.use(cors())
app.use(mongooseRoute)

app.get('/', (req, res)=>{
    res.send('<h2>Express ♥ MongoDB using Mongoose</h2>')
})

app.listen(2000, ()=>{
    console.log('Server aktif diport 2000!')
})