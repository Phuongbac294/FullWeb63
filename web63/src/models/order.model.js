const mongoose = require('mongoose');
const OrderSchema = require('../schema/order.schema');

class OrderModel {
    constructor() {
        this.model = mongoose.model('orders', OrderSchema)
    }

    getAll() {
        const query = this.model.find();
        return query.exec();
    }

    getById(filter) {
        const query = this.model.find(filter);
        if (!query) { return 'Id not found'; }
        else {
            return query.exec();
        }
    }

    async createOrder(data) {
       await this.model.create(data)
    }

    // async updateOrder(id, data) {
        
    //     await this.model.updateOne({_id: id}, data)
    // }
}

module.exports = OrderModel;