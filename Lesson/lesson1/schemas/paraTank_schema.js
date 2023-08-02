// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const ParaTankSchema = new mongoose.Schema({    
    temp : Number,
    length: Number,
    pressure1: Number,
    pressure2: Number ,
    V1 : Number,
    V2 : Number,
    M: Number
})

module.exports = ParaTankSchema;