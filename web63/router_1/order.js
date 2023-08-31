const express = require('express');
const { MongoClient } = require('mongodb');

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

router.get('/aggregate', async (req, res) =>{
    const agg = [
        {
          '$match': {
            'size': `${req.query.size}`,
          }
        }, {
          '$group': {
            '_id': '$name', 
            'totalQuantily': {
              '$sum': '$quantity'
            }, 
            'averageOrderPrice': {
              '$avg': '$price'
            }
          }
        }
      ];

      const client = await MongoClient.connect(
        'mongodb+srv://Web63_atlas:Web63atlas@cluster0.wntgsqq.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      const coll = client.db('Web63').collection('orders');
      const cursor = coll.aggregate(agg);
      const result = await cursor.toArray();
      await client.close();

      res.send(result);
})
module.exports = router;