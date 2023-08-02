const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    firstname : String,
    lastname : String,
    email: String,
    phone: Number,
    citizenId: ObjectId
  
})

module.exports = UserSchema;