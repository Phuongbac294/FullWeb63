const mongoose = require('mongoose');
const PersonnelSchema = new mongoose.Schema({
    username : String,
    password : String,
    firstname : String,
    lastname : String,
    email: String, 
    phone: Number,
    brithday: Date,
    address: {
        village: String,
        ward: String,
        city: String,
        country: String
    }
  
})

module.exports = PersonnelSchema;