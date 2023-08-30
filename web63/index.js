const express = require('express');

const app = express();

const router = require('./router_1/index');



app.use('/router', router);



app.get('/', (req, res) => {
    res.send('hello world !');
})

app.listen(3000, (req,res) => {
    console.log("listening on port 3000");
})