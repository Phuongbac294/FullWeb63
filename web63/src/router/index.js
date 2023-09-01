const express = require('express');
const router = express.Router();
const user = require('./user');
const order = require('./order');
const validateToken = require('../middlerwa/validateToken')


router.use('/users', user);
router.use('/order', validateToken, order);

router.get('/', (req, res) => { res.send('Welcome to the web63 server')});

module.exports = router;