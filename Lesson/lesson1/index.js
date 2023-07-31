const exp = require('express');
const routers = require('./routers/index');
// const mongoose = require('mongoose');

const app = exp();

const port = 3001;
app.use(exp.json());

app.use('/routers', routers);


app.get('/', (rep, res) => {
    res.send(`Hello Web lesson1 `);
})
const database = require('./database');
const db = new database();

app.get('/orders/:orderId/:custId', (req, res) => {
    const { orderId, custId } = req.params;
    console.log(`Order ${orderId} and ${custId}`);
    res.send(`Hello ${orderId} ${custId}`);
})

app.get('/orders', (req, res) => {
    const {userId} = req.query;
    const {token} = req.headers;
    res.send(`Hello web ${userId} and token ${token}`);
})

app.post('/orders', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send(`Data write `);
    res.json({status: 1, message: 'Hello web'});
})

app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
    db.connect().then((err, result)=>{
        if (err) throw err;
        console.log('database is connected');
    })
})