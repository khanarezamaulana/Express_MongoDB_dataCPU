const mongoose = require('mongoose');
const Schema = mongoose.Schema

const dataSchema = new Schema({
    namacpu: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramSisa: Number,
    ramTotal: Number
})

const datacpu = mongoose.model('data', dataSchema)

module.exports = datacpu