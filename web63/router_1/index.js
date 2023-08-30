const express = require('express');
const router = express.Router();
const order = require('./order');
const user = require('./user.router')
const myLog = require('./midlwe/loger');
const validateToken = require('./midlwe/validateToken');

router.use(myLog);
router.use(validateToken);

router.use('/order', validateToken, order);
router.use('/user', myLog, user);

module.exports = router;