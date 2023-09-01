const express = require('express');
const {MongoClient} = require('mongodb');
const jwt = require('jsonwebtoken');
const praviter_Key = "galkghakfdklgrgldkaal";
const validateToken = require('../middlerwa/validateToken')

const UserModel = require('../models/user.model');

const model = new UserModel();

const router = express.Router();
router.use(express.json())

router.get('/', (req, res) => {res.send('the web63 to username')});

router.get('/add', validateToken, async (req, res) => {
    const data = await model.getAll();
    res.json(data);
})

router.post('/login', async (req, res) => {
    const {username, password} = await req.body;    
    if (!username || !password) { res.send('username and password are wrong'); return; }
    else {
        model.findByUsernameAndPassword(username, password).then((data)=> {
            if (data && data != null) {
                let token = jwt.sign({username: username, email: data.email}, praviter_Key)
                res.json({existed: true, token: token});
            } else {
                res.json({existed: false, token: ""});
            }
        })
    }
})

module.exports = router;