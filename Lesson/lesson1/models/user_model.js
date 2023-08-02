const mongoose = require('mongoose');
const userSchema = require('../schemas/user_schema')
// const BaseModel = require('./base_model')

class UserModel {
    constructor() {}

    init() {
        this.model = mongoose.model('users', userSchema);
    }
       
    getAll() {
        const query = this.model.find();
        return query.exec();
    }


    

    findByUsername(username) {
        const query = this.model.findOne({ username: username});
        return query.exec();
    }
    // findByUserAndPassword(username, password) {
    //     const query = this.model.findOne({ username: username, password: password});
    //     return query.exec();
    // }

}

module.exports  = UserModel;