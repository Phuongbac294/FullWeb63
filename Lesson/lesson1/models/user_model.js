const mongoose = require('mongoose');
const userSchema = require('../schemas/user_schema')

class UserModel {
    constructor() {
        this.model = mongoose.model('User', userSchema);
    }

    findByUserAndPassword(username, password) {
        const query = this.model.findOne({ username: username, password: password});
        return query.exec();
    }

}

module.exports  = UserModel;