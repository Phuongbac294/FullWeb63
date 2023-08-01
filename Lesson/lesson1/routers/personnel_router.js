const express = require('express')
const model = require('../models/personnel_model')

const personnelRouter = express.Router();

personnelRouter.get('/',  async (req, res) => {
    const data = await model.find();
    console.log(data);
    res.send('person').json(data);
})

module.exports = personnelRouter;