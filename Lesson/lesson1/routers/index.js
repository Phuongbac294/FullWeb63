const exp = require('express');
const routers = exp.Router();
const userRouter = require('./user_router');
const orderRouter = require('./order_router');

const mylog = require('../middleware/logger')
const validateToken = require('../middleware/validateToken')   

routers.use(mylog)
routers.use('/user', userRouter)
routers.use('/order', validateToken, orderRouter)
routers.get('/', (req, res) => {
    res.send('Welcome to the router!');
})

module.exports = routers;