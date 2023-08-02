const mongoose = require('mongoose');
const userSchema = require('../schemas/user_schema')
const BaseModel = require('./base_model')

class UserModel extends BaseModel {
    constructor() {
        super();
        this.init("users", userSchema);
        // this.model = mongoose.model('users', userSchema);
    }

    findByUsername(username) {
        const query = this.model.findOne({ username: username});
        return query.exec();
    }
    // findByUserAndPassword(username, password) {
    //     const query = this.model.findOne({ username: username, password: password});
    //     return query.exec();
    // }

    // find() {
    //     const query = this.model.find();
    //     return query.exec();
    // }
}

module.exports  = new UserModel;