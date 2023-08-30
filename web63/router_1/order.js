const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send('Welcome to the order !');
})

router.get('/orders/:orderId/:custId', (req, res) =>{
    const {orderId, custId} = req.params;;
    res.send(`get orders by orderId: ${orderId} and custId: ${custID}`);
})

router.get('/orders', (req, res) =>{
    const { userId} = req.query;
    const {token} = req.headers;
    res.send(`get orders by userId: ${userId} and token: ${token}`);
})

router.post('/orders', (req, res) =>{
    let data = req.body;
    res.json({data: data, msg: `post method of order`})
})

module.exports = router;