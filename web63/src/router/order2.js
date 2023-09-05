const express = require('express');
const router = express.Router();
const controller  = require('../controller/order.controller')

router.use(express.json(),)

router.get('/', (req, res) => { res.send("Welcome to the order two"); });
router.get('/detail/:id', controller.getOrderDetailById);
// router.get('/aggregate', controller.aggregate)
router.get('/add', controller.getAll)
router.get('/:id', controller.getById)


module.exports = router