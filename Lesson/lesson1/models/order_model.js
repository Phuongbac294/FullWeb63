const mongoose = require('mongoose');
const OrderSchema = require('../schemas/order_schema');
const { ObjectId } = require('mongodb');
// const BaseModel = require('./base_model');

class OrderModel {
    constructor(){
        this.model = mongoose.model("orders", OrderSchema)
    }

    find() {
        const query = this.model.find();
        return query.exec();
    }

    get(id) {
        let query = this.model.findById(id);
        return query.exec();
    }

    create(data) {
        let result = this.model.create(data);
        return result;
    }

    update(id, data) {
        let result = this.model.updateOne({id: id},data);
        return result;
    }

    delete(id) {
        let result = this.model.deleteOne({_id: id});
        return result;
    }
    
    getOrderDetail(id) {
        // lấy thống tin từ order
        // lấy danh sách product từ trường item của order
        // return vê order detail ( các trường của order, items: danh sách product đã lấy ở trên)
        let agg =[
            {
                $unwind: {path: '$item'}
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'items',
                    foreignField: '_id',
                    as: 'products'
                }
            },
            {
                $unwind: {path: '$product'}
            },
            {
                $group: {
                    _id: '$_id',
                    name: {$first: '$name'},
                    size: {$first: '$size'},
                    date: {$first: '$date'},
                    createdBy: {$first: '$createBy'},
                    item: {$push: '$product'}
                }
            },
            {
                $match: {_id: new mongoose.Types.ObjectId(`${id}`)}
            }
        ]
        let result = this.model.aggregate(agg).exec();
        if (result.length > 0) return result[0];

        return this.get(id);
    }
}

module.exports  = OrderModel;