const exp = require('express');
const orderRouter = exp.Router();
const OrderModel = require('../models/order_model');

const model = new OrderModel();

orderRouter.get('/', async (req, res) => {
    const data = await model.find();
    console.log(data);
    res.json(data)
});

orderRouter.get('/:id', (req, res) => {
    let {id} = req.params
    model.get(id).then(data => { res.send(data)})
})

orderRouter.put('/add', async (req, res) => {
    const {data} = await req.body;
    console.log(data);
    await model.create(data);
    res.send("get order userId");
});

orderRouter.get('/detail/:id', (req, res) => {
    let {id} = req.params;
    let result = model.getOrderDetail(id);
    res.send(result);
})

// orderRouter.get('/add/:orderId/:custId', (req, res) => {
//     const { orderId, custId } = req.params;
//     res.send(`get order ${orderId} is ${custId}`);
// });

orderRouter.delete('/:id', (req, res) => {
    let {id} = req.params
    model.update(id).then(data => { res.send(data)})
})

module.exports = orderRouter;