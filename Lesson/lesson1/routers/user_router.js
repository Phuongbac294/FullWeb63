const exp = require('express');
const UserModel= require('../models/user_model');
// const controller = require('../controllers/user_controller');
// const validateToken = require('../middleware/validateToken')
const model = new UserModel();

const userRouter = exp.Router();

userRouter.get('/', (req, res) => {
    const userData = model.getAll();
    res.json(userData);
})

// userRouter.get('/add', controller.getAll);
// userRouter.post('/login', controller.login);

// userRouter.get('/', async (req, res) => {
//     const data = await model.find();
//     res.json(data);
// });

// userRouter.post('/login', (req, res) => {
//     let {username, password} = req.body;
//     if (!username || !password) {
//         // throw new Error('thieu username or password')  
//         res.send({sucess: false, tokem: "error"}); 
//         // return;
//     } else {
//         model.findByUserAndPassword(username, password).then((data) => {
//             console.log('data', data);
//             if (data.length > 0) {
//                 let token = jwt.sign({username: username, email: result[0].email}, private)
//             res.json({existed: true, token: token});
//             } else {
//                 res.status(400).send({message:"login failed"})
//             };
//         })

//     }
// })


module.exports = userRouter;
