const express = require('express');
const router = express.Router();
const user = require('./user');
const order = require('./order');
const order2 = require('./order2');
const validateToken = require('../middlerwa/validateToken')


router.use('/users', user);
router.use('/order', validateToken, order);
router.use('/order2', validateToken, order2);

router.get('/', (req, res) => { res.send('Welcome to the web63 server')});

module.exports = router;