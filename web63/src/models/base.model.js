const {default: mongoose} = require('mongoose');

class BaseModel {
    constructor() {}

    init(name,schema) {
        this.model = mongoose.model(name, schema);
    }

    getAll(){
        let query = this.model.find();
        return query.exec()
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
        let result = this.model.update({_id:id}, data);
        return result;
    }

    delete(id) {
        let result = this.model.delete({_id:id});
        return result;
    }
}

module.exports = BaseModel;