const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const TankSchema = new mongoose.Schema({
    type : String,
    diameter : Number,
    length: Number,
    volume : Number,
    parameters: Object  
})

module.exports = TankSchema;