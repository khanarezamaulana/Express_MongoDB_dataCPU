var express = require('express');
var mongooseRoute = require('./Route/mongooseRoute')

var app = express()
app.use(mongooseRoute)

app.get('/', (req, res)=>{
    res.send('<h2>Express ♥ MongoDB using Mongoose</h2>')
})

app.listen(2000, ()=>{
    console.log('Server aktif diport 2000!')
})
