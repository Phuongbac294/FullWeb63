const mongoose = require('mongoose');
class database {
    constructor() {}
    connect = async () => {
        await mongoose.connect(
            'mongodb+srv://Web63_atlas:Web63atlas@cluster0.wntgsqq.mongodb.net/Web63'
            // 'mongodb+srv://web63:Web63!123@cluster0.cgedwds.mongodb.net/web63?retryWrites=true&w=majortity'
        );
    }
}

module.exports = database;