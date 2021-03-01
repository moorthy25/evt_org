const mongoose = require('mongoose')
const schema=mongoose.Schema;
let adminSchema=new schema({
    userid: {
        type: String,
        index: true,
        unique: true,
        trim: true,
        required: true
    },
    name:String,
    password: {
        type: String,
        require:true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        index: true
    }
});

AdminModel = mongoose.model('AdminDetails', adminSchema);

module.exports = AdminModel;