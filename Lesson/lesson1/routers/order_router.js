const exp = require('express');
const orderRouter = exp.Router();

orderRouter.get('/', (req, res) => {
    res.send('Welcome to routers of order')
});

orderRouter.get('/userId', (req, res) => {
    const { userId } = req.query;
    const { token } = req.headers;
    res.send("get order userId");
});

orderRouter.get('/:orderId/:custId', (req, res) => {
    const { orderId, custId } = req.params;
    res.send(`get order ${orderId} is ${custId}`);
});

module.exports = orderRouter;