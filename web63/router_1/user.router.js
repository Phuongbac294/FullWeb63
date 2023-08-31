const express = require('express');
const jwt = require('jsonwebtoken');
const MongoClient = require('mongodb').MongoClient;

const praviter_Key = "galkghakfdklgrgldkaal"

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send('Welcome to the user api');
})

router.post('/login', (req, res) => {
    let {username, password} = req.body;
    if (!username || !password) { res.json({sucess: false, token: ""}) } // ktra username, password nhap khong dung cu phat
    else {
        MongoClient.connect("mongodb+srv://Web63_atlas:Web63atlas@cluster0.wntgsqq.mongodb.net/", (err, client)   => {
            if (err)  throw err; //truyền dữ liệu vào mongodb, ktra dữ liệu
            const db = client.db("Web63"); // vào dữ liệu database

            db.collection("users") // vào file collection
                .find({ username: username, password: password }) // tìm kiểm document trong collection
                .toArray((err, result) => {
                    if (err) throw err;
                    if (result && result != null && result.length>0) {
                        let token = jwt.sign({username: username, email: result[0].email}, praviter_Key)
                        res.json({username: username, token: token})
                        console.log(result);
                    } else {
                        res.json({sucess: false, token: ""})
                    }
                })
        })
    }
});

router.put('/add', (req, res) => {
    MongoClient.connect('mongodb+srv://Web63_atlas:Web63atlas@cluster0.wntgsqq.mongodb.net/')
    async (err, client) => {
        if (err) {res.send("Couldn't connect to Mongo")}
        const db = client.db('Web63');
        const result = await db.collection('users').insertOne(req.body)
        res.send(result);
    }
})

module.exports = router;