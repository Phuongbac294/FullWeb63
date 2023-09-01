const mongoose = require('mongoose');
const UserSchema = require('../schema/user.schema');

class UserModel {
    constructor() {
        this.model = mongoose.model('users', UserSchema)
    }

    findByUsernameAndPassword(username, password) {
        const query = this.model.findOne({ username: username, password: password})
        return query.exec();
    }

    getAll(){
        const query = this.model.find();
        return query.exec();
    }

    // createUser(data){
    //     const query = this.model.
    // }
}

module.exports = UserModel