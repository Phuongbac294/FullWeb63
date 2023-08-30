const express = require('express');
const jwt = require('jsonwebtoken');

const praviter_Key = "galkghakfdklgrgldkaal"

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send('Welcome to the user api');
})

router.post('/login', (req, res) => {
    let {username, password} = req.body;
    console.log(username, password);
    if (!username || !password) { res.json({sucess: false, token: ""}) }
    else {
        let token = jwt.sign({username: username}, praviter_Key)
        res.json({username: username, token: token})
    }
});

module.exports = router;