const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    name: String,
    size: String,
    price: Number,
    quantity : Number,
    date: Date,
    createdBy: ObjectId,
    item: Array.of(ObjectId)
})

module.exports = OrderSchema;