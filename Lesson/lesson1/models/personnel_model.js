const {default: mongoose} = require('mongoose')
const BaseModel = require('./base_model');
const PersonnelSchema = require('../schemas/personnel_schema')

class PersonnelModel extends BaseModel {
    constructor(){
        super();
        this.init('personnels', PersonnelSchema);
    }   
}

module.exports = new PersonnelModel;