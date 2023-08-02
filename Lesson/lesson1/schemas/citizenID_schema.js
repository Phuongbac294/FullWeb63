// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const CitienIdSchema = new mongoose.Schema({
    no : Number,
    name : String,
    brithday: Date,
    dataRange : Date,
    address: {
        No : String,
        ward: String,
        district: String,
        city: String,
        country: String
    }  
})

module.exports = CitienIdSchema;