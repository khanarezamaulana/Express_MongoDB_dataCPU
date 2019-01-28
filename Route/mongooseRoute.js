var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var datacpu = require('../models/datacpu');
var os = require('os');
var url = 'mongodb://Reza:12345@localhost:27017/dataCPU';
router.use(bodyParser.json())

// post data
router.post('/data', (req, res)=>{
    mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB')
    })
    new datacpu({
        namacpu: os.hostname(),
        tipe: os.type(),
        platform: os.platform(),
        rilis: os.release(),
        ramSisa: os.freemem(),
        ramTotal: os.totalmem()
    }).save().then((x)=>{
        console.log(x)
        res.send({
            namacpu: os.hostname(),
            tipe: os.type(),
            platform: os.platform(),
            rilis: os.release(),
            ramSisa: os.freemem(),
            ramTotal: os.totalmem(),
            status: 'Data Terkirim!'
        })
    }).catch((x)=>{
        console.log(x)
        res.send('Data Gagal Terkirim!')
    })
})

// GET data 
router.get('/data', (req, res)=>{
    mongoose.connect(url, ()=>{
        console.log('Terhubung ke MongoDB!')
    })
    datacpu.find((err, data)=>{
        console.log(data)
        res.send(data)
    })
})

module.exports = router;