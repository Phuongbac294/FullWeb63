const model = require('../models/personnel_model');
// const bcrypt = require('bcrypt');
// const privatekey = require('../privatekey');

const saltRounds = 10;

class PersonnelController {
    constructor(){};
    
    // login = async (req, res) => {
    //     let {username, password} = req.body;
    //     if (!username || !password) {
    //         res.send({existed: false, token: "", msg: "username and password are required"});
    //     } else {
    //         let user = await model.findByUsername(username);
    //         if (user && user != null) {
    //             let checkPassword = await bcrypt.compareSync(password, user.password);
    //             if (checkPassword) {
    //                 let token = jwt.sign({username: username, password: password, email: user.email}, private);
    //                 res.send({existed: true, token: token, msg: "Found"});
    //             } else {
    //                 res.send({existed: false, token: "", msg: "Invalid password"});
    //             }
    //         }
    //     }
    // }

    getAll = async (req, res) => {
        let result = await model.getAll();
        return result;
    }

    getById = async (req, res) => {
        let {id} = req.params;
        let result = await model.get(id);
        return result;
    }

    getPersonDetailById = async (req, res) => {
        let {id} = req.params;
        let result = await model.getPersonDetail(id);
        res.send(result);
    }

    aggregate = async (req, res) => {}
}

module.exports = new PersonnelController();