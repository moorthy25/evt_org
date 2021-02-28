const mongoose = require('mongoose')
const schema=mongoose.schema;
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
    emailid: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        index: true
    }
}, { collection: 'admin_details' });

usersSchema.statics.getId = function (_userid, cb) {
    console.log("userid" + _userid);
    return UserModel.find({ userid: new RegExp(_userid, 'i') }, { userid: 1, _id: 1 }, cb);
};

usersSchema.methods.getUserId = function (_userid, cb) {
    console.log("userid" + _userid);
    return UserModel.find({ userid: new RegExp(_userid, 'i') }, { userid: 1, _id: 1 }, cb);
};
AdminModel = mongoose.model('AdminDetails', adminSchema);

module.exports = { AdminModel };