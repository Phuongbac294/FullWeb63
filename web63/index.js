const express = require('express');

const app = express();
const port = 3000;
app.use(express.json())

const router = require('./router_1/index');
const web63 = require('./src/router/index');
const database = require('./src/database');
const db = new database();


app.use('/router', router);
app.use('/web63', web63);



app.get('/', (req, res) => {
    res.send('hello world Web63!');
})


app.listen(port, ()=> {
    console.log(`App running on port ${port}`);
    db.connect().then((err, result)=>{
        if (err) throw err;
        console.log('database is connected');
    })
})