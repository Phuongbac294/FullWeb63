const express = require('express')
// const model = require('../models/personnel_model')
const controller = require('../controllers/personnel_controller')

const personnelRouter = express.Router();

personnelRouter.get('/', controller.getAll);
personnelRouter.get('/:_id', controller.getById);
// personnelRouter.get('/detail/:id', controller.getPersonDetailById)

// personnelRouter.get('/',  async (req, res) => {
//     const data = await model.find();
//     console.log(data);
//     res.send('person').json(data);
// })

module.exports = personnelRouter;