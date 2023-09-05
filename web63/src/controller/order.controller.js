const { MongoClient } = require('mongodb');
const model = require('../models/order2.model')
// const model = new models

class OrderController {
    constructor() {};

    getOrderDetailById = async (req, res) => {
        let {id} = req.params;
        let results = await model.getOrderDetail(id);
        res.send(results);
    }

    getAll = async (req, res) => {
        let result = await model.getAll();
        res.send(result);
    }

    getById = async (req, res) => {
        let {id} = req.params;
        let query = await model.get(id);
        res.send(query)
    }

    // aggregate = async (req, res) => {
    //     const agg = [   {$match: `${req.query.size}`},
    //                     {$group: {  _id: "$name", 
    //                                 totalQuantity: {$sum: "$quantity"},
    //                                 averageOrderPrice: {$avg: "$price"}
    //                              },}
    //                 ];
    //     const client = await MongoClient.connect ()
    // }
}

module.exports = new OrderController;