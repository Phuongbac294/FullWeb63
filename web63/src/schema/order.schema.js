const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema ({
    name: String,
    size: String,
    price: Number,
    quantity: Number,
    date: Date,
})

module.exports = OrderSchema