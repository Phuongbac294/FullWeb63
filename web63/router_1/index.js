const express = require('express');
const router = express.Router();
const order = require('./order');
const user = require('./user.router')
const myLog = require('./midlwe/loger');
// const validateToken = require('./midlwe/validateToken');

router.use(myLog);
// router.use(validateToken);
router.get('/', (req, res) => {res.send('welcome to router')});
router.use('/order', order);
router.use('/user', user);

module.exports = router;