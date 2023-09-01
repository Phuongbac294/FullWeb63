const express = require('express');
const OrderModel = require('../models/order.model');
const {ObjectId} = require('mongodb')

const model = new OrderModel();
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {res.send('the web63 to order')});
router.get('/add', async (req, res) => {
    const data = await model.getAll();
    res.json(data);
})

router.get('/search', async (req, res) => {
    let filter = await req.body
    const data = await model.getById(filter);
    res.json(data);
})

router.post('/create', async (req, res) => {
    const data = await req.body;
    model.createOrder(data);
    res.send('created order')
})

router.put('/update/', async (req, res) => {
    // let id = await req.params;
    let {_id, data }= await req.body;
    console.log( id, data);
    await model.updateOrder(_id , data);
    res.send('updated order') 
})

module.exports = router;