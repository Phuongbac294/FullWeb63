const mongoose = require('mongoose');
const userSchema = require('../schemas/user_schema')
// const BaseModel = require('./base_model')

class UserModel {
    constructor() {
        this.model = mongoose.model('users', userSchema);
    }
       
    getAll() {
        const query = this.model.find();
        return query.exec();
    }  

    get(id) {
        let query = this.model.findById(id);
        return query.exec();
    }

    create(data) {
        let result = this.model.create(data);
        return result;
    }

    update(id, data) {
        let result = this.model.updateOne({_id: id},data);
        return result;
    }

    delete(id) {
        let result = this.model.deleteOne({_id: id});
        return result;
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