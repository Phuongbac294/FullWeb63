const mongoose = require('mongoose');
const PersonnelSchema = new mongoose.Schema({
    username : String,
    password : String,
    firstname : String,
    lastname : String,
    email: String,
    phone: Number,
    citizenId: Object
  
})

module.exports = PersonnelSchema;